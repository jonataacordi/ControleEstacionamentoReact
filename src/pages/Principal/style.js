import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @keyframes fade-out {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .titulo-principal {
    padding: 35px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    animation-name: fade-out;
    animation-duration: 4s;
  }
  
  .titulo-principal:hover {
    transform: scale(1.1);
    transition: transform 5.8s ease; 
    color: #ccc;
  }

  .imagem-principal:hover {
    transform: scale(1.1) ;
    transition: transform 4.8s ease; 
    cursor: pointer;
  }

  > main {
    display: flex;
    gap: 16px;    
  }

  > nav {
    padding: 35px;
    min-width: 15%
  }
`;

//style={{padding: '35px', minWidth: '15%'}}