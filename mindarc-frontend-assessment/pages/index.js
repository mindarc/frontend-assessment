import React from "react"
import Link from "next/link"
import Footer from "../comps/Footer";

const Home = () => {
  return (
    <div className="home-page container p-3 h-100 mx-auto d-flex flex-column">
      <main className="content text-center w-100 h-100 d-flex flex-column align-items-center justify-content-center">
        <h1>
          MindArc Frontend Assessment
        </h1>
        <p>
          Please press the button below to see the exercises.
        </p>
        <div>
          <Link href="/exercise1" ariaLabel="exercise1">
            <a className="btn btn-primary btn-lg mx-2">
              Exercise 1
            </a>
          </Link>
          <Link href="/exercise2" ariaLabel="exercise2">
            <a className="btn btn-primary btn-lg mx-2">
              Exercise 2
            </a>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;