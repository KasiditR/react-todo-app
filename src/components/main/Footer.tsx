import Container from '@/components/main/Container';
import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer className="sticky top-[100vh] bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-600">
      <Container className=" md:flex md:items-center md:justify-between md:p-6">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{' '}
          <Link
            to="https://kasidit.netlify.app/#home"
            className="hover:underline"
          >
            KasiditR
          </Link>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link
              to="https://kasidit.netlify.app/#about"
              className="hover:underline me-4 md:me-6 px-4 py-2 rounded-md inline-block"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="https://kasidit.netlify.app/#home"
              className="hover:underline me-4 md:me-6 px-4 py-2 rounded-md inline-block"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              to="https://kasidit.netlify.app/#home"
              className="hover:underline me-4 md:me-6 px-4 py-2 rounded-md inline-block"
            >
              Licensing
            </Link>
          </li>
          <li>
            <Link
              to="https://kasidit.netlify.app/#contact"
              className="hover:underline"
            >
              Contact
            </Link>
          </li>
        </ul>
      </Container>
    </footer>
  );
}
