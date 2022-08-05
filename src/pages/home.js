import BannerComponent from "../components/bannerComponent/banner"
import Featured from "../components/FeaturedComponent/featuredComponent"

function Home() {
    return (
        <main className="home">
            <BannerComponent />
            <Featured />
        </main>
    )
}

export default Home