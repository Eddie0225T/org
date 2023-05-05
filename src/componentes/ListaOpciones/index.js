import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    // Método Map -> arreglo.map( (equipo, index) => {
    //    return <option></option>
    //})

    const manejarCambio = (e) =>{
        console.log("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    return <div className = "lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}> 
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>)}
        </select>
    </div>
}

// Opción #1 para recorrer arreglos en JS:
//{ equipos.map((equipo, index) => {
//    return <option key={index}>{equipo}</option>
//}) }

// Opción #2 para recorrer arreglos en JS, en una sola línea:
// {equipos.map((equipo, index) => <option key={index}>{equipo}</option>)}


export default ListaOpciones