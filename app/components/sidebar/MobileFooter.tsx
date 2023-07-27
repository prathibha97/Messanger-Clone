'use client';
import useConversation from '@/app/hooks/use-conversation';
import useRoutes from '@/app/hooks/useRoutes';
import { FC } from 'react';
import MobileItem from './MobileItem';

interface MobileFooterProps {}

const MobileFooter: FC<MobileFooterProps> = ({}) => {
  const routes = useRoutes();
  const { isOpen } = useConversation();

  // @ts-ignore
  if (isOpen) return null;

  return (
    <div className='fixed justify-between w-full bottom-0 z-40 flex items-center bg-white border-t-[1px] lg:hidden'>
      {routes.map((item) => (
        <MobileItem
          key={item.label}
          href={item.href}
          icon={item.icon}
          active={item.active}
          onClick={item.onClick}
        />
      ))}
    </div>
  );
};

export default MobileFooter;
