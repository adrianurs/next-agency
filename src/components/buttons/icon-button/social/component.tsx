import { GithubLogo, GitlabLogo } from '@/assets';
import { IconButton } from '../component';
import { SocialButtonFC } from './types';
import styles from './styled.module.css';

export const GithubButton: SocialButtonFC = (props) => {
  return (
    <IconButton
      icon={<GithubLogo height={30} />}
      {...props}
      className={`${styles.github_button} ${props.className}`}
    />
  );
};

export const GitlabButton: SocialButtonFC = (props) => {
  return (
    <IconButton
      icon={<GitlabLogo height={30} />}
      {...props}
      className={`${styles.gitlab_button} ${props.className}`}
    />
  );
};
