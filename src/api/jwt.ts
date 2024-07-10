import base64 from 'base-64';

export const decodingInfo = (token: string) => {
  let payload = token.substring(token.indexOf('.') + 1, token.lastIndexOf('.'));
  let decodingInfo = base64.decode(payload);
  let decodingInfoJson = JSON.parse(decodingInfo);
  return decodingInfoJson.email;
};
