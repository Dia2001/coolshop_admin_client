import { useState } from "react"

function AddQuantity({ key, size, color, quantity, handlerAdd, handlerSub }) {
  const [quantityValue, setQuantityValue] = useState('')

  const handleChangeQuantity = (quantity) => {
    const regexQuantity = /^\d+$|/
    if (regexQuantity.test(quantity)) {
      setQuantityValue(quantity === '' ? '' : Number.parseInt(quantity))
    }
  }

  const handleAddQuantity = () => {
    handlerAdd(size.sizeId, color.colorId, quantityValue)
    setQuantityValue('')
  }

  if (size && color) {
    return (
      <div className="flex flex-wrap" key={key ? key : ''}>
        <div className="flex flex-wrap my-1">
          <p className="mx-1">Size: </p>
          <p className="bg-gray-200 px-1">{size.name}</p>
          <p className="bg-gray-200 px-1">{color.name}</p>
          <p className="mx-1">Color: </p>
          <p className="ml-1 mr-2">Tồn: </p>
          <p className="bg-blue-200 px-1">{quantity}</p>
          <div className="w-[1px] bg-black h-6 mx-1"></div>
        </div>
        <div className="my-1">

          <input placeholder="SL" min={0} value={quantityValue}
            onChange={(e) => handleChangeQuantity(e.target.value)}
            className="border border-black w-16 px-1 mx-2" type="number" />
          <button
            onClick={handleAddQuantity}
            className='disabled:opacity-70 bg-ActiveColor px-2 h-6 rounded-full hover:opacity-70 ml-2'
          >Thêm</button>
          {/*<button
className='disabled:opacity-70 bg-WarningColor px-2 h-6 rounded-full hover:opacity-70 ml-2'
>Bớt</button> */}
        </div>

        <div className="w-full h-[1px] bg-black mb-1"></div>

      </div >
    )
  }
  return
}

export default AddQuantity
