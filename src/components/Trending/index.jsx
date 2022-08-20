import MovieCard from './MovieCard';
import { moviesData } from './moviesData';

function Trending() {
    return (
        <>
            <h3 className=" text-primary mt-12 mb-6 pb-4 border-b border-primary text-left ">Trending</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
                {moviesData.map((movie, index) => (
                    <MovieCard movie={movie} key={index} />
                ))}
            </div>
            <div className="flex justify-center">
                <button className="btn hover:scale-125 transition ease-linear">Load More</button>
            </div>
        </>
    );
}

export default Trending;
