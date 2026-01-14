'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  Cog,
  FilePenLine,
  Globe,
  Home,
  Menu as MenuIcon,
  MessageCircleQuestion,
  Phone,
  School,
  Star,
  X,
} from 'lucide-react';
import { useScrollSpy } from '@/hooks/use-scroll-spy';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navItems = [
  { href: '#home', label: 'হোম', icon: Home },
  { href: '#courses', label: 'কোর্সসমূহ', icon: BookOpen },
  { href: '#features', label: 'বৈশিষ্ট্য ও সেবা', icon: Star },
  { href: '#teachers', label: 'শিক্ষকবৃন্দ', icon: School },
  { href: '#faq', label: 'জিজ্ঞাসা (AI)', icon: MessageCircleQuestion },
  { href: '#admission', label: 'ভর্তি ফরম', icon: FilePenLine },
  { href: '#contact', label: 'যোগাযোগ', icon: Phone },
];

const sectionIds = navItems.map((item) => item.href.substring(1));

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const activeId = useScrollSpy(sectionIds);

  const navContent = (
    <div className="flex h-full flex-col bg-[hsl(var(--dark-blue-hsl))] text-white">
      <div className="border-b border-white/20 p-5 text-center">
        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border-4 border-primary bg-white">
          <Cog className="h-10 w-10 animate-spin text-primary [animation-duration:5s]" />
        </div>
        <h3 className="text-xl font-bold tracking-wider">GTTC</h3>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'flex items-center gap-3 rounded-md px-4 py-3 text-gray-300 transition-all hover:bg-primary hover:text-white',
                  href === `#${activeId}` && 'bg-primary text-white shadow-lg'
                )}
              >
                <Icon className="h-5 w-5" />
                <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );

  return (
    <>
      <Button
        variant="default"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-[60] rounded-full bg-[hsl(var(--dark-blue-hsl))] text-white shadow-lg hover:bg-primary md:hidden"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        <span className="sr-only">Toggle menu</span>
      </Button>

      <div
        className={cn(
          'fixed inset-y-0 left-0 z-50 w-[260px] transform shadow-2xl transition-transform duration-300 ease-in-out md:hidden',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {navContent}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className="fixed top-0 left-0 hidden h-full w-[260px] shadow-lg md:block">
        {navContent}
      </aside>
    </>
  );
}
