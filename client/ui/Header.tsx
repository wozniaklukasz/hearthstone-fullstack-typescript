import React from 'react';
import Link from 'next/link';

interface Props {}

const Header: React.FC<Props> = () => (
  <nav>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/blog">
      <a>Blog</a>
    </Link>
  </nav>
);

export default Header;
