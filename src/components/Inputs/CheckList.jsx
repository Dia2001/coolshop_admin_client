function CheckList({ title, values, setValues, options, keyValueOption, keyTitleOption, isWrap }) {

  const handleCheck = (value) => {
    if (values.includes(value)) {
      setValues(prev => prev.reduce((curr, item) => {
        if (item !== value) {
          curr.push(item)
        }
        return curr
      }, []))
    } else {
      setValues(prev => [...prev, value])
    }
  }
  return (

    <div className="flex item-center mt-5">
      <p className="mr-5 w-14">{title}</p>
      <div className={`max-h-52 overflow-y-auto mr-5 ${isWrap ? 'flex flex-wrap' : ''}`}>
        {options.map((item, index) => {
          return (
            <div className="flex h-6 mr-5" key={index}>
              <input onChange={() => handleCheck(item[keyValueOption])}
                checked={values.includes(item[keyValueOption])}
                type="checkbox"
              />
              <p className='ml-2'>{item[keyTitleOption]}</p>
            </div>)
        })}
      </div>
    </div>
  )
}

export default CheckList
