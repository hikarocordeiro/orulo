import React, { useState, useEffect } from 'react';
import {
  MdFavorite,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from 'react-icons/md';

import api from '../../services/api';

import { RealtyList, Pagination } from './styles';

export default function Home() {
  const [buildings, setBuildings] = useState([]);

  useEffect(() => {
    async function loadBuildings() {
      const response = await api.get('/buildings');

      const data = response.data.buildings;

      setBuildings(data);
    }

    loadBuildings();
  }, []);

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
              R$ {building.min_price}
            </span>

            <button type="button">
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
