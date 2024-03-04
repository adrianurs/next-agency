import { NextRequest, NextResponse } from 'next/server';
import { connectToMongo, UserType, User } from '@/lib';
import { unstable_noStore as noStore } from 'next/cache';
import { ErrorType } from './types';
import { errorResponse } from './utils';

export async function getUser(
  _: NextRequest,
  { params }: { params: { user: string } }
): Promise<NextResponse<UserType | ErrorType>> {
  noStore();
  try {
    connectToMongo();
    const user = await User.findById<UserType>(params.user);
    if (user) return NextResponse.json(user);
    else return errorResponse('User not found.', 400);
  } catch {
    throw new Error('@/server/actions/user.ts -> getUser: failed to fetch user.');
  }
}
