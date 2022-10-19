import { useEffect, useState } from "react"
import { CheckList } from "../../../components/Inputs"

function AddCategory({ categories, setCategoryIds }) {

  const [categoryIds, setCategoryIds_] = useState([])

  useEffect(() => {
    setCategoryIds(categoryIds)
  }, [categoryIds, setCategoryIds])

  return (
    <div className="px-2 pb-5">
      <CheckList title="Danh mục" values={categoryIds} setValues={setCategoryIds_}
        options={categories} keyValueOption="categoryId" keyTitleOption="name" isWrap={true} />
    </div>
  )
}

export default AddCategory
