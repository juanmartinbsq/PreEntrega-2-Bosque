import Item from "../Item/Item"

const ItemList = ( {products} ) => {
  return (
    <div>
        <h2 className="text-white fw-bold">Productos!</h2>

        <div className="container d-flex justify-content-center h-100">
          <div className="row col-md-4">
          {products.map((prod) => <Item product={prod}/> )}
          </div>
        </div>
    </div>
  )
}

export default ItemList