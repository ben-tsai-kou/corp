import Link from 'next/link';

const Header = () => {
    return (
        <nav className="flex gap-3 p-5">
            <Link href="/">home</Link>
            <Link href="/performance">performance</Link>
            <Link href="/scale">scale</Link>
            <Link href="/reliability">reliability</Link>
        </nav>
    );
};

export default Header;
