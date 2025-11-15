'use client';

import { useRouter } from 'next/navigation';
import type { FC, PropsWithChildren } from 'react';

import { getModelRoute } from '@/shared/routes';
import { Card } from '@/shared/shadCnUi/card';

interface CardWithModelNavigationProps extends PropsWithChildren {
  name: string;
}

export const CardWithModelNavigation: FC<CardWithModelNavigationProps> = ({
  name,
  children,
}) => {
  const router = useRouter();

  return (
    <Card onClick={() => router.push(getModelRoute(name))}>{children}</Card>
  );
};
