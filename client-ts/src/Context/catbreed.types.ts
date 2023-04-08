import { IFilteredCatBreed, ILoadParams, ISelectCatBreed, ISingleCatBreed } from "./catbreed.interface"


// List of types combine with interface type checking
export type BreedContextType = {
    singleCatBreed: ISingleCatBreed | null,
    catFilteredCatBreedList: IFilteredCatBreed[],
    catBreedOptions: ISelectCatBreed[],
    catBreedSelect: ISelectCatBreed,
    isLoading: Boolean,
    loadParams: ILoadParams,
    buttonDisable: Boolean,
    myList: ISingleCatBreed[] | null,
    getCatBreeds: () => Promise<void>,
    getFilteredCatBreed: (selectedBreed: ISelectCatBreed) => Promise<void>,
    selectCatBreedOnChange: (selectedBreed: ISelectCatBreed) => Promise<void>,
    loadMoreCatBreeds: (page: number) => Promise<void>,
    getSingleCatBreed: (catId: string | number) => Promise<void>,
    addToMyList: () => Promise<void>,
    getMyList: () => Promise<any>,
    removeList: (catId: string) => Promise<void>
}
