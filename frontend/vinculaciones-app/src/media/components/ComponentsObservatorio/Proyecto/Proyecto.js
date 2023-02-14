
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Container from 'react-bootstrap/Container';
import Axios from 'axios'
import ProyectoCard from '../ProyectoCard/ProyectoCard';
import '../Proyecto/proyecto.css'


function ProyectosPublicados () {
const [proyectos, setProyectos] = useState([])
const [paginationData,setPaginationData]=useState([])
/* const [currentPage,setCurrentPage]=useState([]) 
const [postPerPage,setpostPerPage]=useState([]) */

const [itemOffset, setItemOffset] = useState(0);
const endOffset = itemOffset + itemsPerPage;
console.log(`Loading items from ${itemOffset} to ${endOffset}`);
const currentItems = items.slice(itemOffset, endOffset);
const pageCount = Math.ceil(items.length / itemsPerPage);


    useEffect(()=>{
         const getData = async () =>{
                 await Axios.get('http://127.0.0.1:8000/api/proyects').then((response)=>{
                   /*  http://127.0.0.1:8000/api/proyects?page=1&to=10 */
                    setProyectos([...response.data.data])
                    setPaginationData([response.data])
                    
                }) 
                .catch((error)=> {
                    console.log(error.messages);
                })     
         }
    getData();      
    },[])
    
    console.log('Response---',paginationData)
    return(
        <>
            <Container>
                <h1 className='encabezado-2 mb-5'>Catalogo de Proyectos de Inovacion</h1>
                <Container className="proyecto">
                       
                         {proyectos.map((proyecto) => {
                           
                            return(<ProyectoCard key={proyecto.id} proyecto={proyecto} ></ProyectoCard>)
                        })}  
                </Container>
                
                <Items currentItems={currentItems} />
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                />
            </Container>   


        </>
    );

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };


}







 export default ProyectosPublicados