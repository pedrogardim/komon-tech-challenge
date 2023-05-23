'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const NewIntegrationLayout: React.FC<{ children: React.JSX.Element }> = ({
  children,
}) => {
  const completePath = usePathname();
  const pathArr = completePath.split('/').slice(2);

  const getBreadcumbItemHref = (index: number) =>
    '/integrations/' +
    pathArr.slice(0, index + 1).reduce((a, b) => a + '/' + b);

  return (
    <>
      <span className="absolute top-0 left-0 uppercase">
        {pathArr.map((route, routeIndex) => (
          <span key={route}>
            <Link
              href={getBreadcumbItemHref(routeIndex)}
              key={route}
            >
              {route}
            </Link>
            {' > '}
          </span>
        ))}
      </span>
      <Link href={'/integrations'}>
        <Image
          className="absolute top-0 right-0"
          src="/icons/close.svg"
          alt="close"
          width={36}
          height={36}
        />
      </Link>

      {children}
    </>
  );
};

export default NewIntegrationLayout;
