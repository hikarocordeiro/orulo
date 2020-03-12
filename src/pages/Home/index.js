import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  MdFavorite,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from 'react-icons/md';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

import * as FavoriteActions from '../../store/modules/favorite/actions';

import { RealtyList, Pagination } from './styles';

export default function Home() {
  const [buildings, setBuildings] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadBuildings() {
      const response = await api.get('/buildings');

      const data = response.data.buildings.map(building => ({
        ...building,
        priceFormatted: formatPrice(building.min_price),
      }));

      setBuildings(data);
    }

    loadBuildings();
  }, []);

  function handleAddFavorite(building) {
    dispatch(FavoriteActions.addToFavorite(building));
  }

  return (
    <>
      <RealtyList>
        {buildings.map(building => (
          <li key={building.id}>
            <img src={building.default_image['520x280']} alt={building.name} />
            <strong>{building.name}</strong>
            <span>
              {building.address.city} / {building.address.state}
              <br />
              {building.priceFormatted}
            </span>

            <button type="button" onClick={() => handleAddFavorite(building)}>
              <div>
                <MdFavorite size={16} color="#FFF" />
              </div>

              <span>ADICIONAR AOS FAVORITOS</span>
            </button>
          </li>
        ))}
      </RealtyList>

      <Pagination>
        <li>
          <MdKeyboardArrowLeft size={16} />
        </li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>
          <MdKeyboardArrowRight size={16} />
        </li>
      </Pagination>
    </>
  );
}
