"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessRegistraion = ProcessRegistraion;
exports.ProcessLogin = ProcessLogin;
exports.ProcessLogout = ProcessLogout;
const passport_1 = __importDefault(require("passport"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = __importDefault(require("../Models/user"));
const Utill_1 = require("../Utill");
function ProcessRegistraion(req, res, next) {
    let newUser = new user_1.default({
        username: req.body.username,
        emailAddress: req.body.emailAddress,
        displayName: req.body.firstName + " " + req.body.lastName
    });
    user_1.default.register(newUser, req.body.password, (err) => {
        if (err instanceof mongoose_1.default.Error.ValidationError) {
            console.error("All Fields are requried");
            return res.status(400).json({ sucess: false, msg: "ERROR: User not register.All fields are requried", data: null, token: null });
        }
        if (err) {
            console.error("ERROR: Inserting New User");
            if (err.name == "UserExistsError") {
                console.error("ERROR: User already exists");
            }
            console.log(err);
            return res.status(400).json({ sucess: false, msg: "ERROR: User not registered", data: null, token: null });
        }
        return res.json({ sucess: true, msg: "User Registered Sucessfull", data: newUser, token: null });
    });
}
function ProcessLogin(req, res, next) {
    passport_1.default.authenticate('local', (err, user, info) => {
        if (err) {
            console.error(err);
            return next(err);
        }
        if (!user) {
            return res.status(401).json({ success: false, msg: 'User Not Logged in Successfully!', data: null, token: null });
        }
        req.login(user, (err) => {
            if (err) {
                console.error(err);
                return res.json({ success: false, msg: 'Error: database error', data: null, token: null });
            }
            const authToken = (0, Utill_1.GeneratorToken)(user);
            return res.json({ success: true, msg: 'User Logged in Successfully!', data: user, token: authToken });
        });
        return;
    })(req, res, next);
}
function ProcessLogout(req, res, next) {
    req.logout(() => {
        console.log("User Logged Out");
        res.json({ success: true, msg: 'User Logged out Successfully!', data: null, token: null });
    });
}
//# sourceMappingURL=auth.js.map