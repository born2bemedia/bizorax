import Link from "next/link";

export default function NotFound() {
    return (
        <div className="404">
            <div className="404__container _container">
                <div className="404__body">
                    <h1 className="404__title">404</h1>
                    <h2 className="404__subtitle">Page not found</h2>
                    <p className="404__text">Oh, we can’t seem to find the page you’re looking for. Try going back to the previous page or:</p>
                    <Link href="/" className="404__link">Go to the home page</Link>
                </div>
            </div>
        </div>
    );
}
