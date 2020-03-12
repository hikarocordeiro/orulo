import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdDelete } from 'react-icons/md';

import { formatPrice } from '../../util/format';
import * as FavoriteActions from '../../store/modules/favorite/actions';

import { Container, RealtyTable } from './styles';

export default function Favorite() {
  const favorites = useSelector(state =>
    state.favorite.map(building => ({
      ...building,
      priceFormatted: formatPrice(building.min_price),
    }))
  );

  const dispatch = useDispatch();

  function handleRemoveFavorite(id) {
    dispatch(FavoriteActions.removeFromFavorite(id));
  }

  return (
    <Container>
      <RealtyTable>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Localização</th>
            <th>Quartos</th>
            <th>Finalidade</th>
            <th>Valor</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {favorites.map(building => (
            <tr key={building.id}>
              <td>
                <img
                  src={building.default_image['520x280']}
                  alt={building.name}
                />
              </td>
              <td>
                <span>Cidade: {building.address.city}</span>
                <span>Estado: {building.address.state}</span>
                <span>Bairro: {building.address.area}</span>
              </td>
              <td>
                <span>Quartos: {building.max_bedrooms}</span>
                <span>Suítes: {building.max_suites}</span>
                <span>Vagas Garagem: {building.max_parking}</span>
              </td>
              <td>
                <span>{building.finality}</span>
              </td>
              <td>
                <span>{building.priceFormatted}</span>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => handleRemoveFavorite(building.id)}
                >
                  <MdDelete size={20} color="#288acc" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </RealtyTable>
    </Container>
  );
}
