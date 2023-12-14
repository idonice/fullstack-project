import React, { ReactNode } from 'react';
import '../../App.css';
interface LinkWrapperProps {
  href: string;
  target?: string;
  children: ReactNode;
}

const LinkWrapper: React.FC<LinkWrapperProps> = ({ href, target, children }) => {
  return (
    <a className='link' href={href} target={target}>
      {children}
    </a>
  );
};

export default LinkWrapper;
