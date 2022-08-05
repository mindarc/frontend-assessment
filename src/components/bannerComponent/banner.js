import { Container } from "react-bootstrap";

function BannerComponent() {
    console.log(('b' + 'a' +  + 'a' + 'a').toLowerCase())
    return(
        <section className="d-flex align-items-center align-self-center banner">
            <Container className="text-center">
                <h2 className="font-weight-bold">Hello Developer!</h2>
                <p>Lorem Ipsum dolor sit amet, consectetur adipiscing elit</p>
            </Container>
        </section>
    )
}

export default BannerComponent