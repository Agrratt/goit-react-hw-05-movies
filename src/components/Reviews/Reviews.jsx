import propTypes from 'prop-types';

export function Reviews({ reviews }) {
    return (
        <>
            <ul>
                {reviews.map(({ id, author, content }) => (
                    <li key={id}>
                        <h3>Author: {author}</h3>
                        <p>{content }</p>
                    </li>
                ))}
        </ul>
        </>
)
};

Reviews.propTypes = {
  reviews: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      author: propTypes.string,
      content: propTypes.string,
    })
  ).isRequired,
};