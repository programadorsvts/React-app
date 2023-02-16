
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Axios from 'axios'
import Container from 'react-bootstrap/Container';
import ProyectoCard from '../ProyectoCard/ProyectoCard';

import "./proyecto.css"

function MisProyectos () {

  const [proyectos, setProyectos] = useState([]) //Proyectos del backend variable llamada 'proyectos'
  const [currentItems,setCurrentItems]=useState([]) //La cantidad de items que se asigna para poder ser mapeados luego 'currentItems'
  const [pageCount,setPageCount]=useState(0) //Contador de la cantidad de paginas  que se tiene que utilizar 
  const [itemOffset,setItemOffset]=useState(0) // Contador de items fuera de la pagina 
  const itemsPerPage=4 //Cantidad de  items a mostrar por pagina 
  const endOffset = itemOffset + itemsPerPage; //Indiex final de la paginacion 

    useEffect(()=>{
         const getData = async () =>{
                 await Axios.get('http://127.0.0.1:8000/api/proyects?to=5').then((response)=>{
                   /*  http://127.0.0.1:8000/api/proyects?page=1&to=5 */
                    setProyectos([...response.data.data])  
                    console.log('-----Response---',response.data)   
                }) 
                .catch((error)=> {
                    console.log(error.messages);
                })     
           setCurrentItems(proyectos.slice(itemOffset, endOffset));
           setPageCount( Math.ceil(proyectos.length / itemsPerPage));
         }
      getData();      
    },[endOffset,itemOffset,itemsPerPage,proyectos]);

      const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % proyectos.length;
        setItemOffset(newOffset);
      };
    

    return(
        <>
        <Container>
            <h1 className='encabezado-2 my-5'>Proyectos publicados por mi</h1>
            <Container className="proyecto">
                            {currentItems.map((currentItems) => {
                                
                                return(<ProyectoCard key={currentItems.id} proyecto={currentItems} ></ProyectoCard>)
                            })}  
            </Container>
            <ReactPaginate  className='pagination d-flex justify-content-center mt-5 encabezado-4'
                          breakLabel="..."
                          nextLabel="siguiente >"
                          onPageChange={handlePageClick}
                          pageRangeDisplayed={5}
                          pageCount={pageCount}
                          previousLabel="< previo"
                          renderOnZeroPageCount={null}
                    />
        </Container>   
        </>
    );
}

 export default MisProyectos