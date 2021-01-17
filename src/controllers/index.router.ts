import { Router, Request, Response } from 'express';
import { FilteredImageRouter } from './filtered_image/routes/filtered_image.router';

const router: Router = Router();
router.use('/filteredimage', FilteredImageRouter);

export const IndexRouter: Router = router;