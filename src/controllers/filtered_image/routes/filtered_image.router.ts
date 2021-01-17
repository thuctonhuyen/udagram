import { Router, Request, Response } from 'express';
import _ from 'lodash';

const router: Router = Router();

// Get filtered image by imageUrl
router.get('/', async(req, res) => {
  const imageUrl = _.get(req, 'query.image_url');

  // @TODO1 IMPLEMENT A RESTFUL ENDPOINT
  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.
  // IT SHOULD
  //    1
  //    1. validate the image_url query
  //    2. call filterImageFromURL(image_url) to filter the image
  //    3. send the resulting file in the response
  //    4. deletes any files on the server on finish of the response
  // QUERY PARAMATERS
  //    image_url: URL of a publicly accessible image
  // RETURNS
  //   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

  /**************************************************************************** */

  //! END @TODO1

  console.log('image url', imageUrl);
})

export const FilteredImageRouter: Router = router;