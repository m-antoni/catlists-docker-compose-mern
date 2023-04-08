import * as React from 'react'
import { Link } from "react-router-dom";
import { BreedContextType } from '../../Context/catbreed.types';
import { BreedContext } from '../../Context/BreedContext';
import { Spinner } from '../Layouts/Spinner';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { IFilteredCatBreed } from '../../Context/catbreed.interface';

const CatBreedList: React.FC = () => {

    const { catFilteredCatBreedList, isLoading, catBreedSelect } = React.useContext(BreedContext) as BreedContextType;

    return (
        <>
            { catBreedSelect.value !== '' && <h4 className="text-white">Cat Breed: {catBreedSelect.label} ({catFilteredCatBreedList.length})</h4>  }
            <hr/>
            <Row className="mb-3">
                {
                    isLoading ? <Spinner/> : 
                    <>
                        {
                            catFilteredCatBreedList && catFilteredCatBreedList.map((breed: IFilteredCatBreed, i: number) => {
                                return (
                                    <Col sm={6} md={6} lg={6} key={i}>
                                        <Card className="mb-2 border-light text-white">
                                            <Card.Img variant="top" src={breed.url}/>
                                            <Card.Body>
                                               <div className="d-grid gap-2">
                                                    <Link to={`/${breed.id}`} state={{ from: 'catBrowser' }}>
                                                        <Button  variant="light" className="view-details-btn">View Details</Button>
                                                    </Link>
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
        </>
    )
}

export default CatBreedList
