import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import ProyectoCard from '../ProyectoCard/ProyectoCard';




function Pagination( props ) {

  const{data}=props;
  const [currentItems,setCurrentItems]=useState(null);
  const[pageCount,setPageCount]=useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage=6;

  useEffect(()=>{
    const endOffset=itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset,endOffset));
    setPageCount(Math.ceil(data.length/itemsPerPage));

  },[ itemOffset,itemsPerPage,data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
        <Container className="proyecto">
          
              {currentItems.map(proyecto => {
                
                      return(
                          <ProyectoCard key={proyecto.id} proyecto={proyecto} ></ProyectoCard>
                      );
              })}
          </Container>   
              
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
 export default Pagination
