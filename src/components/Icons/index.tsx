import React from 'react';
import { Icons } from './Icons';

interface Props {
  name: string;
  width?: number;
  height?: number;
  className?: string;
  title?: string;
}

export const Icon = ({ name, ...props }: Props) => {
  const IconComponent = Icons[name];
  if (!IconComponent) {
    return null;
  }
  return <IconComponent {...props} />;
};
