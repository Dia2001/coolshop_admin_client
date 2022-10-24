import config from "../../../config"

function ImageList({ images, onClickDelete }) {

  const handleClickDelete = (productId) => {
    if (typeof onClickDelete === 'function') {
      onClickDelete(productId)
    }
  }
  return (
    <div className="flex flex-wrap">
      {images ? images.map((image, index) => {
        const thumbnail = config.urlImageProduct + image.thumbnail
        return <div key={index} className="m-2 border relative">
          <img className="w-28 h-28 object-cover"
            src={thumbnail} alt="Ảnh sản phẩm">
          </img>
          <button
            onClick={() => handleClickDelete(image.galleryId)}
            className="bg-ErrorColor text-white px-1 rounded-md hover:opacity-70 absolute top-0 right-0">
            Xóa
          </button>
        </div>
      }) : ''}
    </div>
  )
}

export default ImageList
