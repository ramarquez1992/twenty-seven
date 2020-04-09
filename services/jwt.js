const {OAuth2Client} = require('google-auth-library');
const googleAuthClient = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID);

const authenticate = async (token) => {
  const ticket = await googleAuthClient.verifyIdToken({
    idToken: token,
    audience: process.env.REACT_APP_GOOGLE_CLIENT_ID
  });
  return ticket.getPayload();
};


const middleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    authenticate(token)
        .then(res => {
          next();
        })
        .catch(console.error);

  } else {
    res.sendStatus(401);
  }
};

module.exports.authenticate = authenticate;
module.exports.middleware = middleware;
