import React from 'react'
import ReactPaginate from 'react-paginate';
import { FaAngleLeft,FaChevronRight } from "react-icons/fa6";


function PaginationButtons() {
    const paginationVarinats = {
        hidden:{
            opacity:0,
            y:100
        },
        visble:{
            opacity:1,
        y:0        }
    }

    return (
        <div>
            <ReactPaginate
                breakLabel={
                    <span className='mr-4'>...</span>
                }
                nextLabel={
                    <span className='w-10 h-10 flex items-center justify-center bg-gray-300 rounded-md ml-4 '><FaChevronRight/></span>
                }
                // onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={100}
                previousLabel={
                    <span className='w-10 h-10 flex items-center justify-center bg-gray-300 rounded-md mr-4'><FaAngleLeft/></span>
                }
                renderOnZeroPageCount={null}
                containerClassName='flex items-center justify-center mt-8 mb-4'
                pageClassName='block border-soild border-gray-400 w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-200'
                activeClassName='bg-purple-700 text-white'
            />
        </div>
    )
}

export default PaginationButtons
