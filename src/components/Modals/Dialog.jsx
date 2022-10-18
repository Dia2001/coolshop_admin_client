import Portal from '../../portal'

function Dialog({
  title,
  actionName,
  handler,
  isOpen,
  setIsOpen,
  children }) {

  const handlerClick = (status) => {
    setIsOpen(false)
    if (typeof handler === 'function') {
      handler(status)
    }
  }
  if (isOpen) {
    return (
      <Portal>
        <div className="bg-black/20 fixed top-0 left-0 right-0 bottom-0">
          <div className="position absolute -translate-x-1/2 -translate-y-[80%] top-1/2 left-1/2">
            <div className='bg-white'>
              <div>
                <div className="w-full h-8 flex items-center justify-between bg-gray-500" >
                  <p className="text-white px-2 py-1">{title ? title : ''}</p>
                  <button
                    className="w-6 h-6 rounded font-bold mr-1 text-white bg-red-400 hover:opacity-60"
                    onClick={() => handlerClick(false)}>x</button>
                </div>
              </div>
              {children ? children : ''}
              <div className="w-full h-14 text-center">
                <button
                  className="rounded bg-blue-400 hover:opacity-60 px-5 text-white py-2 mr-2"
                  onClick={() => handlerClick(true)}>{actionName ? actionName : 'Xác nhận'}</button>
                <button
                  className="rounded bg-gray-300 hover:opacity-60 px-2 py-2 w-20 ml-2"
                  onClick={() => handlerClick(false)}>Hủy</button>
              </div>
            </div>
          </div>
        </div>
      </Portal>
    )
  } else {
    return null
  }
}

export default Dialog

