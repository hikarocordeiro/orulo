import React from 'react';

import { MdDelete } from 'react-icons/md';
import { Container, RealtyTable } from './styles';

export default function Favorite() {
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
          <tr>
            <td>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSi_pt5WNuJG0fkz_stvZACU8VDQ_4ycmBuqWAnYxlbRgyUHKqO"
                alt="Imóvel"
              />
            </td>
            <td>
              <span>Cidade: Porto Alegre</span>
              <span>Estado: RS</span>
              <span>Bairro: Campo Belo</span>
            </td>
            <td>
              <span>Quartos: 4</span>
              <span>Suítes: 4</span>
              <span>Vagas Garagem: 4</span>
            </td>
            <td>
              <span>Residencial</span>
            </td>
            <td>
              <span>R$ 750.000,00</span>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#288acc" />
              </button>
            </td>
          </tr>
        </tbody>
      </RealtyTable>
    </Container>
  );
}
