'use client';
import React from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui';

const NewIntegrationLayout: React.FC<{ children: React.JSX.Element }> = ({
  children,
}) => {
  return (
    <>
      <Link href={'/integrations'}>
        <Icon
          className="absolute top-4 left-4"
          icon="arrow-left"
          size={36}
        />
      </Link>

      {children}
    </>
  );
};

export default NewIntegrationLayout;
