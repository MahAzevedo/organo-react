import Colaborador from '../Colaborador';
import './Time.css'

const Time = (props) => {
    const css = { backgroundColor: props.corSecundaria }

    return (
        <section className='time' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador
                    nome={colaborador.nome}
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem}
                />)}
            </div>
        </section>
    )
}

export default Time;

// props é o que recebemos como parâmetro, deve ser "puxado/copiado/replicado" de dentro 
//das aspas para onde será usado

// todo componente REACT a gente vai receber esse props pq é de onde passam-se parâmetros
// quando a gente chama a tagzinha <> lá de fora 
// né, props.algumaCoisa (props ponto alguma coisa) 


// *** ATENÇÃO:
//  No <section> poderia deixar esse backgroundColor no lugar do css mas fica bem grande
//  exemplo: <section className='time' style={{backgroundColor: props.corSecundaria}}>
// no <h3> tá comprido. São formar diferentes de obter o mesmo resultado

// *** CSS NO STYLE NA SECTION CLASSNAME:
// backgroundColor, borderColor, são propriedades CSS convertidas, pra sintaxe do JSX, 
// ou seja, isso aqui é um JS por debaixo dos panos, por isso o camelCase, em REACT