export const TOO_MANY_REQUESTS_ERROR = {
  code: 429,
  message:
    "Ooops! Our servers has blocked you as you've sent too many requests. Please try after an hour.",
};
export const SERVER_ERROR = {
  code: 500,
  message: "It seems something broke from server's end. We're on it!",
};
export const UNAUTHORIZED_ACCESS = {
  code: 401,
  message: 'Wait! It seems you are not authorized to access the content!',
};
export const WRONG_PASSWORD = {
  code: 401,
  message: 'Wooop! The password seems to be incorrect',
};
export const USER_DOESNOT_EXISTS = {
  code: 401,
  message: 'Oho! No user found',
};
export const USER_ALREADY_EXISTS = {
  code: 409,
  message: 'Wait! It seems you have already resigtered! Please try logging in',
};
