import Link from 'next/link';
import { AnchorHTMLAttributes, ReactNode } from 'react';

interface SafeLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: string;
  children: ReactNode;
  className?: string;
}

export const SafeLink = ({ href, children, className, ...props }: SafeLinkProps) => {
  const isExternal = href.startsWith('http') || href.startsWith('//');
  
  if (isExternal) {
    return (
      <Link
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </Link>
    );
  }
  
  return (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  );
};
