import React from 'react'

function Paginate({ totalPage = 1, currentPage = 1, callback }) {
  const pageActive = 'bg-blue-400'
  const pageDefault = 'bg-gray-400'
  const defaultNumPageClass = ' cursor-pointer select-none rounded-full w-6 h-6 flex items-center justify-center m-2'
  const numPaging = 3

  const handlerClick = (page) => {
    if (typeof callback === 'function') {
      callback(page)
    }
  }

  return (
    <div className="flex">
      {(() => {
        let array = []
        if (currentPage > 1) {
          array.push(
            <div
              key={currentPage + '-'}
              className="cursor-pointer select-none w-6 h-6 flex items-center justify-center m-2"
              onClick={() => handlerClick(currentPage - 1)}
            >
              <p>&lt;&lt;</p>
            </div>
          )
        }
        if (totalPage <= (numPaging * 2 + 1)) {
          for (let index = 1; index <= totalPage; index++) {
            array.push(
              <div
                key={index}
                className={`${index === currentPage ? pageActive : pageDefault} ${defaultNumPageClass}`}
                onClick={() => handlerClick(index)}
              >
                <p className="text-white">{index}</p>
              </div>
            )
          }
        } else {
          let start = 1
          let end = (numPaging * 2 + 1)
          if (currentPage > numPaging) {
            start = currentPage - numPaging
            end = currentPage + numPaging
          }
          if ((currentPage + numPaging) > totalPage) {
            start = totalPage - numPaging * 2
            end = totalPage
          }
          array.push(
            <div
              key={1}
              className={`${1 === currentPage ? pageActive : pageDefault} ${defaultNumPageClass}`}
              onClick={() => handlerClick(1)}
            >
              <p className="text-white">{1}</p>
            </div>
          )
          if ((currentPage - numPaging) > 2) {
            array.push(
              <div key="blank_<<" className="w-6 h-6 select-none flex items-center justify-center m-2">
                <p>...</p>
              </div>
            )
          }
          for (let index = start; index <= end; index++) {
            if (index === totalPage || index === 1) {
              continue
            }
            array.push(
              <div
                key={index}
                className={`${index === currentPage ? pageActive : pageDefault} ${defaultNumPageClass}`}
                onClick={() => handlerClick(index)}
              >
                <p className="text-white">{index}</p>
              </div>
            )
          }
          if ((currentPage + numPaging) < (totalPage - 1)) {
            array.push(
              <div key="blank_>" className="w-6 h-6 flex select-none items-center justify-center m-2">
                <p>...</p>
              </div>
            )
          }
          array.push(
            <div
              key={totalPage}
              className={`${totalPage === currentPage ? pageActive : pageDefault} ${defaultNumPageClass}`}
              onClick={() => handlerClick(totalPage)}
            >
              <p className="text-white">{totalPage}</p>
            </div>
          )
        }
        if (currentPage < totalPage) {
          array.push(
            <div
              key={currentPage + '+'}
              className="cursor-pointer w-6 h-6 flex select-none items-center justify-center m-2"
              onClick={() => handlerClick(currentPage + 1)}
            >
              <p>&gt;&gt;</p>
            </div>
          )
        }
        return array
      })()}
    </div>
  )
}

export default Paginate
