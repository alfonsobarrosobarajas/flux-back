import { Request, Response } from 'express';

class HomeController {

    public goHome(req: Request, resp: Response) {
        resp.json({ text: 'Home' });
    }

}

const homeController = new HomeController();
export default homeController;