import { useState } from "react";
import { FiMail, FiUser, FiLock, FiArrowLeft } from 'react-icons/fi';
import { IoCarSportSharp, IoColorPalette} from "react-icons/io5";
import { ImListNumbered } from "react-icons/im";
import { FaHotel} from "react-icons/fa6";
import { PiDevToLogoBold} from "react-icons/pi";
import { SiNumpy } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";


import { Container, Form } from "./styles";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignUp() {

  const [placa, setPlaca] = useState("");
  const [proprietario, setProprietario] = useState("");
  const [apartamento, setApartamento] = useState("");
  const [bloco, setBloco] = useState("");
  const [modelo, setModelo] = useState("");
  const [cor, setCor] = useState("");
  const [vaga, setVaga] = useState("");


  function handleSignUp() {
    if (!placa || !proprietario || !apartamento || !bloco || !modelo || !cor || !vaga) {
      return swal("Erro!", "Por favor, preencha todos os campos.", "error");
      //return alert("Preencha todos os campos!");
    }

     // Verifica se a vaga já está ocupada
     if (localStorage.getItem(`reserva_${vaga}`)) {
      swal("Erro!", "Esta vaga já está ocupada.", "error");
      return;
  }

  // Salva os dados da reserva no localStorage

  const reserva = {
      placa,
      proprietario,
      apartamento,
      bloco,
      modelo,
      cor,
      vaga
  };
  
  localStorage.setItem(`reserva_${vaga}`, JSON.stringify(reserva));

    console.log("Placa: " + placa 
      + "\nProprietário: " + proprietario 
      + "\nNúmero Apartamento: " + apartamento 
      + "\nBloco Apartamento: " + bloco
      + "\nModelo do Veículo: " + modelo
      + "\nCor do Veículo: " + cor
      + "\nNúmero da vaga: " + vaga
    )

    swal("Cadastro realizado com sucesso!", "Sua reserva foi registrada.", "success");
  
    limpar();
  }//Fim função: handleSignUp()

  function limpar(){
    document.getElementById('placa').value = '';
    document.getElementById('proprietario').value = '';
    document.getElementById('apartamento').value = '';
    document.getElementById('bloco').value = '';
    document.getElementById('modelo').value = '';
    document.getElementById('cor').value = '';
    document.getElementById('vaga').value = '';
  }

  return (
    <Container>
      <Form>
        <h1>Cadastro de vagas</h1>

        <Input
          id = 'placa'
          placeholder="Placa Veículo"
          type="text"
          icon={PiDevToLogoBold }
          onChange={e => setPlaca(e.target.value)}
        />

        <Input
          id = 'proprietario'
          placeholder="Nome Proprietário"
          type="text"
          icon={FiUser}
          onChange={e => setProprietario(e.target.value)}
        />

        <Input
          id = 'apartamento'
          placeholder="Número Apartamento"
          type="text"
          icon={SiNumpy }
          onChange={e => setApartamento(e.target.value)}
        />

        <Input
          id = 'bloco'
          placeholder="Bloco Apartamento"
          type="text"
          icon={FaHotel}
          onChange={e => setBloco(e.target.value)}
        />

        <Input
          id = 'modelo'
          placeholder="Modelo Veículo"
          type="text"
          icon={IoCarSportSharp}
          onChange={e => setModelo(e.target.value)}
        />

        <Input
          id = 'cor'
          placeholder="Cor do Veículo"
          type="text"
          icon={IoColorPalette}
          onChange={e => setCor(e.target.value)}
        />

        <Input
          id = 'vaga'
          placeholder="Número da Vaga"
          type="text"
          icon={ImListNumbered}
          onChange={e => setVaga(e.target.value)}
        />

        <Button
          title="Cadastrar"
          onClick={handleSignUp}
        />

        <Link to="/home">
          <FiArrowLeft/>
          Se já possui vaga reservada
        </Link>
      </Form>
    </Container>
  )
}