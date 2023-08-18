import './Banner.css'

export const Banner = () => {
    // JSX
    return (
        <header className="banner">
            <img src="/img/banner.png" alt="Banner Organo"/>
        </header>
    );
}

// 2 tipos diferentes de fazer: 1: export const, e; 
// 2: function tradidional como em CampoTexto, ficam os dois exemplos

// no 2, muda aqui no Banner.js, que importa do index.js do Banner e altera no App.js que
// é o principal
// Atenção a essas mudanças :)