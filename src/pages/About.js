import '../css/About.css';
import Header from '../components/login/Header.js';

function About() {
    return (
        <>
            <Header />
            <div className="about-container">
                {/* HERO */}
                <header className="about-hero">
                    <h1>Sobre Nós</h1>
                    <p>
                        O SmartStock é uma plataforma de gestão inteligente que conecta
                        dados, tecnologia e análise financeira para ajudar empresas a
                        tomarem decisões estratégicas com mais eficiência.
                    </p>
                    <button className="btn-primary">Fale com nossa equipe</button>
                </header>

                {/* MISSÃO E VISÃO */}
                <section className="about-mission">
                    <div className="mission-card">
                        <h2>🎯 Nossa Missão</h2>
                        <p>
                            Oferecer soluções digitais que tornem a administração de negócios
                            mais ágil, precisa e inteligente, apoiando gestores na tomada de
                            decisão e no crescimento sustentável.
                        </p>
                    </div>
                    <div className="mission-card">
                        <h2>🌍 Nossa Visão</h2>
                        <p>
                            Ser referência em tecnologia de gestão empresarial, combinando
                            inovação, análise de dados e visão financeira para transformar
                            organizações.
                        </p>
                    </div>
                </section>

                {/* PILARES DO NEGÓCIO */}
                <section className="about-pillars">
                    <h2>Nossos Pilares</h2>
                    <div className="pillars-grid">
                        <div className="pillar-card">
                            <h3>🤖 Inteligência</h3>
                            <p>
                                Automatizamos processos e geramos insights estratégicos para
                                aumentar a competitividade do seu negócio.
                            </p>
                        </div>
                        <div className="pillar-card">
                            <h3>💰 Financeiro</h3>
                            <p>
                                Unimos gestão e saúde financeira, ajudando empresas a manterem
                                controle de custos e foco em resultados.
                            </p>
                        </div>
                        <div className="pillar-card">
                            <h3>📈 Crescimento</h3>
                            <p>
                                Nossas soluções são pensadas para escalar, acompanhando a
                                evolução e os desafios da sua empresa.
                            </p>
                        </div>
                    </div>
                </section>

                {/* VALORES */}
                <section className="about-values">
                    <h2>Nossos Valores</h2>
                    <ul>
                        <li>🚀 Inovação e tecnologia</li>
                        <li>🤝 Transparência e confiança</li>
                        <li>⚡ Agilidade e eficiência</li>
                        <li>🌱 Sustentabilidade e crescimento</li>
                    </ul>
                </section>

                {/* FOOTER */}
                <footer className="about-footer">
                    <p>© 2025 SmartStock — Transformando gestão em resultados</p>
                </footer>
            </div>
        </>

    );
}

export default About;
