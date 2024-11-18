import passport from 'passport';
import express from 'express';
const router = express.Router();

import { DisplayMovieById, DisplayMovieList, AddMovie, UpdateMovie, DeleteMovie } from '../Controllers/movie';

// List of Routes/endpoints


// GET Movie List
router.get('/list', function(req, res, next) {    DisplayMovieList(req, res, next); });
// GET Movie by Id
router.get('/find/:id',function(req, res, next){    DisplayMovieById(req, res, next);});

// Add Movie
router.post('/add',passport.authenticate('jwt', { session: false } ), function(req, res, next){    AddMovie(req, res, next);});

// Update Movie
router.put('/update/:id',passport.authenticate('jwt', { session: false } ),function(req, res, next){    UpdateMovie(req, res, next);});

// Delete Movie
router.delete('/delete/:id',passport.authenticate('jwt', { session: false } ),function(req, res, next){    DeleteMovie(req, res, next);});


export default router;
