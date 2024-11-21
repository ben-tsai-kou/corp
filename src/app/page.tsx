import Link from 'next/link';

export default function Home() {
    return (
        <div>
            Home page
            <div className="flex flex-col p-5">
                <Link href="/performance">performance</Link>
                <Link href="/scale">scale</Link>
                <Link href="/reliability">reliability</Link>
            </div>
        </div>
    );
}
