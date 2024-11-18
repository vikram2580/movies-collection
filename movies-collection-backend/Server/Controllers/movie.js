"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayMovieList = DisplayMovieList;
exports.DisplayMovieById = DisplayMovieById;
exports.AddMovie = AddMovie;
exports.UpdateMovie = UpdateMovie;
exports.DeleteMovie = DeleteMovie;
const movie_1 = __importDefault(require("../Models/movie"));
const Utill_1 = require("../Utill");
function DisplayMovieList(req, res, next) {
    movie_1.default.find({})
        .then((data) => {
        res.status(200).json({ success: true, msg: "Movie List Retrived and Displayed", data: data });
    })
        .catch((err) => {
        console.error("DisplayMovieError: ", err);
    });
}
function DisplayMovieById(req, res, next) {
    let id = req.params.id;
    movie_1.default.findById({ _id: id })
        .then(function (data) {
        res.status(200).json({ success: true, msg: "Retrieved and Displayed Movie By Id", data: data });
    })
        .catch(function (err) {
        console.error(err);
    });
}
function AddMovie(req, res, next) {
    let genres = (req.body.genres) ? (0, Utill_1.SanitizeArray)(req.body.genres) : (0, Utill_1.SanitizeArray)("");
    let directors = (req.body.directors) ? (0, Utill_1.SanitizeArray)(req.body.directors) : (0, Utill_1.SanitizeArray)("");
    let writers = (req.body.writers) ? (0, Utill_1.SanitizeArray)(req.body.writers) : (0, Utill_1.SanitizeArray)("");
    let actors = (req.body.actors) ? (0, Utill_1.SanitizeArray)(req.body.actors) : (0, Utill_1.SanitizeArray)("");
    let movie = new movie_1.default({
        movieID: req.body.movieID,
        title: req.body.title,
        studio: req.body.studio,
        genres: genres,
        directors: directors,
        writers: writers,
        actors: actors,
        length: req.body.length,
        year: req.body.year,
        shortDescription: req.body.shortDescription,
        mpaRating: req.body.mpaRating,
        criticsRating: req.body.criticsRating,
        image: req.body.image
    });
    movie_1.default.create(movie)
        .then(function () {
        res.status(200).json({ success: true, msg: "Movie Added Successfully", data: movie, token: null });
    })
        .catch(function (err) {
        console.error(err);
    });
}
function UpdateMovie(req, res, next) {
    let id = req.params.id;
    let genres = (req.body.genres) ? (0, Utill_1.SanitizeArray)(req.body.genres) : (0, Utill_1.SanitizeArray)("");
    let directors = (req.body.directors) ? (0, Utill_1.SanitizeArray)(req.body.directors) : (0, Utill_1.SanitizeArray)("");
    let writers = (req.body.writers) ? (0, Utill_1.SanitizeArray)(req.body.writers) : (0, Utill_1.SanitizeArray)("");
    let actors = (req.body.actors) ? (0, Utill_1.SanitizeArray)(req.body.actors) : (0, Utill_1.SanitizeArray)("");
    let movieToUpdate = new movie_1.default({
        _id: id,
        movieID: req.body.movieID,
        title: req.body.title,
        studio: req.body.studio,
        genres: genres,
        directors: directors,
        writers: writers,
        actors: actors,
        length: req.body.length,
        year: req.body.year,
        shortDescription: req.body.shortDescription,
        mpaRating: req.body.mpaRating,
        criticsRating: req.body.criticsRating,
        image: req.body.image
    });
    movie_1.default.updateOne({ _id: id }, movieToUpdate)
        .then(function () {
        res.status(200).json({ success: true, msg: "Movie Updated Successfully", data: movieToUpdate, token: null });
    })
        .catch(function (err) {
        console.error(err);
    });
}
function DeleteMovie(req, res, next) {
    let id = req.params.id;
    if (id.length != 24) {
        res.status(400).json({ success: false, msg: "A vaild ID is required to delete a movie", data: null, token: null });
    }
    else {
        movie_1.default.deleteOne({ _id: id })
            .then(() => {
            res.status(200).json({ success: true, msg: "Movie deleted", data: id, token: null });
        }).catch((err) => {
            console.error(err);
        });
    }
}
//# sourceMappingURL=movie.js.map