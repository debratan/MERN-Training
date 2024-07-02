import './ProductCard.css'

function ProductCard({name,price,imageurl,description}){
    return(
        <div>
            <div className="productdiv">
                <img src={imageurl} alt={name} />
                <div className="details">
                    <h2 className="name">{name}</h2>
                    <p className="price">{price}</p>
                    <p className="description">{description}</p>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;