import { cn } from '@/utils/utils';
import Image from 'next/image';
import { forwardRef } from 'react';
import { LogoTextProps } from './index.types';

const LogoText = forwardRef<HTMLDivElement, LogoTextProps>((props, ref) => {
  return (
    <div
      {...props}
      ref={ref}
      className={cn(
        'relative [--size:--size-default]',
        props.className,
        'w-[--size] [--size-default:127px] aspect-[127/47]'
      )}
    >
      <Image
        fill
        src="/images/logo/logo-text.png"
        alt="arvand-logo"
        className="object-cover object-center"
      />
    </div>
  );
});
LogoText.displayName = 'LogoText';

export default LogoText;
