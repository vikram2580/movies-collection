"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SanitizeArray = SanitizeArray;
exports.GeneratorToken = GeneratorToken;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function SanitizeArray(inputString) {
    if (Array.isArray(inputString)) {
        return inputString.map((value) => value.trim());
    }
    else if (typeof inputString == 'string') {
        return inputString.split(",").map((value) => value.trim());
    }
    else {
        console.error("Invalid input type");
        return [];
    }
}
function GeneratorToken(user) {
    const paylod = {
        id: user._id,
        DisplayName: user.displayname,
        username: user.username,
        EmailAddress: user.emailAddress
    };
    const jwtOptions = {
        expiresIn: 604800
    };
    return jsonwebtoken_1.default.sign(paylod, "SomeSecret", jwtOptions);
}
//# sourceMappingURL=index.js.map