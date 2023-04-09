import './loaderproject.css'

function BasicExample() {
    return (
        <div className='overlay-2'>
            <div className="text text-loader">Cargando Proyectos</div>
            <div className="lds-roller-2">
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