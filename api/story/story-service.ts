import { getDbClient } from "../util/database";
import { storyCommentSchema, storySchema } from "./story-model";

export async function createstory(story: any, email: string) {
  let dbClient = await getDbClient();
  let found = 0;
  let updatedStory = await storySchema.cast(story);
  updatedStory.createdBy = email;
  const stories = await dbClient.db().collection("stories").find().toArray();
  console.log(stories);
  while (found != -1) {
    updatedStory.id = "STRY" + Math.floor(10000 + Math.random() * 90000);
    found = stories.findIndex((item) => item.id == updatedStory.id);
  }
  await dbClient.db().collection("stories").insertOne(updatedStory);
}

export async function getStoryByUser(email: string) {
  let dbClient = await getDbClient();
  const stories = await dbClient
    .db()
    .collection("stories")
    .find({ createdBy: email })
    .toArray();
  return stories;
}

export async function getAllStories() {
  let dbClient = await getDbClient();
  const stories = await dbClient.db().collection("stories").find().toArray();
  return stories;
}
export async function getStoryById(id: string) {
  let dbClient = await getDbClient();
  let story = await dbClient.db().collection("stories").findOne({ id: id });
  await dbClient
    .db()
    .collection("stories")
    .updateOne({ id: id }, { $set: { views: ++story.views } });
  story.views++;
  return story;
}

export async function createComment(user: any, comment: any, story_id: string) {
  let updatedComment = storyCommentSchema.cast(comment);
  updatedComment.createdBy = user.email;
  updatedComment.name = user.name;
  let dbClient = await getDbClient();
  await dbClient
    .db()
    .collection("stories")
    .updateOne({ id: story_id }, { $push: { comments: updatedComment } });
}
export async function increaseVotes(type: any, id: string) {
  let dbClient = await getDbClient();
  let story = await dbClient.db().collection("stories").findOne({ id: id });
  if (type === "upvote") {
    await dbClient
      .db()
      .collection("stories")
      .updateOne({ id: id }, { $set: { upvotes: ++story.upvotes } });
    story.views++;
  } else if (type === "downvote") {
    await dbClient
      .db()
      .collection("stories")
      .updateOne({ id: id }, { $set: { downvotes: ++story.downvotes } });
    story.views++;
  }
  return true;
}
