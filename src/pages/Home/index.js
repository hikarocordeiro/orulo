import React from 'react';
import {
  MdFavorite,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from 'react-icons/md';

import { RealtyList, Pagination } from './styles';

export default function Home() {
  return (
    <>
      <RealtyList>
        <li>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSi_pt5WNuJG0fkz_stvZACU8VDQ_4ycmBuqWAnYxlbRgyUHKqO"
            alt="Imóvel"
          />
          <strong>Claudia Apto ISPGYZ</strong>
          <span>Porto Alegre / RS</span>

          <button type="button">
            <div>
              <MdFavorite size={16} color="#FFF" />
            </div>

            <span>ADICIONAR AOS FAVORITOS</span>
          </button>
        </li>
        <li>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSi_pt5WNuJG0fkz_stvZACU8VDQ_4ycmBuqWAnYxlbRgyUHKqO"
            alt="Imóvel"
          />
          <strong>Claudia Apto ISPGYZ</strong>
          <span>Porto Alegre / RS</span>

          <button type="button">
            <div>
              <MdFavorite size={16} color="#FFF" />
            </div>

            <span>ADICIONAR AOS FAVORITOS</span>
          </button>
        </li>
        <li>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSi_pt5WNuJG0fkz_stvZACU8VDQ_4ycmBuqWAnYxlbRgyUHKqO"
            alt="Imóvel"
          />
          <strong>Claudia Apto ISPGYZ</strong>
          <span>Porto Alegre / RS</span>

          <button type="button">
            <div>
              <MdFavorite size={16} color="#FFF" />
            </div>

            <span>ADICIONAR AOS FAVORITOS</span>
          </button>
        </li>
        <li>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSi_pt5WNuJG0fkz_stvZACU8VDQ_4ycmBuqWAnYxlbRgyUHKqO"
            alt="Imóvel"
          />
          <strong>Claudia Apto ISPGYZ</strong>
          <span>Porto Alegre / RS</span>

          <button type="button">
            <div>
              <MdFavorite size={16} color="#FFF" />
            </div>

            <span>ADICIONAR AOS FAVORITOS</span>
          </button>
        </li>
        <li>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSi_pt5WNuJG0fkz_stvZACU8VDQ_4ycmBuqWAnYxlbRgyUHKqO"
            alt="Imóvel"
          />
          <strong>Claudia Apto ISPGYZ</strong>
          <span>Porto Alegre / RS</span>

          <button type="button">
            <div>
              <MdFavorite size={16} color="#FFF" />
            </div>

            <span>ADICIONAR AOS FAVORITOS</span>
          </button>
        </li>
        <li>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSi_pt5WNuJG0fkz_stvZACU8VDQ_4ycmBuqWAnYxlbRgyUHKqO"
            alt="Imóvel"
          />
          <strong>Claudia Apto ISPGYZ</strong>
          <span>Porto Alegre / RS</span>

          <button type="button">
            <div>
              <MdFavorite size={16} color="#FFF" />
            </div>

            <span>ADICIONAR AOS FAVORITOS</span>
          </button>
        </li>
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
