

const Item = ( {product} ) => {
  return (
    <div className="card">
      <img src={product.img} alt="" className="card-img-top" />
      <div className="card-body">
        
        <h4 className="fw-semibold text-white">{product.name}</h4>
        <p className="text-white">$ {product.price}</p>
        <p className="text-white">Categoria: {product.category}</p>
        <button className="btn btn-primary">Más detalles</button>
      </div>

    </div>
  )
}

export default Item

