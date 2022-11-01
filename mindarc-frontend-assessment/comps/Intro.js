import Image from "next/image"

const Intro = () => {

    return (
        <section className="hero">
            <div className="hero-image is-desktop">
                <figure className="fig__wrapper">
                    <Image src="https://via.placeholder.com/1920x650.png" layout="fill" objectFit="cover" alt="Desktop hero image" />
                </figure>
            </div>
            <div className="hero-image is-mobile">
                <figure className="fig__wrapper">
                    <Image src="https://via.placeholder.com/600x600.png" layout="fill" objectFit="cover" alt="Mobile hero image" />
                </figure>
            </div>
            <div className="hero-overlay w-100 h-100 d-flex align-items-center text-center">
                <div className="hero-content mx-auto">
                    <h1>Hello Developer!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
            </div>
        </section>
    );
}

export default Intro;