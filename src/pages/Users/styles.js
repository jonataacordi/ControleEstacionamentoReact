import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 32px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 22px;

  > nav {
    display: flex;
    gap: 16px;

    > button {
      width: 150px;
    }
  }

`;

export const Item = styled(Link)`
   width: 100%;
   padding: 32px 16px;
   background-color: ${({ theme }) => theme.COLORS.GRAY_800};
   color: ${({ theme }) => theme.COLORS.WHITE};
   border-radius: 5px;
   margin-bottom: 16px;

   &:hover {
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
   }

   > table {
    width: 100%;
    border-collapse: collapse;
    font-family: Arial, sans-serif;
    border: none;
   }

   th {
     background-color: ${({ theme }) => theme.COLORS.BRAND_600};
    color: white;
    padding: 12px;
    text-align: left;
    }

    /* Estilo para as células da tabela */
    td {
        padding: 12px;
        border-bottom: 1px solid #ddd;
    }

    /* Estilo para linhas alternadas (zebradas) */
    tr:nth-child(even) {
      background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    }
`;