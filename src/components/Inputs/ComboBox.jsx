function ComboBox({ title, value, options, onChange, keyValueOption, keyTitleOption }) {
  return (

    <div className="flex item-center justify-start my-5">
      <p className="mr-5 w-[25%]">{title}</p>
      <select
        className=" w-80 border-gray-600 border-2 rounded-lg px-2"
        onChange={(e) => {
          onChange(e.target.value)
        }}
        value={value ? value : ''}>
        <option value=""></option>
        {options.map((item, index) => {
          return <option key={index} value={item[keyValueOption]}>{item[keyTitleOption]}</option>
        })}
      </select>
    </div>
  )
}

export default ComboBox
