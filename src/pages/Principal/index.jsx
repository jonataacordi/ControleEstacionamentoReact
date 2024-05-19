import { useNavigate } from "react-router-dom";
import { Container } from './style';
import { Button } from '@components/Button';
import logoEstacionamento from '@public/logo_estacionamento.png'

export function Principal() {

  const navigate = useNavigate();
  
  return (
    <Container>
        <h2 className='titulo-principal'>Sistema Cadastro Estacionamento</h2>
      <main>
      
        <img className='imagem-principal' src={logoEstacionamento} alt="" />
        
      </main>

      <nav >
          <Button title="Entrar" onClick={() => navigate('/home')} />
        
      </nav>
     
    </Container>
  )
}