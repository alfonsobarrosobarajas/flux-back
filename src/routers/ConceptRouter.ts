import { Router } from 'express';
import conceptController from '../controllers/ConceptController';

class ConceptRouter {

    public router = Router();


    constructor() {

        this.setRouter();
    }


    setRouter(): void {

        this.router.get('/', conceptController.list);
        this.router.get('/:id', conceptController.get);
        this.router.post('/',conceptController.create);
        this.router.put('/:id', conceptController.update);
        this.router.delete('/:id', conceptController.delete);

    }

}


const homeRouter = new ConceptRouter();
export default homeRouter.router;