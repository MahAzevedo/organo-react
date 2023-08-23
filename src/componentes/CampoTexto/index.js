import { useState } from "react"
import "./CampoTexto.css"

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...`

    //let valor = 'Mádjan'

    const = useState('')

    const aoDigitado = (evento) => {
        valor = evento.target.value
        console.log(valor)
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada} />
        </div>
    )
}

export default CampoTexto;