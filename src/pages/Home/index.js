import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  MdFavorite,
  MdFirstPage,
  MdLastPage,
  MdChevronLeft,
  MdChevronRight,
} from 'react-icons/md';
import Pagination from 'react-js-pagination';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

import * as FavoriteActions from '../../store/modules/favorite/actions';

import { RealtyList, PaginationContent } from './styles';

export default function Home() {
  const [buildingsList, setBuildingsList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const favorited = useSelector(state => state.favorite);

  const dispatch = useDispatch();

  async function loadBuildings(target = 1) {
    const response = await api.get('/buildings', {
      params: {
        page: target
      }
    });

    const { buildings, page, total } = response.data;

    const data = buildings.map(building => ({
      ...building,
      priceFormatted: formatPrice(building.min_price),
    }));

    setBuildingsList(data);
    setCurrentPage(page);
    setTotalItems(total);
  }

  useEffect(() => {
    loadBuildings();
  }, []);

  function handleAddFavorite(building) {
    dispatch(FavoriteActions.addToFavorite(building));
  }

  function handleRemoveFavorite(id) {
    dispatch(FavoriteActions.removeFromFavorite(id));
  }

  function handlePageClick(page) {
    loadBuildings(page);
  }

  return (
    <>
      <RealtyList>
        {buildingsList.map(building => (
          <li key={building.id}>
            <img src={building.default_image['520x280']} alt={building.name} />
            <strong>{building.name}</strong>
            <span>
              {building.address.city} / {building.address.state}
              <br />
              {building.priceFormatted}
            </span>

            {favorited.find(fav => fav.id === building.id) ? (
              <button
                type="button"
                onClick={() => handleRemoveFavorite(building.id)}
              >
                <div>
                  <MdFavorite size={16} color="#FF312E" />
                </div>

                <span>REMOVER DOS FAVORITOS</span>
              </button>
            ) : (
              <button type="button" onClick={() => handleAddFavorite(building)}>
                <div>
                  <MdFavorite size={16} color="#FFF" />
                </div>

                <span>ADICIONAR AOS FAVORITOS</span>
              </button>
            )}
          </li>
        ))}
      </RealtyList>

      <PaginationContent>
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={10}
          totalItemsCount={totalItems}
          pageRangeDisplayed={5}
          firstPageText={<MdFirstPage />}
          lastPageText={<MdLastPage />}
          prevPageText={<MdChevronLeft />}
          nextPageText={<MdChevronRight />}
          onChange={e => handlePageClick(e)}
        />
      </PaginationContent>
    </>
  );
}
