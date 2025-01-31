import { cn } from '@/utils/utils';
import Image from 'next/image';
import { forwardRef } from 'react';
import { LogoProps } from './index.types';

const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ disabled = false, ...props }, ref) => {
    return (
      <div
        {...props}
        ref={ref}
        className={cn(
          'relative [--size:--size-md]',
          props.className,
          '[--size-sm:36px] [--size-md:47px] size-[--size]'
        )}
      >
        <Image
          fill
          src={
            disabled
              ? '/images/logo/disabled-logo.png'
              : '/images/logo/logo.png'
          }
          alt="arvand-logo"
          className="object-cover object-center"
        />
      </div>
    );
  }
);
Logo.displayName = 'Logo';

export default Logo;
