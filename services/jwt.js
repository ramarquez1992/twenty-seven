const {OAuth2Client} = require('google-auth-library');
const googleAuthClient = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID);

const authenticate = async (token) => {
  try {
    const ticket = await googleAuthClient.verifyIdToken({
      idToken: token,
      audience: process.env.REACT_APP_GOOGLE_CLIENT_ID
    });
    return ticket.getPayload();
  } catch(err) {
    return null;
  }
};


const middleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    authenticate(token)
        .then(verified => {
          if (verified) {
            next();
          } else {
            res.sendStatus(401);
          }
        })
        .catch(err => {
          console.log('Auth err: ', err);
        });

  } else {
    res.sendStatus(401);
  }
};

module.exports.authenticate = authenticate;
module.exports.middleware = middleware;
