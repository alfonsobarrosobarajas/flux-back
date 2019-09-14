import { Router } from 'express';
import homeController from '../controllers/HomeController';

class HomeRouter {

    public router = Router();


    constructor() {

        this.setRouter();
    }


    setRouter(): void {

        this.router.get('/', homeController.goHome);

    }

}


const homeRouter = new HomeRouter();
export default homeRouter.router;