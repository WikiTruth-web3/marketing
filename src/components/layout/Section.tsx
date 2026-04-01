import { twMerge } from "tailwind-merge"
import React from 'react';

export function Section({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <section
      className={twMerge('mx-auto w-full py-10 md:py-20', className)}
      {...props}
    />
  )
}
