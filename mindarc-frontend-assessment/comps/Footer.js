import Link from "next/link"

const Footer = () => {
    return (
        <footer className="mt-auto text-center">
            <div className="inner">
                <p className="m-0">
                    Frontend assessment for MindArc by &nbsp;
                    <Link href="https://github.com/Shuto46490802" ariaLabel="My Github page">
                        <a className="footer-link">
                            <span className="footer-link-text">@Shuto Suganuma</span>
                        </a>
                    </Link>
                </p>
            </div>
        </footer>
    );
}

export default Footer;