'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NewIntegrationLayout: React.FC<{ children: React.JSX.Element }> = ({
  children,
}) => {
  return (
    <>
      <Link href={'/integrations'}>
        <Image
          className="absolute top-4 left-4"
          src="/icons/arrow-left.svg"
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
