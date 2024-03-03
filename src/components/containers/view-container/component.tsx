import { ViewContainerFC } from './types';

export const ViewContainer: ViewContainerFC = ({ children }) => {
  return <div className='py-5 w-full'>{children}</div>;
};
