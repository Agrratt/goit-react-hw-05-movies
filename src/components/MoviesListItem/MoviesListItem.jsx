import { Link, useLocation } from "react-router-dom";
import { ItemStyled, ImageStyled, Title } from 'components/MoviesListItem/MoviesListItem.styled';
import propTypes from 'prop-types';

export function MoviesListItem({ id, poster, title }) {
    const location = useLocation();

    return (
        <ItemStyled>
            
            <Link to={`movies/${id}`}
            state={{from: location.pathname + location.search}}>
                <ImageStyled src={poster ? `https://image.tmdb.org/t/p/w300/${poster}` : 'No poster'} alt={title} />
                <Title>{title}</Title>
            </Link>
        </ItemStyled>
    )
};

MoviesListItem.propTypes = {
  id: propTypes.number.isRequired,
  poster: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
};
