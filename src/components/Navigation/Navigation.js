import {
  LinkStyled,
  HeaderStyled,
} from 'components/Navigation/Navigation.styled';

export const Navigation = () => {
  return (
    <HeaderStyled>
      <nav>
        <LinkStyled to="/">Home</LinkStyled>
        <LinkStyled to="movies">Movies</LinkStyled>
      </nav>
    </HeaderStyled>
  );
};
