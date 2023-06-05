

const Item = ( {product} ) => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={product.img} alt={product.name} className="card-img-top"/>
      </div>
      <div className="card-body">
        <h4 className="card-title">{product.name} </h4>
        <p className="card-text text-secondary">Categoria: {product.category}</p>
        <p className="card-text">$ {product.price}</p>
        <button className="btn btn-outline-secondary border-0">Más detalles</button>
      </div>

    </div>




    // <div className="card">
    //   <img src={product.img} alt="" className="card-img-top" />
    //   <div className="card-body">
        
    //     <h4 className="fw-semibold text-white">{product.name}</h4>
    //     <p className="text-white">$ {product.price}</p>
    //     <p className="text-white">Categoria: {product.category}</p>
    //     <button className="btn btn-primary">Más detalles</button>
    //   </div>

    // </div>
  )
}

export default Item

