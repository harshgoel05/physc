export const initialState = {
  Doctor: {
    name: 'Yaksh Chopra',
    department: 'Dermetology',
    reports: 5,
    posts: [
      {
        title: 'Testing',
        desc: 'This is a test post',
        time: 3,
      },
    ],
    emergencies: [
      {
        title: 'Testing',
        desc: 'This is a test post',
        time: 3,
      },
      {
        title: 'another test',
        desc: 'This is a test post',
        time: 3,
      },
    ],
    points: 12,
    comments: [
      {
        title: 'Test comment',
        desc: 'this is a test comment',
        time: 16,
      },
    ],
  },
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'SET_DOCTOR':
      return {
        name: action.name,
        department: action.department,
        reports: action.reports,
        posts: action.posts,
        points: action.points,
        comments: action.comments,
      };

    default:
      return state;
  }
}
export default reducer;
