'use client';

import Link from 'next/link';

type SocialMediaLink = 'linkedin' | 'github';

export default function Header() {
  return (
    <div className="md:flex items-center justify-between h-28 animate-fade-up animate-ease-in-out animate-duration-700">
      <div className="flex items-center space-x-1 md:space-x-3">
        <Link href={'/'}>Home</Link>
        <Link className="cursor-pointer" href={'https://www.linkedin.com/in/bryan-liaw-a92012227/'} target="_blank">
          Linkedin
        </Link>
        <Link className="cursor-pointer" href={'https://github.com/Shoko118'} target="_blank">
          Github
        </Link>
      </div>
    </div>
  );
}
