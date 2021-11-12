import React from 'react';
import Link from 'next/link';

interface Props {}

const Header: React.FC<Props> = () => {
  const pages = [
    { href: '/', name: 'Home' },
    { href: '/cards', name: 'Cards' },
    { href: '/blog', name: 'Blog' },
  ];

  return (
    <header>
      <nav>
        <ul>
          {pages.map((page) => (
            <li key={page.href}>
              <Link href={page.href}>
                <a>{page.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
