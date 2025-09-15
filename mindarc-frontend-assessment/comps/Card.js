import Image from "next/image"
import Link from "next/link"

const Card = ({ bodyText }) => {
    return (
        <div className="card h-100">
            <div className="card-image">
                <Image src="http://via.placeholder.com/400x300.png" layout="fill" objectFit="cover" alt="Card image" />
            </div>
            <div className="card-body my-3 text-center">
                <p className="card-text text-sans">
                    {bodyText}
                </p>
            </div>
            <div className="card-body text-center mt-auto d-flex flex-column align-items-center">
                <Link href="#" ariaLabel="Card link">
                    <a className="mt-auto btn btn-lg">
                        Read More
                    </a>
                </Link>
            </div>
        </div>
    );
}

export default Card;