import { ViewContainerFC } from './types';

export const ViewContainer: ViewContainerFC = ({ children }) => {
  return <div className='py-10 h-full'>{children}</div>;
};
