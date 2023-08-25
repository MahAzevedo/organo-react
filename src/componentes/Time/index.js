import './Time.css'

const Time = (props) => {
    return (
        <section className='time'>
            <h3>{props.nome}</h3>
        </section>
    )
}

export default Time;

// props é o que recebemos como parâmetro, deve ser "puxado/copiado/replicado" de dentro 
//das aspas para onde será usado

// todo componente REACT a gente vai receber esse props pq é de onde passam-se parâmetros
// quando a gente chama a tagzinha <> lá de fora 
// né, props.algumaCoisa (props ponto alguma coisa) 