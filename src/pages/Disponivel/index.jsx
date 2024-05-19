import { FaCarRear } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container } from "./styles";
import { Button } from '@components/Button';
import { Feature } from '@components/Feature';

export function Disponivel() {
  const navigate = useNavigate();
  const total_vagas = 10;
  const [listaVagas, setListaVagas] = useState([]);

  useEffect(() => {
    const carregarVagas = () => {
      const vagas = [];

      for (let i = 0; i < localStorage.length; i++) {
        const chave = localStorage.key(i);
        if (chave.startsWith('reserva_')) {
          try {
            const reserva = JSON.parse(localStorage.getItem(chave));
            vagas.push(reserva);
          } catch (error) {
            console.error(`Erro ao parsear a chave ${chave}:`, error);
          }
        }
      }

      setListaVagas(vagas);
    };

    carregarVagas();
  }, []);

  const qntd_livre = total_vagas - listaVagas.length;
  const qntd_ocupada =  total_vagas - qntd_livre

  const vagaEstaReservada = (numeroVaga) => {
    return listaVagas.some(vagaReserva => vagaReserva.vaga == numeroVaga);
  };

  return (
      <Container>
        
            <div className='subtitulo-vagas-livres'>
                <h3 className='capacidade'>Capacidade: <span className='capacidade-span'>{total_vagas}</span></h3>
                <h3 className='disponivel'>Disponível: <span className='disponivel-span'>{qntd_livre}</span></h3>
                <h3 className='ocupada'>Ocupada: <span className='disponivel-span'>{qntd_ocupada}</span></h3>
            </div>
        
      <main>
        {
            Array.from({ length: total_vagas }, (_, index) => {
                const numeroVaga = index + 1;
                
                const reservada = vagaEstaReservada(numeroVaga);
                
                return (
                    <Feature 
                    key={numeroVaga} 
                    title={'Vaga '+numeroVaga} 
                    className={reservada ? "reservado" : "livre"} 
                    icon={FaCarRear} 
                    />
                );
            })
        }
      </main>

      <nav>
        <Button title="Voltar" onClick={() => navigate('/home')} />
      </nav>
    </Container>
  );
}

