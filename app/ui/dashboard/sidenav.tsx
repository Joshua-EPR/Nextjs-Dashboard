import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <aside className="flex h-screen w-64 flex-col bg-gray-800 text-white shadow-lg border-r border-gray-700">
      <Link
        className="flex h-24 items-center justify-center bg-gray-900 hover:bg-gray-700 transition-all"
        href="/"
      >
        <AcmeLogo />
      </Link>
      <nav className="flex flex-col flex-grow px-6 py-4 space-y-4">
        <NavLinks />
      </nav>
      <div className="px-6 py-4">
        <form>
          <button className="flex w-full items-center gap-3 rounded-md bg-red-500 px-4 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-red-400">
            <PowerIcon className="w-6" />
            <span>Sign Out</span>
          </button>
        </form>
      </div>
    </aside>
  );
}