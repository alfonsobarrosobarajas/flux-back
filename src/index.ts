import express, { Application } from 'express';
import homeRouter from './routers/HomeRouter';
import conceptRouter from './routers/ConceptRouter';
import cors from 'cors';
//
class Server {

    app: Application;
    port: any;


    constructor() {
    
        this.app = express();

        this.setParams();
        this.setRouter();

    }

    setParams(): void {

        this.port = process.env.port || 3000;
        this.app.set('port', this.port);
        this.app.use(cors());
        this.app.use(express.json());

    }


    setRouter(): void {

        this.app.use('/', homeRouter);
        this.app.use('/api/concept', conceptRouter);

    }

    start(): void {

        this.app.listen(this.port, () => {
            console.log('Running on port: ', this.port);
        });

    }

}

const server = new Server();
export default server.start();