import { GithubLogo, GitlabLogo } from '@/assets';
import { IconButton } from '../component';
import { GithubButtonFC } from './types';
import styles from './styled.module.css';

export const GithubButton: GithubButtonFC = (props) => {
  return (
    <IconButton
      icon={<GithubLogo height={30} />}
      {...props}
      className={`${styles.github_button} ${props.className}`}
    />
  );
};

export const GitlabButton: GithubButtonFC = (props) => {
  return (
    <IconButton
      icon={<GitlabLogo height={30} />}
      {...props}
      className={`${styles.gitlab_button} ${props.className}`}
    />
  );
};
