import { Collection, Schema, model } from "mongoose";

// Movies Interface - defines the structure of a movie document

export interface IMovie {
  movieID: string;
  title: string;
  studio: string;
  genres: string[];
  directors: string[];
  writers: string[];
  actors: string[];
  year: number;
  length: number;
  shortDescription: string;
  mpaRating: string;
  crtiticsRating: number;
  image: string;
}

// Movie Schema - defines the structure of a movie document
let movieSchema = new Schema<IMovie>({
  movieID: String,
  title: String,
  studio: String,
  genres: [String],
  directors: [String],
  writers: [String],
  actors: [String],
  year: Number,
  length: Number,
  shortDescription: String,
  mpaRating: String,
  crtiticsRating: Number,
  image: String,
});

let Movie = model<IMovie>("Movie", movieSchema);

export default Movie;
