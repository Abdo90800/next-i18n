import React from 'react';
import Link from 'next/link';
import LanguageSwitcher from './local-switcher';

function Header() {
  return (
    <header className=''>
      <nav>
        <ul>
          <LanguageSwitcher/>
          <li>
            <Link  href="/">Home</Link> {/* إزالة <a> */}
          </li>
          <li>
            <Link href="/about">About</Link> {/* إزالة <a> */}
          </li>
          <li>
            <Link href="/contact">Contact</Link> {/* إزالة <a> */}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
