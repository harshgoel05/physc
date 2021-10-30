import jwt from 'jsonwebtoken';

export async function findUserProfile(token: string) {
  return await jwt.verify(token, process.env.JWT_SECRET || '');
}
