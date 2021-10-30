import * as yup from 'yup';
export const storyCommentSchema = yup.object().shape({
  text: yup.string().required(),
  name: yup.string(),
  createdBy: yup.string().email().trim(),
  timestamp: yup.number().default(function () {
    return +new Date();
  }),
  upvotes: yup
    .number()
    .integer()
    .default(function () {
      return 0;
    }),
  downvotes: yup
    .number()
    .integer()
    .default(function () {
      return 0;
    }),
});

export const storySchema = yup.object().shape({
  id: yup.string(),
  image_url: yup.string(),
  title: yup.string().required(),
  category: yup.string().required(),
  location: yup.string().required(),
  description: yup.string().required(),
  isEmergency: yup.bool().default(function () {
    return false;
  }),
  timestamp: yup.number().default(function () {
    return +new Date();
  }),
  views: yup
    .number()
    .integer()
    .default(function () {
      return 0;
    }),
  comments: yup
    .array()
    .of(storyCommentSchema)
    .default(function () {
      return [];
    }),

  public: yup.bool().default(function () {
    return false;
  }),
  upvotes: yup
    .number()
    .integer()
    .default(function () {
      return 0;
    }),
  downvotes: yup
    .number()
    .integer()
    .default(function () {
      return 0;
    }),
  createdBy: yup.string(),
});
export const storyRequestParamsSchema = yup.object().shape({
  type: yup.string().oneOf(['upvote', 'downvote']).required(),
});
export const findStoryIdParamsSchema = yup.object().shape({
  id: yup.string().required(),
});
