import { useState } from 'react'
import { MdClose } from 'react-icons/md'
import { Confirm } from '../Modals'

function TagEdit({ title, onClickRemove, confirm, message, ...props }) {

  const [isOpenConfirm, setIsOpenConfirm] = useState(false)
  const [messageConfirm, setMessageConfirm] = useState('')
  const [callbackConfirm, setCallbackConfirm] = useState()

  const handleClickRemove = () => {
    if (confirm) {
      setMessageConfirm(message ? message : '')
      setCallbackConfirm(() => handleConfirm)
      setIsOpenConfirm(true)
    } else {
      onClickRemove()
    }
  }

  const handleConfirm = (status) => {
    setIsOpenConfirm(false)
    setCallbackConfirm(undefined)
    if (status) {
      onClickRemove()
    }
  }

  return (
    <div {...props}
      className='flex pl-2 my-[2px] ml-1 bg-LightBlue rounded-lg'>
      <p>{title ? title : ''}</p> <button className="hover:opacity-70 p-1"
        onClick={handleClickRemove}>
        <MdClose />
      </button>

      <Confirm
        isOpen={isOpenConfirm}
        message={messageConfirm}
        handler={callbackConfirm} />
    </div>
  )
}

export default TagEdit
