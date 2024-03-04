import { connectToMongo } from '../connect';
import { User } from '../models';
import { UserType } from '../types';
import { unstable_noStore as noStore } from 'next/cache';

export async function getUser(id: string): Promise<UserType> {
  noStore();
  try {
    connectToMongo();
    const post = await User.findById<UserType>(id);
    if (post) return post;
    else throw new Error(`@/lib/db/actions/user.ts -> getUser: user ${id} not found`);
  } catch {
    throw new Error('@/lib/db/actions/user.ts -> getUser: failed to fetch user.');
  }
}
