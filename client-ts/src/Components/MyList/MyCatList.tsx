import * as React from 'react'
import { Link } from "react-router-dom";
import { BreedContextType } from '../../Context/catbreed.types';
import { BreedContext } from '../../Context/BreedContext';
import { Button, Row, Container, Card, Col } from 'react-bootstrap';
import { Spinner } from '../Layouts/Spinner';
import { ISingleCatBreed } from '../../Context/catbreed.interface';

const MyCatList: React.FC = () => {

    const { myList, isLoading, getMyList, removeList } = React.useContext(BreedContext) as BreedContextType;

    React.useEffect(() => {
        getMyList();
    },[])

    return (
        <Container>
            { myList && <h2 className="text-white">My List: ({myList.length})</h2>  }
            { myList && <span className="text-white"> This list is fetched from MongoDB Cloud</span>  }
            <hr/>
            <Row className="mb-3">
                {
                    isLoading ? <Spinner/> : 
                    <>
                        {
                            myList && myList.map((breed: ISingleCatBreed, i: number) => {
                                return (
                                    <Col sm={12} md={6} lg={6} key={i}>
                                        <Card className="mb-2 border-light text-white">
                                            <Card.Img variant="top" src={breed.url} width={400}/>
                                            <Card.Body>
                                               <div className="d-grid gap-2">
                                                    <Row>
                                                        <Col><Link to={`/${breed.id}`} state={{ from: 'myList' }}><Button variant="light" className="view-details-btn">View Details</Button></Link></Col>
                                                        <Col className="p" align="end"><Button onClick={() => removeList(breed.id)} variant="danger">Delete</Button></Col>
                                                    </Row>
                                               </div>
                                            </Card.Body>
                                        </Card> 
                                    </Col>
                                )
                            })
                        }
                    </>
                }
            </Row>
        </Container>
    )
}

export default MyCatList
