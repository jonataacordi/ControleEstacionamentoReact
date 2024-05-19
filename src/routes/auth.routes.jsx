import { Routes, Route } from 'react-router-dom';

import { SignUp } from '../pages/SignUp';
import { Home } from '../pages/Home';
import { Users } from '../pages/Users';
import { Principal } from '../pages/Principal'; 
import { Disponivel } from '../pages/Disponivel';

export function AuthRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Principal />}/>
      <Route path="/home" element={< Home />} />
      <Route path="/cadastrar" element={<SignUp />} />
      <Route path="/listar" element={<Users />} />
      <Route path="/disponivel" element={<Disponivel />} />
    </Routes>
  );
}