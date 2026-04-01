import { twMerge } from "tailwind-merge"
import React from 'react';

export function Container({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={twMerge('mx-auto max-w-7xl px-3 md:px-6 w-full items-center justify-center', className)}
      {...props}
    />
  )
}
