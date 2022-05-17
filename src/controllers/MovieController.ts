import { Request, Response } from "express";
import "dotenv/config";
import knex from "../database/connection";

const upload_url = process.env.UPLOAD_URL || "http://localhost:3333/uploads";

export default {
  async index(req: Request, res: Response) {
    const movies = await knex("movies").select("*");

    const serializedMovies = movies.map((movie) => {
      return {
        ...movie,
        image_url: `${upload_url}/${movie.image}`,
      };
    });

    return res.json(serializedMovies);
  },

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const movie = await knex("movies").where("id", id).first();

    if (!movie) {
      res.status(404).json({ message: "Movie not found" });
    }

    const serializedMovie = {
      ...movie,
      image_url: `${upload_url}/${movie.image}`,
    };

    return res.json(serializedMovie);
  },

  async create(req: Request, res: Response) {
    const movieData = {
      author: req.body.author,
      title: req.body.title,
      description: req.body.description,
      image: req.file?.filename,
    };

    const movie = await knex.insert(movieData).into("movies");

    return res.json(movie);
  },
};
