import React, { useContext } from 'react';
import { Pagination } from 'react-bootstrap';
import { productContext } from '../context/MyProvider';

const MyPagination = () => {
    const {totalCount, postsPerPage, setCurrentPage, currentPage} = useContext(productContext)
    const pageNumbers = []
    for(let i = 1; i<= Math.ceil(totalCount/postsPerPage); i++){
        pageNumbers.push(i)
    }
    return (
        <div style={{display:'flex', justifyContent: 'center'}}>
            <Pagination>
                <Pagination.Prev disabled={currentPage === 1} onClick={()=>{
                    setCurrentPage(currentPage - 1)
                    window.scroll(0,0)
                }}/>
                {pageNumbers.map((item)=>(
                    <Pagination.Item onClick={()=> {
                        setCurrentPage(item)
                        window.scroll(0,0)
                    }}
                    key={item}
                    active={currentPage === item}
                    >
                        {item}
                </Pagination.Item>
                ))}
                    
                <Pagination.Next disabled={Math.ceil(totalCount/postsPerPage) === currentPage} onClick={()=>{
                    setCurrentPage(currentPage + 1)
                    window.scroll(0,0)
                }}/>
            </Pagination>
        </div>
    );
};

export default MyPagination;