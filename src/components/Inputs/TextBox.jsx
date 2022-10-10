function TextBox({ title, value, placeholder, onChange }) {
  return (
    <div className="flex item-center justify-start my-5">
      <p className="mr-5 w-[25%]">{title ? title : ''}</p>
      <div className=" w-80 ">
        <input
          className="w-full border-gray-600 border-2 rounded-lg px-2"
          type="text"
          value={value ? value : ''}
          placeholder={placeholder ? placeholder : ''}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  )
}

export default TextBox
