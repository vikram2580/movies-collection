let remoteURI = (process.env.MONGO_URI) as string;
let secret = (process.env.APP_SCRECT) as string;

export default {
    remoteURI: remoteURI,
    secret: secret
}