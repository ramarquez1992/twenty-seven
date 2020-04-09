const {OAuth2Client} = require('google-auth-library');
const googleAuthClient = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID);

const authenticateJwt = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    googleAuthClient.verifyIdToken({
      idToken: token,
      audience: process.env.REACT_APP_GOOGLE_CLIENT_ID
    })
        .then(res => {
          const payload = res.getPayload();
          const userid = payload['sub'];
          console.log(payload);
          next();
        })
        .catch(console.error);

  } else {
    res.sendStatus(401);
  }
};

module.exports = authenticateJwt;
