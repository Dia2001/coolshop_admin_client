import Portal from '../../portal'

function Confirm({
  title = 'Xác nhận',
  message = 'Bạn có muốn thực hiện hành động này',
  handler,
  isOpen = true
}) {
  const handlerClick = (status) => {
    if (typeof handler === 'function') {
      handler(status)
    }
  }

  if (isOpen) {
    return (
      <Portal>
        <div className="bg-black/20 fixed top-0 left-0 right-0 bottom-0">
          <div
            className="fixed z-50 left-auto bg-gray-100 w-96 h-52"
            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -80%)' }}>
            <div className="w-full h-8 flex items-center justify-between bg-gray-500" >
              <p className="text-white px-2 py-1">{title}</p>
              <button
                className="w-6 h-6 rounded font-bold mr-1 text-white bg-red-400 hover:opacity-60"
                onClick={() => handlerClick(false)}>x</button>
            </div>
            <div className="px-5 w-full h-32 flex items-center justify-center">
              {message}
            </div>
            <div className="w-full h-14 text-center">
              <button
                className="rounded bg-blue-400 hover:opacity-60 px-5 text-white py-2 mr-2"
                onClick={() => handlerClick(true)}>Xác nhận</button>
              <button
                className="rounded bg-gray-300 hover:opacity-60 px-2 py-2 w-20 ml-2"
                onClick={() => handlerClick(false)}>Hủy</button>
            </div>
          </div>
        </div>
      </Portal>
    )
  } else {
    return null
  }
}

export default Confirm
