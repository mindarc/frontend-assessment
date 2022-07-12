import Head from "next/head"
import Card from "../comps/Card";
import Footer from "../comps/Footer";
import Intro from "../comps/Intro";

const Exercise1 = () => {

    const cardsData = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    ]

    return (
        <>
            <Head>
                <title>Exercise1</title>
            </Head>
            <div className="exercise">
                <main className="content">
                    <Intro />
                    <section className="cards__wrapper container-fluid">
                        <div className="row">
                            {
                                cardsData.map((data, index) => (
                                    <div key={index} className="col-md-4 col-12 my-md-0 my-3">
                                        <Card bodyText={data} />
                                    </div>
                                ))
                            }
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    );
}

export default Exercise1;