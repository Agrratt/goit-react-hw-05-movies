import { MoviesListItem } from 'components/MoviesListItem/MoviesListItem';
import propTypes from 'prop-types';
import { ImageGalleryList } from 'components/ImageGallery/ImageGallery.styled';


export function MoviesList({movies}) {
    return (
        <ImageGalleryList>
            {movies.map(event => {
                return (
                    <MoviesListItem
                        key={event.id}
                        id={event.id}
                        poster={event.poster_path}
                        title={event.original_title}
                        // vote={vote_average}
                    />
                )
            }          
            )}
        </ImageGalleryList>
)
};
MoviesList.propTypes = {
    trendingFilms: propTypes.arrayOf(
        propTypes.exact({
            id: propTypes.number.isRequired,    
            poster_path: propTypes.string.isRequired,
            original_title: propTypes.string.isRequired,   
            vote_average: propTypes.number.isRequired,     
        })),          
};