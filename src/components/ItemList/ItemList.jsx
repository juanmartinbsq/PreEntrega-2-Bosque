import Item from "../Item/Item"

const ItemList = ( {products} ) => {
  return (
    <div>
        <h2 className="text-white fw-bold">Productos!</h2>

        <div className="d-flex p-2">
            {products.map((prod) => <Item product={prod}/> )}
        </div>
    </div>
  )
}

export default ItemList