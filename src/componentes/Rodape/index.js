import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='rodape'>
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target="_blank">
                            <img src="/img/fb.png" alt="Facebook Organo" />
                        </a>
                    </li>
                    <li>
                        <a href="facebook.com" target="_blank">
                            <img src="/img/tw.png" alt="Twitter Organo" />
                        </a>
                    </li>
                    <li>
                        <a href="facebook.com" target="_blank">
                            <img src="/img/ig.png" alt="Instagram Organo" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/img/logo.png" alt="Logo Organo" />
            </section>
            <section>
                <p>
                    Desenvolvido por Alura.
                </p>
            </section>
        </footer>
    )
}

export default Rodape;