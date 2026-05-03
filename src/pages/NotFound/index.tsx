import { useNavigate } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-code">404</h1>
        <div className="notfound-icon">
           <i className="bi bi-geo-alt-fill"></i> {/* Se estiver usando Bootstrap Icons */}
        </div>
        <h2 className="notfound-title">Ops! Página não encontrada.</h2>
        <p className="notfound-text">
          Parece que você se perdeu pelo caminho ou esta página não existe mais. 
          Que tal voltar para o início e tentar novamente?
        </p>
        <button className="notfound-button" onClick={() => navigate('/home')}>
          Voltar para a Home
        </button>
      </div>
    </div>
  );
}

export default NotFound;