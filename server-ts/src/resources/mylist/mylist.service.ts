import MyListModel from '@/resources/mylist/mylist.model';
import MyList from '@/resources/mylist/mylist.interface';
// import MyListRepository from '@/resources/mylist/mylist.repository';
import mongoose from 'mongoose'

class MyListService {
    private mylist = MyListModel;
    // private mylistRepository = MyListRepository;

    public async create(mylistArgs: MyList): Promise<MyList> {
        try {
            const mylist = await this.mylist.create(mylistArgs);
            return mylist;
        } catch (error) {
            console.log(error)
            throw new Error('Unable to create post');
        }
    }

    public async getList(): Promise<MyList | any> {
        try {
            return await this.mylist.find().sort({ _id: -1 });
        } catch (error) {
            console.log(error)
            throw new Error('Unable to get list');
        }
    }

    public async removeList(catId: string): Promise<MyList | any> {
        try {
            await this.mylist.deleteOne({ id: catId });
            return this.getList();
        } catch (error) {
            console.log(error)
            throw new Error('Unable to remove list');
        }
    }
}

export default MyListService;
