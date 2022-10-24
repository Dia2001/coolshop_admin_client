import { useEffect, useRef, useState } from "react"
import { MdOutlineAdd } from "react-icons/md"

function ImageDrag({ title, file, sourceLink, setFile, options }) {
  const fileRef = useRef()
  const [src, setSrc] = useState()
  const width = (options && options.width) ? options.width : '80'
  const height = (options && options.height) ? options.height : '52'

  useEffect(() => {
    if (sourceLink) {
      setSrc(sourceLink)
    }
  }, [sourceLink])

  const handleClickFile = () => {
    fileRef.current.click()
  }

  const onSelecFile = (files) => {
    const file = files[0]
    if (file) {
      setSrc(URL.createObjectURL(file))
      setFile(file)
    } else {
      setFile(undefined)
    }
  }

  return (
    <div className="flex item-center justify-start my-5">
      <p className="mr-5 w-[25%]">{title}</p>
      <input type="file" ref={fileRef} hidden
        onChange={(e) => onSelecFile(e.target.files)} />
      <div
        onClick={handleClickFile}
        className={`border cursor-pointer w-${width} relative text-center h-${height} border-x-2 border-y-2 border-gray-500`}>

        {file || sourceLink ?
          <img className="w-full h-full absolute object-cover" src={src} alt="" />
          :
          <>
            <p className="mt-14">Thả ảnh hoặc nhấn vào đây</p>
            <button className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <MdOutlineAdd className="text-4xl" />
            </button>
          </>
        }
      </div>
    </div>
  )
}

export default ImageDrag
