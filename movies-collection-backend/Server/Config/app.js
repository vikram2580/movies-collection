"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_session_1 = __importDefault(require("express-session"));
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = __importDefault(require("passport-local"));
const memorystore_1 = __importDefault(require("memorystore"));
const MemoryStore = (0, memorystore_1.default)(express_session_1.default);
const cors_1 = __importDefault(require("cors"));
const passport_jwt_1 = __importDefault(require("passport-jwt"));
const JWTStrategy = passport_jwt_1.default.Strategy;
const ExtractJWT = passport_jwt_1.default.ExtractJwt;
const LocalStrategy = passport_local_1.default.Strategy;
const user_1 = __importDefault(require("../Models/user"));
const mongoose_1 = __importDefault(require("mongoose"));
const db_1 = __importDefault(require("./db"));
mongoose_1.default.connect(db_1.default.remoteURI);
mongoose_1.default.connection.on('connected', () => {
    console.log(`Connected to MongoDB Atlas`);
});
mongoose_1.default.connection.on('error', (err) => {
    console.error(`Failed to connect to MongoDB Atlas: ${err.message}`);
});
const index_1 = __importDefault(require("../Routes/index"));
const movie_1 = __importDefault(require("../Routes/movie"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)());
app.use((0, express_session_1.default)({
    cookie: { maxAge: 900000 },
    store: new MemoryStore({ checkPeriod: 900000 }),
    secret: "SomeSecret",
    saveUninitialized: false,
    resave: false
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use('/api', index_1.default);
app.use('/api/movie', movie_1.default);
passport_1.default.use(user_1.default.createStrategy());
passport_1.default.serializeUser(user_1.default.serializeUser());
passport_1.default.deserializeUser(user_1.default.deserializeUser());
const jwtOptions = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: "SomeSecret"
};
const strategy = new JWTStrategy(jwtOptions, (jwt_payload, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_1.default.findById(jwt_payload.id);
        if (user) {
            return done(null, user);
        }
        return done(null, false);
    }
    catch (error) {
        return done(error, false);
    }
}));
passport_1.default.use(strategy);
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.end('Error: please use /api as a route prefix for your API requests');
});
exports.default = app;
//# sourceMappingURL=app.js.map