import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/Logo.png';

const Nav = () => {
  return (
    <>
      <nav className="pb-12 flex justify-between min-w-full">
        <Link href="/">
          <Image
            width="260"
            height="36"
            src={logo}
            alt="Logo for Autograph It"
          />
        </Link>
        <div>
          <button className="bg-fern-500 hover:bg-fern-200 active:bg-fern-300 text-ebony-800 font-bold py-2 px-4 rounded">
            Join Beta
          </button>
        </div>
      </nav>
    </>
  );
};

export { Nav };
