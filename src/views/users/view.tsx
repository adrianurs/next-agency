import { ViewContainer } from '@/components';
import { request } from '@/lib';

export async function UsersView() {
  const users = (await request.get('/users')).data;
  return <ViewContainer>{JSON.stringify(users)}</ViewContainer>;
}
