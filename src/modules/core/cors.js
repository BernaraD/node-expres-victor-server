export default function cors(app) {
  app.use((req, res, next) => {
    //eslint-disable-line consistent-return
    res.header('Access-Control-Allow-Header', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Request-With, Content-Type, Accept, Authorization',
    );
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Mehtods', 'PUT, POST, PATCH, DELETE, GET');
      return res.status(200).json({});
    }
    next();
  });
}

// Cross Origin Resource Sharing - mechanism that uses additional HTTP headers to tell
// browsers to give a web application running at one origin,
// access to selected resources from a different origin
