import { CheckList } from "../../../components/Inputs"

function AddSize({ sizes, sizeIds, setSizeIds }) {

  return (
    <div className="px-2">
      <CheckList title="Sizes" values={sizeIds} setValues={setSizeIds}
        options={sizes} keyValueOption="sizeId" keyTitleOption="name" isWrap={true} />

    </div>
  )
}

export default AddSize
