import { useEffect, useState } from "react"
import { CheckList } from "../../../components/Inputs"

function AddSize({ sizes, setSizeIds }) {

  const [sizeIds, setSizeIds_] = useState([])

  useEffect(() => {
    setSizeIds(sizeIds)
  }, [sizeIds, setSizeIds])

  return (
    <div className="px-2">
      <CheckList title="Sizes" values={sizeIds} setValues={setSizeIds_}
        options={sizes} keyValueOption="sizeId" keyTitleOption="name" isWrap={true} />

    </div>
  )
}

export default AddSize
