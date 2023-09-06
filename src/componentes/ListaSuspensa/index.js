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


// {props.itens.map(item => <option key={item}>{item}</option>)}  
// {props.itens.map(item => <option>{item}</option>)}
// {props.itens.map(item => {return<option>{item}</option>})}
// São a mesma coisa, mas de forma diferente de escrever, no segundo vc consegue ver o 
// returna opção item a ser escolhido de forma mais intuitiva qua no de cima
// mas, depois que vc entende vc passa a ver, opção retorna item  

//  key={item} -> isso aqui é a key/chave para a renderização funcionar bem, adicionei 
//  ao lado do option

// escolhi a mais tradicional, apagar a outra 




