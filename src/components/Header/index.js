import React from 'react';
import { Link } from 'react-router-dom';

import { MdFavorite } from 'react-icons/md';

import { Container, Favorite } from './styles';

import logoLight from '../../assets/images/orulo-logo-branco.svg';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logoLight} alt="Órulo" />
      </Link>

      <Favorite to="/favorite">
        <div>
          <strong>Meus favoritos</strong>
          <span>3 itens</span>
        </div>
        <MdFavorite size={36} color="#FFF" />
      </Favorite>
    </Container>
  );
}
