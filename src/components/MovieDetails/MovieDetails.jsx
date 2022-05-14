import { useNavigate, useLocation } from 'react-router-dom';
import { Container, SectionStyled, ImageStyled, Info, StyledLink, Wrapper } from 'components/MovieDetails/MovieDetails.styled';
import propTypes from 'prop-types';

export function MovieDetails({ movie }) {
    const {title, genres, overview, poster, releaseDate, vote } = movie;
    const genresAll = genres.map(evt => evt.name).join(', ');
    const navigate = useNavigate();
    const location = useLocation();

    const onGoBack = () => {
        navigate(location?.state?.from ?? '/');
    };

    return (
        <Container>
            <SectionStyled>
                <ImageStyled src={`https://image.tmdb.org/t/p/w500/${poster}`} alt={title} />
                <Info>
                    {/* <button type='button' onClick={() => navigate('/')}>Go back</button> */}
                    <button type='button' onClick={onGoBack}>
                       Go back
                    </button>

                    <h1>{title} ({releaseDate})</h1>     
                    <p>User Score: {vote}</p>
                    <h2>Overview</h2>
                    <p>{overview}</p>          
                    <h2>Genres</h2>
                    <p>{genresAll}</p>
                 </Info>

            </SectionStyled>
  
            <Wrapper>
                <p>Additional information</p>
            </Wrapper>
            
            
            <StyledLink to='cast' >Cast</StyledLink>
            <StyledLink to='reviews'>Reviews</StyledLink>

              <hr/>         
        </Container>

    );
};

MovieDetails.propTypes = {
    movie: propTypes.shape({
    title: propTypes.string,
    genres: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.number,
        name: propTypes.string,
      })
    ),
    poster: propTypes.string,
    overview: propTypes.string,
    releaseDate: propTypes.string,
    vote: propTypes.number,
  }),
}