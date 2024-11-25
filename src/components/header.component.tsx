import Link from 'next/link';

const Header = () => {
    return (
        <div className="w-full absolute text-white z-10">
            <nav className="container relative flex flex-wrap items-center justify-between m-auto p-8">
                <Link href="/" className="font-bold text-3xl">
                    home
                </Link>
                <div className="space-x-4 text-xl">
                    <Link href="/performance">performance</Link>
                    <Link href="/scale">scale</Link>
                    <Link href="/reliability">reliability</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;
