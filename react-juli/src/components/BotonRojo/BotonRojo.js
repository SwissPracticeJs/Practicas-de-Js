
function Boton(props){
    const { fondo, texto } = props

    return(
        <button style={{ color:'white', backgroundColor: fondo }} >
            {texto}
        </button>
    )
}

export default Boton 