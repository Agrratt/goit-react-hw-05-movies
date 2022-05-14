import notFoundImg from 'images/notFound.jpg';
import propTypes from 'prop-types';
import { ListStyled } from 'components/Cast/Cast.styled';

export function Cast({ cast }) {
        

    return (
        <>
            <ListStyled>
                {cast.map(({ id, image, name }) => (
                    <li key={id}>
                        {image
                            ? (<div>
                                <img
                                src={`https://image.tmdb.org/t/p/w300/${image}`}
                                    alt={name} />
                                <p>{name}</p>
                            </div>
                                
                            )
                            : (<div>
                                <img src={notFoundImg} width={300} height={450} alt={name} />
                                <p>{name}</p>
                            </div>
                                )}
                    </li>
                ))}
        </ListStyled>
        </>
)
};

Cast.propTypes = {
  cast: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      name: propTypes.string,
      image: propTypes.string,
    })
  ).isRequired,
};