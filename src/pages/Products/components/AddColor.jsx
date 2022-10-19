import { useEffect, useState } from "react"
import { CheckList } from "../../../components/Inputs"

function AddColor({ colors, setColorIds }) {

  const [colorIds, setColorIds_] = useState([])

  useEffect(() => {
    setColorIds(colorIds)
  }, [colorIds, setColorIds])

  return (
    <div className="px-2">
      <CheckList title="Sizes" values={colorIds} setValues={setColorIds_}
        options={colors} keyValueOption="colorId" keyTitleOption="name" isWrap={true} />

    </div>
  )
}

export default AddColor
