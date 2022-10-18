import { CheckList } from "../../../components/Inputs"

function AddCategory({ categories, categoryIds, setCategoryIds }) {

  return (
    <div className="px-2 pb-5">
      <CheckList title="Danh mục" values={categoryIds} setValues={setCategoryIds}
        options={categories} keyValueOption="categoryId" keyTitleOption="name" isWrap={true} />

    </div>
  )
}

export default AddCategory
