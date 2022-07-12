import { useEffect, useRef, useState } from "react";
import Head from "next/head"
import Footer from "../comps/Footer";
import Intro from "../comps/Intro";
import data from "../data.json"
import { parse } from 'node-html-parser';
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap"

const Exercise2 = () => {

    const [contents] = useState(data.data.map((content) => ({
        "id": content.id,
        "title": content.title,
        "content": parse(content.content).childNodes[0].childNodes[0]["_rawText"]
    })));
    const [isCardActive, setIsCardActive] = useState("1");
    const contentRefs = useRef([]);
    const addToContentRefs = (_el) => {
        if (_el && !contentRefs.current.includes(_el)) {
            contentRefs.current.push(_el)
        } else {
            contentRefs.current = [];
        }
    };

    useEffect(() => {
        contentRefs.current.map((content, index) => {
            if (Number(isCardActive) - 1 === index) {
                gsap.timeline()
                    .set(content,
                        {
                            display: "block"
                        })
                    .to(content,
                        {
                            height: "auto",
                            duration: 0.4,
                        })
                    .to(content,
                        {
                            opacity: 1,
                            duration: 0.4
                        })
            } else {
                gsap.timeline()
                    .to(content,
                        {
                            opacity: 0,
                            duration: 0.2
                        })
                    .to(content,
                        {
                            height: 0,
                            duration: 0.2
                        })
                    .set(content,
                        {
                            display: "none"
                        })
            }
        })
    }, [isCardActive]);

    return (
        <>
            <Head>
                <title>Exercise2</title>
            </Head>
            <div className="exercise exercise2">
                <main className="content">
                    <Intro />
                    <section className="tabs__wrapper container-fluid">
                        <nav className="nav__wrapper d-flex flex-md-row flex-column justify-content-center">
                            {
                                contents
                                    ? contents.map((content, index) => (
                                        <div className={`accordion-item col-md-3 ${isCardActive === content.id ? "is-active" : ""}`}>
                                            <div
                                                key={index}
                                                className={`nav-button`}
                                                onClick={() => setIsCardActive(`${index + 1}`)}
                                            >
                                                <h5 className="m-0">{content.title}</h5>
                                                <div className="plus__wrapper is-mobile">
                                                    <div class="plus__inner">
                                                        <span className="minus" />
                                                        <span className="vertical-line" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div ref={addToContentRefs} className="content__wrapper is-mobile py-md-0 py-3">
                                                <p className="m-0 is-mobile text-sans">{content.content}</p>
                                            </div>
                                        </div>
                                    ))
                                    : null
                            }
                        </nav>
                        <div className="position-relative is-desktop pt-5">
                            <div className="tabs-text__wrapper text-center text-sans">
                                <AnimatePresence exitBeforeEnter>
                                    <motion.p
                                        key={isCardActive}
                                        initial={{ y: 10, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -10, opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        {
                                            contents
                                                ? isCardActive === "1"
                                                    ? contents[0].content
                                                    : isCardActive === "2"
                                                        ? contents[1].content
                                                        : isCardActive === "3"
                                                            ? contents[2].content
                                                            : contents[3].content
                                                : null
                                        }
                                    </motion.p>
                                </AnimatePresence>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    );
}

export default Exercise2;