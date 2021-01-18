import { Router, Request, Response } from 'express';
import _ from 'lodash';
import isUrl from 'is-url';

import {filterImageFromURL, deleteLocalFiles} from '../../../util/util';


const router: Router = Router();

// Get filtered image by imageUrl
router.get('/', async(req: Request, res: Response) => {
  try {
    const imageUrl = _.get(req, 'query.image_url');

    if (!isUrl(imageUrl)) {
      return res.status(400).send({ message: 'Valid URL is required.' });
    }

    const filteredImageUrl:string = await filterImageFromURL(imageUrl);
    if(filterImageFromURL) {
      res.status(201).sendFile(filteredImageUrl);
      res.on('finish', () => {
        deleteLocalFiles([filteredImageUrl]);
      })
    } else {
      return res.status(400).send({ message: 'Valid URL is required or malformed.' });
    }
  } catch(err) {
    return res.status(400).send({ message: 'Valid URL is required or malformed.' });
  }
})

export const FilteredImageRouter: Router = router;