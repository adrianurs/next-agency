import { LoaderWrapperFC } from './types';
import styles from './styled.module.css';

export const LoaderWrapper: LoaderWrapperFC = ({ isLoading, loaderSize = 8, children }) => {
  return isLoading ? (
    <div className={`${styles.loader} h-${loaderSize} w-${loaderSize}`} role='status'>
      <span className={styles.loader_span}>Loading...</span>
    </div>
  ) : (
    children
  );
};
