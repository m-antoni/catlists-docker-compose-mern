import * as React from 'react'
import { BreedContextType } from '../../Context/catbreed.types';
import { BreedContext } from '../../Context/BreedContext';
import CatBreedList from './CatBreedList';
import { Container } from 'react-bootstrap';
import LoadButton from './LoadButton';
import { useLocation } from 'react-router-dom'
import CatSelect from './CatSelect';

const CatBreed: React.FC = () => {

    const { getCatBreeds, getSingleCatBreed } = React.useContext(BreedContext) as BreedContextType;

    const location = useLocation();

    const locationState = location.state;

    React.useEffect(() => {
        getCatBreeds();
        if(locationState){
            if(locationState.from === 'singleCat'){
                getSingleCatBreed(0)
            }
        }
    },[])

    return (
        <Container>
            <CatSelect/>
            <CatBreedList/>
            <LoadButton/>
        </Container>
    )
}

export default CatBreed
