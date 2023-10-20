

const ProductCard = ({productnames}) => {
    const { photo, product,price,description,rating, }  = productnames;
    return (
        <div>
             <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{product}</h2>
                    <h2> price:${ price}</h2>
                    <p>{ description}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;