import { Router } from 'express';
import urlController from '../controller/url.js';

const router = Router();

router.post('/',urlController.handleGenerateNewUrl);

router.get('/:shortId',urlController.getUrl);

export default router;