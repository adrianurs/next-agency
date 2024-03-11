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
    await connectToMongo();
    const user = await User.findById<UserType>(params.user);
    if (user) return NextResponse.json(user);
    else return errorResponse('User not found.', 400);
  } catch {
    throw new Error('@/server/actions/user.ts -> getUser: failed to fetch user.');
  }
}

export async function deleteUser(
  _: NextRequest,
  { params }: { params: { user: string } }
): Promise<NextResponse<true>> {
  noStore();
  try {
    await connectToMongo();
    await User.findByIdAndDelete<UserType>(params.user);
    return NextResponse.json(true);
  } catch {
    throw new Error('@/server/actions/user.ts -> deleteUser: failed to delete user.');
  }
}

export async function getUsers(_: NextRequest): Promise<NextResponse<UserType[] | ErrorType>> {
  console.log('fetching users');
  noStore();
  try {
    await connectToMongo();
    const users = await User.find<UserType>();
    if (users) return NextResponse.json(users);
    else return errorResponse('No users found.', 400);
  } catch {
    throw new Error('@/server/actions/user.ts -> getUser: failed to fetch user.');
  }
}
