import mongoose from "mongoose";


const movieSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
})
const Movie = mongoose.model('Movie', movieSchema);
export default Movie