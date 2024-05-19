import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Header, Item } from "./styles";
import { Button } from '@components/Button';

export function Users() {
  const navigate = useNavigate();
  const [listaVagas, setListaVagas] = useState([]);

  useEffect(() => {
    const carregarVagas = () => {
      const vagas = [];
      const chavesVagas = new Set(); // Usado para verificar duplicações

      for (let i = 0; i < localStorage.length; i++) {
        const chave = localStorage.key(i);
        if (chave.startsWith('reserva_')) {
          try {
            const reserva = JSON.parse(localStorage.getItem(chave));
            if (!chavesVagas.has(reserva.vaga)) {
              chavesVagas.add(reserva.vaga);
              vagas.push(reserva);
            }
          } catch (error) {
            console.error(`Erro ao parsear a chave ${chave}:`, error);
          }
        }
      }
      setListaVagas(vagas);
    };

    carregarVagas();
  }, []);

  return (
      <Container>
        <Header>
          <h1>Vagas Cadastradas</h1>
          <nav>
            <Button title="Voltar" onClick={() => navigate('/home')} />
          </nav>
        </Header>

      <Item>
            <table border="1">
              <thead>
                <tr>
                  <th className="tabela-consulta">Nome</th>
                  <th className="tabela-consulta">Modelo</th>
                  <th className="tabela-consulta">Placa</th>
                  <th className="tabela-consulta">Ap</th>
                  <th className="tabela-consulta">Bloco</th>
                  <th className="tabela-consulta">Vaga</th>
                </tr>
              </thead>
              <tbody>
                {listaVagas.length > 0 ? (
                  listaVagas.map((vaga_reservada, index) => (
                    <tr key={index}>
                      <td>{vaga_reservada.proprietario}</td>
                      <td>{vaga_reservada.modelo}</td>
                      <td>{vaga_reservada.placa}</td>
                      <td>{vaga_reservada.apartamento}</td>
                      <td>{vaga_reservada.bloco}</td>
                      <td>{vaga_reservada.vaga}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6">Nenhuma vaga cadastrada.</td>
                  </tr>
                )}
              </tbody>
            </table>
            </Item>
      </Container>
  );
}




