import { CheckList } from "../../../components/Inputs"

function AddColor({ colors, colorIds, setColorIds }) {

  return (
    <div className="px-2">
      <CheckList title="Sizes" values={colorIds} setValues={setColorIds}
        options={colors} keyValueOption="colorId" keyTitleOption="name" isWrap={true} />

    </div>
  )
}

export default AddColor
