import { useState, useEffect } from 'react';

// CSS
import './App.css';

// COMPONENTS
import Header from './components/login/Header.js';
import InputText from './components/login/InputText.js';
import InputPassword from './components/login/InputPass.js';
import ButtonLogin from './components/login/ButtonLogin.js';
import GeneralAlert from './components/alerts/Alert.js';

// ICONS
import StoreIcon from '@mui/icons-material/Store';

function App() {
	
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [alert, setAlert] = useState(null);

	const getInfos = async () => {

		if (!email || !password) {
			setAlert({
				type: 'warning',
				text: 'Preencha email e senha para fazer o login',
			});
			return;
		}

		setAlert({
			type: 'success',
			text: 'Login realizado com sucesso',
		});
	};

	useEffect(() => {
		if (alert) {
			const timer = setTimeout(() => setAlert(null), 4000);
			return () => clearTimeout(timer);
		}
	}, [alert]);

	return (
		<>
			<Header />
			<div className="card-login">
				<div className="card-header">
					<div>
						<StoreIcon sx={{ fontSize: 80, color: '#53b8ee' }} />
					</div>
					<div className="div-text-header">
						<p>Bem vindo!</p>
						<p>Faça seu login</p>
					</div>
				</div>
				<div className="card-body">
					<InputText value={email} onChange={setEmail} placeholder="Email" />
					<InputPassword value={password} onChange={setPassword} placeholder="Senha" />
				</div>
				<div className="card-button">
					<ButtonLogin onClick={getInfos} text="ENTRAR" />
				</div>
				{alert && (
					<GeneralAlert
						type={alert.type}
						text={alert.text}
					/>
				)}
				<div className="card-footer">
					<p>
						Não tem uma conta? <a href="/register">Cadastre-se</a>
					</p>
				</div>
			</div>
		</>
	);
}

export default App;
