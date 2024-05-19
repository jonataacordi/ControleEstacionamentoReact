import { Container } from './styles';

export function Feature({ icon: Icon, title, ...rest }) {
  
  //OBS: O {title} dentro do footer é nome de cada botão (Cadastrar, Listar Vagas...) dentro do container
  return (
    <Container {...rest}>
      {Icon && <Icon size={42} />}

      <footer>
        {title}
      </footer>
    </Container>
  );
};
