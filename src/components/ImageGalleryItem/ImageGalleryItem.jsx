import { Link, useLocation } from "react-router-dom";
import { ItemStyled, ImageStyled, Title } from 'components/MoviesListItem/MoviesListItem.styled';
import propTypes from 'prop-types';

export function ImageGalleryItem({ id, poster, title }) {
    const location = useLocation();

    return (
        <ItemStyled>
            
            <Link to={`${id}`}
                state={{
                    from: location.pathname + location.search}}
            >
                <ImageStyled src={poster ? `https://image.tmdb.org/t/p/w300/${poster}` : 'No poster'} alt={title} />
                <Title>{title}</Title>
            </Link>
        </ItemStyled>
    )
};

ImageGalleryItem.propTypes = {
  id: propTypes.number.isRequired,
  poster: propTypes.string,
    title: propTypes.string.isRequired,
};
