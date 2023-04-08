import * as React from 'react'
import { BreedContextType } from '../../Context/catbreed.types';
import { BreedContext } from '../../Context/BreedContext';
import { Button } from 'react-bootstrap';

const LoadButton: React.FC = () => {

    const { catFilteredCatBreedList, loadParams, loadMoreCatBreeds, buttonDisable } = React.useContext(BreedContext) as BreedContextType;

    const onClickHandler = async () => {
        const { page } = loadParams;
        loadMoreCatBreeds(page + 1);
    }

    return (
        <>
            {
                catFilteredCatBreedList.length > 0 && 
                    ( buttonDisable ? null : 
                        <div className="d-grid gap-2 mt-2 mb-5">
                            <Button 
                                onClick={() => onClickHandler()} 
                                variant="dark"
                                size="lg"
                                className="load-more-btn">
                                Load more
                            </Button>
                        </div>
                    )
            }
        </>
    )
}

export default LoadButton