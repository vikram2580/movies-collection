import { Request, Response, NextFunction } from "express";
import passport from "passport";
import mongoose from "mongoose";

import User from "../Models/user";
import { GeneratorToken } from "../Utill";

/**
 * 
 * @param req 
 * @param res 
 * @param next 
 */
export function ProcessRegistraion(req: Request, res: Response, next: NextFunction): void {
    // instantiate a new user object
    let newUser = new User
        ({
            username: req.body.username,
            emailAddress: req.body.emailAddress,
            displayName: req.body.firstName + " " + req.body.lastName
        });

    User.register(newUser, req.body.password, (err) => {
        if (err instanceof mongoose.Error.ValidationError) {
            console.error("All Fields are requried");
            return res.status(400).json({ sucess: false, msg: "ERROR: User not register.All fields are requried", data: null, token: null });
        }
        if (err) {
            console.error("ERROR: Inserting New User");
            if (err.name == "UserExistsError") {
                console.error("ERROR: User already exists");
            }
            console.log(err)
            return res.status(400).json({ sucess: false, msg: "ERROR: User not registered", data: null, token: null });
        }
        return res.json({sucess: true, msg:"User Registered Sucessfull", data: newUser, token: null});

    });

}

/**
 * 
 * @param req 
 * @param res 
 * @param next 
 */
export function ProcessLogin(req: Request, res: Response, next: NextFunction): void {
    passport.authenticate('local', (err: any, user: any, info: any) => {
        // are there server errors?
        if (err) {
            console.error(err);
            return next(err);
        }
        // are the login errors?
        if (!user) {
            return res.status(401).json({ success: false, msg: 'User Not Logged in Successfully!', data: null, token: null });
        }
        req.login(user, (err) => {
            // are there DB errors?
            if (err) {
                console.error(err);
                return res.json({ success: false, msg: 'Error: database error', data: null, token: null });

            }

            const authToken = GeneratorToken(user);

            return res.json({ success: true, msg: 'User Logged in Successfully!', data: user , token: authToken});
        });
        return;
    })(req, res, next);
}

/**
 * 
 * @param req 
 * @param res 
 * @param next 
 */
export function ProcessLogout(req: Request, res: Response, next: NextFunction): void {
    req.logout(() => {
        console.log("User Logged Out");
        // if we had a front-end (Angular, React or Mobile UI)...
        res.json({ success: true, msg: 'User Logged out Successfully!', data: null, token: null});
    });

}