import { useRef, useState } from "react"
import { MdOutlineAdd } from "react-icons/md"

function ImagesDrag({ files, setFiles, options }) {
  const filesRef = useRef()
  const [srcs, setSrcs] = useState([])
  const width = ((options && options.width) ? options.width : '200') + 'px'
  const height = ((options && options.height) ? options.height : '200') + 'px'

  const handleClickFiles = () => {
    filesRef.current.click()
  }

  const onSelectFiles = (filesTmp) => {
    if (filesTmp) {
      let srcsTmp = []
      for (let file of filesTmp) {
        srcsTmp.push(URL.createObjectURL(file))
      }
      setSrcs(prev => [...prev, ...srcsTmp])
      if (typeof setFiles === 'function') {
        let arrFile = []
        if (Array.isArray(files)) {
          arrFile = [...filesTmp]
        }
        setFiles(prev => [...prev, ...arrFile])
      }
    }
  }

  return (
    <div className="flex item-center justify-start my-5 mx-5">
      <input type="file" ref={filesRef} hidden multiple
        onChange={(e) => onSelectFiles(e.target.files)} />
      <div
        style={{ width, height }}
        className={`border cursor-pointer relative text-center border-x-2 border-y-2 border-gray-500`}>

        {srcs.length > 0 ? <div className="absolute w-full h-full flex flex-wrap overflow-y-auto">
          {srcs.map((src, index) => {
            return <img key={index} className="w-[99px] h-[99px] border object-cover" src={src} alt="" />
          })}
          <button className="w-[99px] h-[99px] flex items-center justify-center border"
            onClick={handleClickFiles}>
            <MdOutlineAdd className="text-4xl" />
          </button>
        </div>
          :
          <div className="w-full h-full absolute"
            onClick={handleClickFiles}>
            <p className="mt-14">Thả ảnh hoặc nhấn vào đây</p>
            <button className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <MdOutlineAdd className="text-4xl" />
            </button>
          </div>
        }
      </div>
    </div>
  )
}

export default ImagesDrag
