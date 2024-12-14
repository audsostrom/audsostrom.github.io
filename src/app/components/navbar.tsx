import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-end items-center px-8 py-4 bg-transparent font-accent">
      <ul className="flex space-x-6">
      <li>
          <Link href="/">
            <div className="text-gray-800 hover:text-purple-600">home</div>
          </Link>
        </li>
        <li>
          <Link href="/background">
            <div className="text-gray-800 hover:text-purple-600">background</div>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <div className="text-gray-800 hover:text-purple-600">projects</div>
          </Link>
        </li>
        <li>
        <a
          href="/audsostrom.github.io/Resume-AudreyOstrom.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-purple-600"
        >
          resume
        </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
