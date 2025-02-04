'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

import { mapLogoByRoute } from '@/helpers';

import styles from './header.module.css';

export const Header: FC = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <Image width={16} height={16} src={mapLogoByRoute(pathname)} alt="logo" />
    </header>
  );
};
