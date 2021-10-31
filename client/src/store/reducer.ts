export const initialState = {
  Doctor: {
    name: 'Yaksh Chopra',
    department: 'Dermetology',
    location: 'Jammu',
    reports: 5,
    posts: [
      {
        title: 'Another covid-19 variant',
        desc: 'This is a test post',
        time: 1,
      },
      {
        title: 'Kidney stone',
        desc: 'This is a test post',
        time: 3,
      },
      {
        title: 'Knee replacement or not',
        desc: 'This is a test post',
        time: 5,
      },
    ],
    emergencies: [
      {
        title: 'Testing for an MI',
        desc: 'This is a test post',
        time: 3,
      },
      {
        title: 'Is this pseudoscience?',
        desc: 'This is a test post',
        time: 3,
      },
    ],
    patients: [
      {
        title: 'Hiral Soni',
        desc: 'This is a test patient',
        time: 5,
      },
      {
        title: 'John doe',
        desc: 'This is a test patient',
        time: 9,
      },
      {
        title: 'Meghan fox',
        desc: 'This is a test patient',
        time: 9,
      },
      {
        title: 'Tom Furry',
        desc: 'This is a test patient',
        time: 12,
      },
    ],
    points: 12,
    comments: [
      {
        title: 'Test comment',
        desc: 'this is a test comment',
        time: 16,
      },
      {
        title: 'Test comment',
        desc: 'this is a test comment',
        time: 16,
      },
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
        location: action.location,
        points: action.points,
        comments: action.comments,
        patients: action.patients,
      };

    default:
      return state;
  }
}
export default reducer;
