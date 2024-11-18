import { Request, Response, NextFunction } from "express";

import Movie from "../Models/movie";
import { SanitizeArray } from "../Utill";

/**
 * This function displays the movie list in JSON format
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export function DisplayMovieList(req: Request, res: Response, next: NextFunction): void {
    Movie.find({})
        .then((data) => {
            res.status(200).json({ success: true, msg: "Movie List Retrived and Displayed", data: data })
        })
        .catch((err) => {
            console.error("DisplayMovieError: ", err);
        })
}

/**
 * This function is displayed movie by id
 * @param req 
 * @param res 
 * @param next 
 */
export function DisplayMovieById(req: Request, res: Response, next: NextFunction): void {

    let id = req.params.id;
    Movie.findById({ _id: id })
        .then(function (data) {
            res.status(200).json({ success: true, msg: "Retrieved and Displayed Movie By Id", data: data });
        })
        .catch(function (err) {
            console.error(err);
        });
}

/**
 * This function Add movie to list
 * @param req 
 * @param res 
 * @param next 
 */
export function AddMovie(req: Request, res: Response, next: NextFunction): void {
    let genres = (req.body.genres) ? SanitizeArray(req.body.genres as string) : SanitizeArray("");
    let directors = (req.body.directors) ? SanitizeArray(req.body.directors as string) : SanitizeArray("");
    let writers = (req.body.writers) ? SanitizeArray(req.body.writers as string) : SanitizeArray("");
    let actors = (req.body.actors) ? SanitizeArray(req.body.actors as string) : SanitizeArray("");
    let movie = new Movie({
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
        image:req.body.image
    });
    Movie.create(movie)
        .then(function () {
            res.status(200).json({ success: true, msg: "Movie Added Successfully", data: movie, token: null });
        })
        .catch(function (err) {
            console.error(err);
        });
}

/**
 * This function update the existing movie in database
 * @param req 
 * @param res 
 * @param next 
 */
export function UpdateMovie(req: Request, res: Response, next: NextFunction): void {
    let id = req.params.id;
    let genres = (req.body.genres) ? SanitizeArray(req.body.genres as string) : SanitizeArray("");
    let directors = (req.body.directors) ? SanitizeArray(req.body.directors as string) : SanitizeArray("");
    let writers = (req.body.writers) ? SanitizeArray(req.body.writers as string) : SanitizeArray("");
    let actors = (req.body.actors) ? SanitizeArray(req.body.actors as string) : SanitizeArray("");
    let movieToUpdate = new Movie({
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
        image:req.body.image
    });

    Movie.updateOne({ _id: id }, movieToUpdate)
        .then(function () {
            res.status(200).json({ success: true, msg: "Movie Updated Successfully", data: movieToUpdate , token: null});
        })
        .catch(function (err) {
            console.error(err);
        });

}

/**
 * This function delete the movie from list
 * 
 * @param req 
 * @param res 
 * @param next 
 */
export function DeleteMovie(req: Request, res: Response, next: NextFunction): void {

    let id = req.params.id;

    if (id.length != 24) {
        res.status(400).json({ success: false, msg: "A vaild ID is required to delete a movie", data: null, token: null })
    } else {
        Movie.deleteOne({ _id: id })
            .then(() => {
                res.status(200).json({ success: true, msg: "Movie deleted", data: id, token: null })

            }).catch((err) => {
                console.error(err)
            })
    }

}
