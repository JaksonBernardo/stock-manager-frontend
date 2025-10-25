import '../css/Home.css';

import Header from '../components/login/Header.js';

function Home() {
    return (
        <div className="app">
            <Header />
            <header className="hero">
                <h1>Gerencie seu negócio de forma inteligente</h1>
                <p>
                    Controle, otimize e acompanhe seu negócio em tempo real com
                    tecnologia inteligente e relatórios automáticos.
                </p>
                <button className="btn-primary">Começar agora</button>
            </header>

            <section className="features">
                
                <div className="feature-card">
                    <h2>📦 Controle de Estoque</h2>
                    <p>Acompanhe entradas e saídas com praticidade.</p>
                </div>
                <div className="feature-card">
                    <h2>📊 Relatórios Automáticos</h2>
                    <p>Tenha insights em tempo real sobre seu negócio.</p>
                </div>
                <div className="feature-card">
                    <h2>🤖 Inteligência</h2>
                    <p>O sistema prevê necessidades e sugere ações.</p>
                </div>
                <div className="feature-card">
                    <h2>💰 Financeiro</h2>
                    <p>
                        Controle custos, receitas e margens de lucro da sua empresa.
                    </p>
                </div>

            </section>

            <footer className="footer">
                <p>© 2025 SmartStock - Todos os direitos reservados</p>
            </footer>
        </div>
    );
}

export default Home;
