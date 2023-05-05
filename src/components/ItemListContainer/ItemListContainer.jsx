import './itemlistcontainer.css';

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <h1 className="greeting p-3">{greeting}</h1>
        </div>
    )
}

export default ItemListContainer;