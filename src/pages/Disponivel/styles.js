import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
  .subtitulo-vagas-livres {
    margin-top: 50px;
    padding: 8px;
    display: flex;
  }

  h3 {
    padding: 5px;

  }

  
  .capacidade {
    color: ${({ theme }) => theme.COLORS.BRAND_500};
  }
  
  .capacidade span{
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  
  
  .disponivel {
    color: lightgreen;
  }
  
  .disponivel span{
    color: white;
  }
  
  .ocupada {
  color: red;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2), 0 0 1px rgba(255, 0, 0, 0.5), 0 0 5px rgba(255, 0, 0, 0.3);
  transition: color 0.3s ease, text-shadow 0.3s ease;
}

.ocupada:hover {
  color: brown;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5), 0 0 1px rgba(255, 0, 0, 0.7), 0 0 10px rgba(255, 0, 0, 0.5);
}
  
  .ocupada span{
    color: white;
  }
  
  .reservado {
    background-color: red;
  }

  .livre {
    background-color: green;
  }
  
  > main {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 16px;    
    padding: 0px 100px 50px 100px;
  }

  > nav {
    
    min-width: 15%;
  }

`;
