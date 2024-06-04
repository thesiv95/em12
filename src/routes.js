import { Router } from 'express';
import * as Controller from './controllers.js';

const router = Router();

router.post('/register', Controller.createEvent);
router.get('/', Controller.getEvents);

export default router;
