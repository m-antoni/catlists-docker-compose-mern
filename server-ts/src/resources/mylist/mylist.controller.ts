import { Router, Request, Response, NextFunction } from 'express';
import Controller from '@/utils/interfaces/controller.interface';
import HttpException from '@/utils/exceptions/http.exception';
// import validationMiddleware from '@/middleware/validation.middleware';
// import validate from '@/resources/post/post.validation';
import MyListService from '@/resources/mylist/mylist.service';

class MyListController implements Controller {
    public path = '/mylist';
    public router = Router();
    private MyListService = new MyListService();

    constructor() {
        this.initialiseRoutes();
    }

    private initialiseRoutes(): void {
        this.router.post(`${this.path}-add`, this.create);
        this.router.get(`${this.path}`, this.getList);
        this.router.delete(`${this.path}-remove` + '/:id', this.removeList);
    }

    private create = async ( req: Request, res: Response, next: NextFunction ): Promise<Response | void> => {
        try {
            await this.MyListService.create(req.body);
            res.status(201).json({ data: [], message: "Successfully added to your list", statusCode: 201 })
        } catch (error) {
            console.log(error)
            next(new HttpException(400, 'Failed to create list, server error'));
        }
    };

    private getList = async (req: Request, res: Response, next: NextFunction ): Promise<Response | void> => {
        try {
            const myList = await this.MyListService.getList();
            res.status(200).json({ list: myList, message: "Success", statusCode: 200 })
        } catch (error) {
            console.log(error)
            next(new HttpException(400, 'Failed to create list, server error'));
        }
    };

    private removeList = async (req: Request, res: Response, next: NextFunction ): Promise<Response | void> => {
        try {
            const updated_list = await this.MyListService.removeList(req.params.id);
            res.status(200).json({ updated_list , message: "Successfully remove from list", statusCode: 200 })
        } catch (error) {
            console.log(error)
            next(new HttpException(400, 'Failed to create list, server error'));
        }
    };
}

export default MyListController;
