import rs from "jsrsasign";

export function verify(payload) {
  const pbKey = `-----BEGIN PUBLIC KEY-----
    MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAESQdbEeuw9evo/VnKWye/tIullK23
    9tv5hCCfggtMeZQO4UIgLjXb5W8Vz3/HbZLfOlP+l5uQySlq2Cmsr6K7AQ==
    -----END PUBLIC KEY-----  
    `;
  const IntDate = rs.KJUR.jws.IntDate;
  const isValid = rs.KJUR.jws.JWS.verifyJWT(payload, pbKey, {
    alg: ["ES256"],
    verifyAt: IntDate.get("now"),
  });
  return isValid;
}

export function readToken(payload) {
  const pbKey = `-----BEGIN PUBLIC KEY-----
    MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAESQdbEeuw9evo/VnKWye/tIullK23
    9tv5hCCfggtMeZQO4UIgLjXb5W8Vz3/HbZLfOlP+l5uQySlq2Cmsr6K7AQ==
    -----END PUBLIC KEY-----  
    `;

  var headerObj = rs.KJUR.jws.JWS.readSafeJSONString(
    rs.b64utoutf8(payload.split(".")[0])
  );
  var payloadObj = rs.KJUR.jws.JWS.readSafeJSONString(
    rs.b64utoutf8(payload.split(".")[1])
  );
  return payloadObj;
}
