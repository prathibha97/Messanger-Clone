import clsx from 'clsx';
import Link from 'next/link';
import { FC } from 'react';
import { IconType } from 'react-icons';

interface MobileItemProps {
  href: string;
  icon: IconType;
  active?: boolean;
  onClick?: () => void;
}

const MobileItem: FC<MobileItemProps> = ({
  href,
  icon: Icon,
  active,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) return onClick();
  };

  return (
    <Link
      href={href}
      onClick={onClick}
      className={clsx(
        `
  group
  flex
  gap-x-3
  leading-6
  text-sm
  font-semibold
  w-full
  justify-center
  p-4
  text-gray-500
  hover:text-black
  hover:bg-gray-100
  `,
        active && 'bg-gray-100 text-black'
      )}
    >
      <Icon className='h-6 w-6' />
    </Link>
  );
};

export default MobileItem;
