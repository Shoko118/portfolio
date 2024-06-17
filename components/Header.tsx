'use client';

import Link from 'next/link';

type SocialMediaLink = 'linkedin' | 'github';

export default function Header() {
  function handleSocialLink(link: SocialMediaLink) {
    if (link === 'linkedin') window.open('https://www.linkedin.com/in/bryan-liaw-a92012227/', '_blank');

    return window.open('https://github.com/Shoko118', '_blank');
  }

  return (
    <div className="md:flex items-center justify-between mt-10 mb-10 animate-fade-up animate-ease-in-out animate-duration-700">
      <div className="flex items-center space-x-1 md:space-x-3">
        <Link href={'/'}>Home</Link>
        <div className="cursor-pointer" onClick={() => handleSocialLink('linkedin')}>
          Linkedin
        </div>
        <div className="cursor-pointer" onClick={() => handleSocialLink('github')}>
          Github
        </div>
      </div>
    </div>
  );
}
