import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from 'components/ImageGallery/ImageGallery.styled';
import propTypes from 'prop-types';

export function ImageGallery({ movies }) {
    return (
        
            <ImageGalleryList>
            {movies.map(event => {
                return (
                        <ImageGalleryItem
                        key={event.id}
                        id={event.id}
                        poster={event.poster_path}
                        title={event.original_title}   
                    />      
                    )
                }
                    
                                    
                )}      
            </ImageGalleryList>   
    )
};
ImageGallery.propTypes = {
    trendingFilms: propTypes.arrayOf(
        propTypes.exact({
            id: propTypes.number.isRequired,    
            poster_path: propTypes.string,
            original_title: propTypes.string.isRequired,   
            vote_average: propTypes.number.isRequired,     
        })),          
};