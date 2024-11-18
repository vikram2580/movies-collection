import createError, { HttpError } from 'http-errors';
import express, { NextFunction, Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import dotenv from 'dotenv';
dotenv.config();

// modules for authentication 
import session from 'express-session';
import passport from 'passport';
import passportLocal from 'passport-local';

// memory Store
import createMemoryStore from 'memorystore';
const MemoryStore = createMemoryStore(session);

// modules for JWT support
import cors from 'cors';
import passportJWT from 'passport-jwt';

// define JWT Aliases
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

// define authentication strategy
const LocalStrategy = passportLocal.Strategy;

// import the user Model
import User from '../Models/user';

// importing mongoose and db
import mongoose from 'mongoose';
import db from './db';

// Connect to MongoDB
mongoose.connect(db.remoteURI);

// DB Connection Events
mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB Atlas`);
});

mongoose.connection.on('error', (err) => {
  console.error(`Failed to connect to MongoDB Atlas: ${err.message}`);
});

// import routers
import indexRouter from '../Routes/index';
import movieRouter from '../Routes/movie';

// create an express application
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// add cors to the config
app.use(cors());

// setup express session
app.use(session({
  cookie: { maxAge: 900000 }, // 1 day in milliseconds
  store: new MemoryStore({ checkPeriod: 900000 }), // 1 day in milliseconds
  secret: "SomeSecret",
  saveUninitialized: false,
  resave: false 
}));

// initialize passport and session
app.use(passport.initialize());
app.use(passport.session());
app.use('/api', indexRouter);
app.use('/api/movie', movieRouter);

// implement local authentication strategy
passport.use(User.createStrategy());

// serialize and deserialize the user info
passport.serializeUser(User.serializeUser() as any);
passport.deserializeUser(User.deserializeUser());

// setup JWT options
const jwtOptions = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: "SomeSecret" // Ensure this is correctly set
};

// setup JWT Strategy
const strategy = new JWTStrategy(jwtOptions, async (jwt_payload, done) => {
  try {
    const user = await User.findById(jwt_payload.id);
    if (user) {
      return done(null, user);
    }
    return done(null, false);
  } catch (error) {
    return done(error, false);
  }
});

passport.use(strategy);

// error handler
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.end('Error: please use /api as a route prefix for your API requests');
});

export default app;
