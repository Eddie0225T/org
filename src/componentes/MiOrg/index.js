import "./MiOrg.css"
import { useState } from "react"

const MiOrg = (props) => {
    //Estado - hooks
    //useState
    //useState()
    //const [nombreVariable, funcionActualiza] = useState(valorInicial)

    /* const [mostrar, actualizarMostrar] = useState(true)
    const manejarClick = () => {
        console.log("Mostrar/Ocultar elemento", !mostrar)
        actualizarMostrar(!mostrar)
    } */

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/btn.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg