import { useEffect, useState } from "react"

function ToggleButtonBar({ options, dispath }) {

  const [selected, setSelected] = useState()

  useEffect(() => {
    setSelected(options[0].key)
  }, [])

  const handleSelect = (key) => {
    if (key === selected) {
      return
    }

    setSelected(key)
    if (typeof dispath === 'function') {
      dispath(key)
    }
  }

  return (
    <div>
      {options.map((item, index) => {
        return (
          <button key={index}
            onClick={() => handleSelect(item.key)}
            className={`border ${item.key === selected ? 'cursor-default bg-gray-300 border-gray-400' : 'bg-gray-200 hover:opacity-60'} px-2 py-1`}>
            {item.name}
          </button>
        )
      })}
    </div>
  )
}

export default ToggleButtonBar
