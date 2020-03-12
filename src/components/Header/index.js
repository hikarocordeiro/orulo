import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { MdFavorite } from 'react-icons/md';

import { Container, Favorite } from './styles';

import logoLight from '../../assets/images/orulo-logo-branco.svg';

export default function Header() {
  const favoriteSize = useSelector(state => state.favorite.length);
  const heartColor = favoriteSize > 0 ? '#FF312E' : '#FFF';

  return (
    <Container>
      <Link to="/">
        <img src={logoLight} alt="Órulo" />
      </Link>

      <Favorite to="/favorite">
        <div>
          <strong>Meus favoritos</strong>
          <span>{favoriteSize} itens</span>
        </div>
        <MdFavorite size={36} color={heartColor} />
      </Favorite>
    </Container>
  );
}
