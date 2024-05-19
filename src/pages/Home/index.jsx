
import { MdOutlineEmojiTransportation, MdAddRoad } from "react-icons/md";
import { GiHomeGarage } from "react-icons/gi";

import { Container } from "./styles";
import { Feature } from '@components/Feature';
import { Header } from '@components/Header';


export function Home() {
  return (
    <Container>
      <Header />

      <main>
        <Feature className="cadastrar" title="Cadastrar" icon={MdOutlineEmojiTransportation} to="/cadastrar" />
        <Feature title="Reservada" icon={GiHomeGarage} to="/listar" />
        <Feature title="Disponíveis" icon={MdAddRoad} to="/disponivel" />
      </main>
    </Container>
  )
}

