import * as React from 'react'
import { BreedContextType } from '../../Context/catbreed.types';
import { BreedContext } from '../../Context/BreedContext';
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import { Spinner } from '../Layouts/Spinner';
import { Container, Row, Card, Button, Col } from 'react-bootstrap';

const SingleCatBreed: React.FC = () => {

    const { isLoading, getSingleCatBreed, singleCatBreed, addToMyList } = React.useContext(BreedContext) as BreedContextType;
    
    const [url, setUrl] = React.useState('');

    const { catId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const locationState = location.state;

    React.useEffect(() => {
        catId && getSingleCatBreed(catId);
        if(locationState){
            if(locationState.from === 'myList'){
                setUrl('/my-list');
            }else{
                setUrl('/')
            }
        }
    }, [catId]);

    const onClickHandler = () => {
        addToMyList();
        navigate('/')
    }

    return (
        <Container>
            <Row>
            {
                isLoading ? <Spinner/> :
                singleCatBreed && 
                    <>
                        <Link to={url} state={{ from: 'singleCat' }}><Button variant="dark" className="my-3">Go Back</Button></Link>
                        <Col>
                            <Card className="mb-2 border-light text-white">
                                <Card.Img variant="top" src={singleCatBreed.url}/>
                                <Card.Body>
                                    <div className="d-grid gap-2">
                                        <Row>
                                            <Col><h2>{singleCatBreed.breeds[0].name}</h2></Col> 
                                            <Col className="p" align="end">{ (locationState && locationState.from === 'myList') ? <></> : <Button onClick={() => onClickHandler()}  variant="light">Add to My List</Button>}</Col>
                                        </Row>
                                        <h2>Origin: {singleCatBreed.breeds[0].origin}</h2>
                                        <h5>Origin: {singleCatBreed.breeds[0].temperament}</h5>
                                        <hr/>
                                        <p>{singleCatBreed.breeds[0].description}</p>
                                    </div>
                                </Card.Body>
                            </Card> 
                        </Col>
                    </>
            }
            </Row>
        </Container>
    )
}


export default SingleCatBreed;