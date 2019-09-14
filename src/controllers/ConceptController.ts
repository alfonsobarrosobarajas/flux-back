import { Request, Response } from 'express';
import Messages from '../util/Messages';
import cnn from '../conf/Connection';

class ConceptController {

    public async list(req: Request, resp: Response): Promise<any> {

        const list = await cnn.then(
            connection => {
                return connection.query('select * from concept');
            }

        ).then(
            list => {
                if (list.length > 0) {
                    resp.json(list);
                } else {
                    resp.json({ text: Messages.NO_DATA_LIST });
                }
            }
        ).catch(() => {
            resp.json({ text: Messages.CNN_FAIL });
        });

    }

    public async get(req: Request, resp: Response): Promise<any> {

        const { id } = req.params;
        const concept = await cnn.then(

            connection => {
                return connection.query('select * from concept where id = ?', [id]);
            }

        ).then(
            concept => {
                if (concept.length > 0) {
                    resp.json(concept);
                } else {
                    resp.status(404).json({ text: Messages.NO_DATA_LIST });
                }
            }
        ).catch(() => {
            resp.json({ text: Messages.CNN_FAIL });
        });

    }

    public async create(req: Request, resp: Response): Promise<any> {

        await cnn.then(
            connection => {
                connection.query('insert into concept set ?', [req.body]);
                resp.json({ text: Messages.CONCEPT_CREATED });
            }
        ).catch(() => {
            resp.json({ text: Messages.CNN_FAIL });
        });

    }

    public async update(req: Request, resp: Response): Promise<any> {

        const { id } = req.params;

        await cnn.then(
            connection => {
                connection.query('update concept set ? where id = ?', [req.body, id]);
                resp.json({text:Messages.CONCEPT_UPDATED});
            }
        ).catch(() => {
            resp.json({ text: Messages.CNN_FAIL });
        });

    }

    public async delete(req: Request, resp: Response): Promise<any> {

        const { id } = req.params;

        await cnn.then(
            connection => {
                connection.query('delete from contact where id = ?', [id]);
                resp.json({text:Messages.CONCEPT_UPDATED});
            }
        ).catch(() => {
            resp.json({ text: Messages.CNN_FAIL });
        });

    }

}

const conceptController = new ConceptController();
export default conceptController;