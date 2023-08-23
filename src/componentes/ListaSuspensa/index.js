import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className="lista-suspensa">
            <label>
                {props.label}
            </label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.value}>
                {props.itens?.map(item => {
                    return <option key={item}>{item}</option>
                })} 
            </select>
        </div>
    )
}

export default ListaSuspensa;

// {props.itens.map(item => <option>{item}</option>)} , siginifica: pra cada item 
// retorne uma option

// map usa muito 