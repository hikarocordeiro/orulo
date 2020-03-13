import styled from 'styled-components';
import { darken } from 'polished';

export const RealtyList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  list-style: none;
  transition: background 0.2s;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: center;
      max-width: 140px;
      max-height: 79px;
    }

    > strong {
      font-size: 12px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 14px;
      font-weight: bold;
      margin: 5px 0 5px;
    }

    button {
      background: #288acc;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;

      display: flex;
      align-items: center;

      &:hover {
        background: ${darken(0.03, '#288acc')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
        font-size: 9px;
      }
    }
  }
`;

export const PaginationContent = styled.div`
  margin-top: 20px;
  background: #fff;
  border-radius: 4px;
  align-items: center;

  .pagination {
    display: flex;
    flex-direction: row;
    justify-content: center;

    color: #288acc;
    font-weight: bold;

    li {
      display: flex;
      flex-direction: row;

      a {
        padding: 8px 16px;
        border-radius: 4px;
        text-decoration: none;
        color: #288acc;
      }

      &:hover {
        background: #288acc;
        color: #fff;
        overflow: hidden;

        a {
          color: #fff;
        }
      }
    }

    .active {
      background: #288acc;
      color: #fff;
      overflow: hidden;

      a {
        color: #fff;
      }
    }
  }
`;
