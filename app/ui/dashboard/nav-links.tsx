"use client"
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
// Map of links to display in the side navigation.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col space-y-2">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx("flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-gray-700 hover:text-white",{ 'bg-gray-700 text-white': pathname === link.href })}
          >
            <LinkIcon className="w-6 text-gray-400 transition-all duration-300 hover:text-white" />
            <span>{link.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}