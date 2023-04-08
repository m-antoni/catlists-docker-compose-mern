import * as React from 'react';
import { IBreed, ISelectCatBreed, IFilteredCatBreed, ISingleCatBreed } from './catbreed.interface';
import { BreedContextType } from './catbreed.types';
import axios from 'axios';
import { addToMyListAction, getMyListAction, removeListAction } from '../Actions/MyListActions';
import { ToastWarning } from '../Utils/toast';

export const BreedContext = React.createContext<BreedContextType | null>(null);

interface Props {
    children: React.ReactNode;
}

const CAT_API_URL = process.env.REACT_APP_CAT_API_URL || "https://api.thecatapi.com/v1";

const BreedProvider: React.FC<Props> = ({ children }) => {
    const [catBreedOptions, setCatBreedOption] = React.useState<ISelectCatBreed[]>([]);
    const [singleCatBreed, setSingleCatBreed] = React.useState<ISingleCatBreed | null>(null);
    const [catBreedSelect, setCatBreedSelect] = React.useState<ISelectCatBreed>({ value: "", label: "SEARCH OR SELECT HERE" });
    const [catFilteredCatBreedList, setCatFilteredCatBreedList] = React.useState<IFilteredCatBreed[]>([]);
    const [isLoading, setLoading] = React.useState<Boolean>(false);
    const [buttonDisable, setButtonDisable] = React.useState<Boolean>(false);
    const [loadParams, setLoadParams] = React.useState({ page: 1, limit: 10, breed_id: "" })
    const [myList, setMyList] = React.useState<ISingleCatBreed[] | null>(null); // Mylist


    // Get the Cat Breeds
    const getCatBreeds = async () => {
        try {
            const result = await axios.get(`${CAT_API_URL}/breeds`);
            let breedArr: ISelectCatBreed[] = [{ value: '', label: "SEARCH OR SELECT HERE" }];
            result?.data.map((breed: IBreed) => {
                let breed_data: ISelectCatBreed = { value: breed.id, label: breed.name };
                breedArr.push(breed_data);
            })
            setCatBreedOption(breedArr);
        } catch (error) {
            console.log(error)
        }
    }

    // Event handler for selecting Cat Breeds
    const selectCatBreedOnChange = async (selectedBreed: ISelectCatBreed): Promise<void> =>  {
        clearData();
        setCatBreedSelect(selectedBreed)
        setLoadParams({ page: 1, limit: 10, breed_id: selectedBreed.value });
        if(selectedBreed.value !== ''){
            getFilteredCatBreed(selectedBreed);
        }
    }

    // Get the filtered Breed of Cats
    const getFilteredCatBreed = async (selectedBreed: ISelectCatBreed): Promise<void> => {
        try {
            setLoading(true)
            const result = await axios.get(`${CAT_API_URL}/images/search?page=1&limit=10&breed_id=${selectedBreed.value}`);
            setCatFilteredCatBreedList(result.data);
            setLoading(false)
       } catch (error) {
            setLoading(false)
            console.log(error)
       }
    }

    // https://api.thecatapi.com/v1/images/search?page=1&limit=10&breed_id
    const loadMoreCatBreeds = async (page: number): Promise<void> => {
        try {
            const result = await axios.get(`${CAT_API_URL}/images/search?page=${page}&limit=${loadParams.limit}&breed_id=${loadParams.breed_id}`);
            setLoadParams({ page: page, limit: loadParams.limit, breed_id: loadParams.breed_id })

            // merge two arrays with filters
            let breed_ids = new Set(catFilteredCatBreedList.map(d => d.id));
            let merged = [...catFilteredCatBreedList, ...result.data.filter((d:any) => !breed_ids.has(d.id))];
             
            // validate if the data is same as old
            if(catFilteredCatBreedList.length === merged.length){
                setButtonDisable(true)
            }else{
                setCatFilteredCatBreedList(merged);
            }
        } catch (error) {
            console.log(error)
        }
    }

    // https://api.thecatapi.com/v1/images/:id
    const getSingleCatBreed = async (catId: string | number): Promise<void> => {
        try {
            setLoading(true)
            if(catId === 0){
                setSingleCatBreed(null);
            }else{
                const result = await axios.get(`${CAT_API_URL}/images/${catId}`);
                setSingleCatBreed(result.data);
            }
            setLoading(false);
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    const clearData = () => {
        setLoadParams({ page: 1, limit: 10, breed_id: "" });
        setButtonDisable(false)
        setSingleCatBreed(null)
        setCatFilteredCatBreedList([])
    }

    //  My List 
    const addToMyList = async (): Promise<void> => await addToMyListAction(singleCatBreed);
    const getMyList = async (): Promise<any> => {
        const result = await getMyListAction();
        setMyList(result)
    };
    const removeList = async (catId: string): Promise<void> => {
        const result = await removeListAction(catId);
        setMyList(result)
    };

    return (
        <BreedContext.Provider value={{ 
                catFilteredCatBreedList,
                catBreedOptions, 
                getCatBreeds, 
                catBreedSelect,
                selectCatBreedOnChange,
                getFilteredCatBreed,
                loadParams,
                isLoading,
                loadMoreCatBreeds,
                buttonDisable,
                getSingleCatBreed,
                singleCatBreed,
                addToMyList,
                getMyList,
                myList,
                removeList
            }}>
            { children }
        </BreedContext.Provider>
    )
}


export default BreedProvider;