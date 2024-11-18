"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const movie_1 = require("../Controllers/movie");
router.get('/list', function (req, res, next) { (0, movie_1.DisplayMovieList)(req, res, next); });
router.get('/find/:id', function (req, res, next) { (0, movie_1.DisplayMovieById)(req, res, next); });
router.post('/add', passport_1.default.authenticate('jwt', { session: false }), function (req, res, next) { (0, movie_1.AddMovie)(req, res, next); });
router.put('/update/:id', passport_1.default.authenticate('jwt', { session: false }), function (req, res, next) { (0, movie_1.UpdateMovie)(req, res, next); });
router.delete('/delete/:id', passport_1.default.authenticate('jwt', { session: false }), function (req, res, next) { (0, movie_1.DeleteMovie)(req, res, next); });
exports.default = router;
//# sourceMappingURL=movie.js.map