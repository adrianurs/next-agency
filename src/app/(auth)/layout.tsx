import { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return <div className='max-w-[800px] w-full self-center flex flex-col gap-5'>{children}</div>;
}
