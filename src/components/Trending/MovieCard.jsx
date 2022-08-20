import { BiTime } from 'react-icons/bi';

function MovieCard({ movie }) {
    const { src, title, main, runtime } = movie;
    return (
        <div className="card hover:scale-105 transition ease-linear">
            <img src={src} alt={title} className="rounded-md  overflow-auto w-full" />
            <div className="p-4 text-white">
                <h4>{title}</h4>
                <p>{main}</p>
            </div>
            <div className="badge">
                <BiTime />
                <p className="pl-1">{runtime}</p>
            </div>
        </div>
    );
}

export default MovieCard;
