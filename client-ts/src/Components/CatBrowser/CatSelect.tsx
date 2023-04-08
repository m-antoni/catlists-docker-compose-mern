import * as React from 'react'
import { BreedContextType } from '../../Context/catbreed.types';
import { BreedContext } from '../../Context/BreedContext';
import Select from 'react-select';

const CatSelect: React.FC = () => {

    const { catBreedOptions, selectCatBreedOnChange, catBreedSelect } = React.useContext(BreedContext) as BreedContextType;
    
    const onChangeHandler = (selected: any) => selectCatBreedOnChange(selected);

    return (
        <>
            <Select 
                options={catBreedOptions} 
                onChange={e => onChangeHandler(e)}
                value={catBreedSelect}
                defaultValue={catBreedOptions.length > 0 && catBreedOptions[0]}
                isSearchable
                className="react-select"
            />
        </>
    )
}

export default CatSelect
