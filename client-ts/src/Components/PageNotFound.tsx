
import * as React from 'react'
import { Button, Container } from 'react-bootstrap';

const PageNotFound: React.FC  = () => {
    return (
        <Container>
            <section className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
                    <h1>404</h1>
                    <h4>Page does not exists.</h4>
                    <Button href="/" variant="dark" className="my-3" >GO BACK</Button>
                    <img src="/not-found.svg" className="img-fluid py-5" alt="Page Not Found"/>
                <div className="credits">
                </div>
            </section>
        </Container>
    )
}


export default PageNotFound;