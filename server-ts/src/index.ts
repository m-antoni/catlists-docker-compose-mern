import 'dotenv/config';
import 'module-alias/register';
import validateEnv from '@/utils/validateEnv';
import App from './app';
import MyListController from '@/resources/mylist/mylist.controller';
import UserController from '@/resources/user/user.controller';

validateEnv();

const MY_LIST_CONTROLLER = new MyListController();
// const USER_CONTROLLER = new UserController();

const app = new App(
    [
        MY_LIST_CONTROLLER
    ],
    Number(process.env.PORT)
);

app.listen();
