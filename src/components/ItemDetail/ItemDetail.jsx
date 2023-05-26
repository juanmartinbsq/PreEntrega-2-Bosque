
const ItemDetail = ( {prod} ) => {
  return (
    <div>
        <img src={prod.img} alt=""  />
        <h3> hola{prod.title}</h3>
        <p>{prod.category}</p>
        <p>stock: {prod.stock}</p>
    </div>
  )
}

export default ItemDetail