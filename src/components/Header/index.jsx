import { FiUser, FiLogOut } from 'react-icons/fi';
import { Container, User } from './styles';
import { useNavigate } from "react-router-dom";

export function Header() {
 const navigate = useNavigate();
    return (
        <Container>
            <h1>Bem Vindo!</h1>

            <aside>
                <User>
                    <span>Olá </span>
                    <small>
                        <FiUser /> Jonata
                    </small>
                </User>
            </aside>

            <button type="button">
                <FiLogOut size={24} onClick={() => navigate('/')}/>
            </button>
        </Container>
    );
};