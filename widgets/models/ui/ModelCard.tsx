import Image from 'next/image';
import type { FC } from 'react';

import { CardWithModelNavigation } from './CardWithModelNavigation';
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/shared/shadCnUi/card';

interface ModelCardProps {
  name: string;
  shortDescription: string;
}

export const ModelCard: FC<ModelCardProps> = ({ name, shortDescription }) => {
  return (
    <CardWithModelNavigation name={name}>
      <CardContent>
        <Image src={name} alt="Model image preview" />
      </CardContent>
      <CardFooter>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{shortDescription}</CardDescription>
      </CardFooter>
    </CardWithModelNavigation>
  );
};
