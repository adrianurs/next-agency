import { ViewContainerFC } from './types';

export const ViewContainer: ViewContainerFC = ({ children, flex }) => {
  return <div className={`py-10 h-full w-full ${flex && 'flex gap-7'}`}>{children}</div>;
};
