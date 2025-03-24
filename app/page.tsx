import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white">
      <div className="flex h-24 w-full max-w-4xl items-center justify-between rounded-lg bg-white bg-opacity-10 p-4 shadow-lg">
        <AcmeLogo />
      </div>
      <div className="mt-8 flex w-full max-w-4xl flex-col gap-6 rounded-xl bg-white p-8 text-gray-800 shadow-2xl md:flex-row">
        <div className="flex flex-col gap-6 md:w-1/2">
        <div className={styles.shape}></div>
          <p className={`${lusitana.className} text-2xl font-semibold leading-snug md:text-3xl`}>
            <strong>Welcome to Acme.</strong> Experience the future of web development with{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500 hover:underline">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex w-max items-center gap-4 rounded-lg bg-blue-600 px-6 py-3 text-lg font-medium text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-lg"
          >
            <span>Log in</span> <ArrowRightIcon className="w-6" />
          </Link>
        </div>
        <div className="flex w-full items-center justify-center md:w-1/2">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={560}
            height={620}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
            />
        </div>
      </div>
    </main>
  );
}