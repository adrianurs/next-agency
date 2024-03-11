import { UserCard, ViewContainer } from '@/components';
import { UserType, request } from '@/lib';
import styles from './styled.module.css';

export async function UsersAdminView() {
  const users = await request.get<UserType[]>('/users');

  return (
    <ViewContainer>
      <div className={styles.cards_container}>
        {Array.isArray(users) &&
          users.map((user, i) => <UserCard key={`${user.username}-${i}`} user={user} />)}
      </div>
    </ViewContainer>
  );
}
