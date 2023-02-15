
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Container from 'react-bootstrap/Container';
import Axios from 'axios'
import ProyectoCard from '../ProyectoCard/ProyectoCard';
import '../Proyecto/proyecto.css'


function ProyectosPublicados () {

  const [proyectos, setProyectos] = useState([])
  const [currentItems,setCurrentItems]=useState([])
  const [pageCount,setPageCount]=useState(0)
  const [itemOffset,setItemOffset]=useState(0)
  const itemsPerPage=2
  
    useEffect(()=>{
     

         const getData = async () =>{
                 await Axios.get('http://127.0.0.1:8000/api/proyects?to=5').then((response)=>{
                   /*  http://127.0.0.1:8000/api/proyects?page=1&to=10 */
                    setProyectos([...response.data.data])    
                }) 
                .catch((error)=> {
                    console.log(error.messages);
                })     
           const endOffset = itemOffset + itemsPerPage;
           setCurrentItems( proyectos.slice(itemOffset, endOffset));
           setPageCount( Math.ceil(proyectos.length / itemsPerPage));
          
         }
    getData();      
    },[itemOffset,itemsPerPage,proyectos])

        const handlePageClick = (event) => {
          const newOffset = (event.selected * itemsPerPage) % proyectos.length;
          setItemOffset(newOffset);
        };

    return(
        <>
            <Container>
                  <h1 className='encabezado-2 mb-5'>Catalogo de Proyectos de Inovacion</h1>
                  <Container className="proyecto">
                        
                        
                          {currentItems.map((currentItems) => {
                            
                              return(<ProyectoCard key={currentItems.id} proyecto={currentItems} ></ProyectoCard>)
                          })}  
                  </Container>
            </Container>   
                         
                <ReactPaginate
                        breakLabel="..."
                        nextLabel="siguiente >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel="< previo"
                        renderOnZeroPageCount={null}
                  />
        </>
    );

  


}







 export default ProyectosPublicados