import { ToastDanger, ToastSuccess } from "./toast"

export enum HttpStatusCode {
    OK = 200, // Status = OK
    CREATED = 201, // Status = Created
    BAD_REQUEST = 400, // Status = Bad Request
    UNAUTHORIZED = 401, // Status = Unauthorized
    NOT_FOUND = 404, // Status = Not Found
    SERVER_ERROR = 500, // Status: Internal Server Error'
}

export const HttpExceptionHandler = (statusCode: number, message: string): void => {
    console.log(statusCode, HttpStatusCode.CREATED)
    if(statusCode === HttpStatusCode.OK || statusCode === HttpStatusCode.CREATED){
        ToastSuccess(message);
    }else{
        ToastDanger(message);
    }
}