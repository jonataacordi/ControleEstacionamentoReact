import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  .cadastrar > svg {
   //width: 6vmin;
   width: 45px;
  }

  > main {
    display: flex;
    gap: 16px;    
  }
`;
