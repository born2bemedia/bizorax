import Link from "next/link";
import "@/styles/base.scss";

export default function NotFound() {
    return (
        <div className="error">
            <div className="error__container _container">
                <div className="error__body">
                    <h1 className="error__title">404</h1>
                    <h2 className="error__subtitle">Page not found</h2>
                    <p className="error__text">Oh, we can’t seem to find the page you’re looking for. Try going back to the previous page or:</p>
                    <Link href="/" className="error__link">Go to the home page</Link>
                </div>
            </div>
            <div className="error__image"><img src="/images/contact/img-01.jpg" alt="image" /></div>
        </div>
    );
}
