import jwt from "jsonwebtoken";
import jwksRsa from "jwks-rsa";

// --- JWTの認証ミドルウェア ---
export const verifyJwt = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).send("Missing Authorization header");

  const token = authHeader.split(" ")[1];
  const client = jwksRsa({
    jwksUri: `https://cognito-idp.${process.env.AWS_REGION}.amazonaws.com/${process.env.COGNITO_USER_POOL_ID}/.well-known/jwks.json`
  });

  const getKey = (header, callback) => {
    client.getSigningKey(header.kid, (err, key) => {
      const signingKey = key.getPublicKey();
      callback(null, signingKey);
    });
  };

  jwt.verify(token, getKey, {
    audience: undefined,
    issuer: `https://cognito-idp.${process.env.AWS_REGION}.amazonaws.com/${process.env.COGNITO_USER_POOL_ID}`,
    algorithms: ["RS256"]
  }, (err, decoded) => {
    if (err) return res.status(401).send("Invalid token");
    (req as any).user = decoded;
    next();
  });
};