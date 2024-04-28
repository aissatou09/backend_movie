import  Movie  from '../model/movie.model.js'

export const createMovie = async (req,res) => {
    if (!req.body.title ) {
        return res.status(400).send({message: "donner le titre"})
    }
   const data= await Movie.create({
        title: req.body.title,
        year: req.body.year,
        synopsis: req.body.synopsis
    })
    data.save()
    console.log(data)
    res.status(201).send({message: "film cree"})
    console.log("creating movie")
}

export const getMovies = async (req,res) => {
    const movies = await Movie.find()
    res.status(200).send(movies)
}

export const getMovieById = async (req,res) => {
    const id = req.params.id
    const movie = await Movie.findById(id)
    if (!movie) {
        res.status(404).send({message: "film introuvable"})
    }
    res.status(200).send(movie)
}

export const deleteMovie = async (req,res) => {
    const id = req.params.id
    const movie = await Movie.findByIdAndDelete(id)
    if (!movie) {
        res.status(404).send({message: "film introuvable"})
    }
    res.status(200).send({message: "film supprime"})
}

export const updateMovie = async(req,res)=>{
    const id = req.params.id
    const movie = await Movie.findById(id)
        if (!movie) {
            res.status(404).send({message: "film introuvable"})
        }
        movie.title = req.body.title
        movie.year = req.body.year
        movie.synopsis = req.body.synopsis
        movie.save()
        res.status(200).send({message: "film modifie"})
    }
    
