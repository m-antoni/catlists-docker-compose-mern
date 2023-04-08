import { ISingleCatBreed } from "../Context/catbreed.interface";
import { MyListService } from "./MyListApi";
import { HttpExceptionHandler, HttpStatusCode } from "../Utils/http.exception";

export const addToMyListAction = async (cat: ISingleCatBreed | null): Promise<void> => {
    try {
        const res = await MyListService.addToMyList(cat);
        HttpExceptionHandler(res.data.statusCode, res.data.message);
    } catch (error) {
        HttpExceptionHandler(HttpStatusCode.SERVER_ERROR, 'Server Error');
    }
}

export const getMyListAction = async (): Promise<any> => {
    try {
        const res = await MyListService.getMyList();
        return res.data.list;
    } catch (error) {
        HttpExceptionHandler(HttpStatusCode.SERVER_ERROR, 'Server Error');
    }
}

export const removeListAction = async (_id: string): Promise<any> => {
    try {
        const res = await MyListService.removeList(_id);
        HttpExceptionHandler(res.data.statusCode, res.data.message);
        return res.data.updated_list;
    } catch (error) {
        HttpExceptionHandler(HttpStatusCode.SERVER_ERROR, 'Server Error');
    }
}