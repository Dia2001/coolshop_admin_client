function TextArea({ title, value, onChange }) {
  return (
    <div className="flex item-center justify-start my-5">
      <p className="mr-5 w-[25%]">{title}</p>
      <div className=" w-80 ">
        <textarea
          className="w-full border-gray-600 border-2 rounded-lg px-2"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >{value}</textarea>
      </div>
    </div>
  )
}

export default TextArea
