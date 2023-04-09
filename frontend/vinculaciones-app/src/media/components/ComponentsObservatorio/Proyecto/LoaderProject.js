import './loaderproject.css'

function BasicExample() {
    return (
        <div className='overlay'>
            <div className="text text-loader">Cargando Proyectos</div>
            <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

    );
}

export default BasicExample;