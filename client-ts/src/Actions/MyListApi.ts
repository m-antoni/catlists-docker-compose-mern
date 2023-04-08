import http from "../Utils/api.http";

export const MyListService = {
    getMyList: () => http.get(`/mylist`),
    addToMyList: (params: any) => http.post(`/mylist-add`, params),
    removeList: (catId: string) => http.delete(`/mylist-remove/${catId}`)  
}