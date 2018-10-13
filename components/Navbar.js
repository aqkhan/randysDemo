import Link from "next/link";

const Navbar = () => (
    <div>
        <nav className="site-header sticky-top py-1">
            <div className="container d-flex flex-column flex-md-row justify-content-between">
                <a className="py-2">
                    Logo here
                </a>
                <Link href="/"><a className="py-2 d-none d-md-inline-block">Home</a></Link>
                <Link href="/test"><a className="py-2 d-none d-md-inline-block">Test</a></Link>
            </div>
        </nav>
        <style jsx>{`
        .site-header {
            background-color: rgba(0, 0, 0, .85)
        }
        .site-header a {
            color: #999;
            transition: ease-in-out color .15s;
        }
        `}</style>
    </div>
);

export default Navbar;