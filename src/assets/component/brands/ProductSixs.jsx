import { Link } from "react-router-dom";


const ProductSixs = ({ RedBulles }) => {
    const { photo, product, price, description, rating ,_id } = RedBulles;
    return (
        <div>
            <div className="card w-96 h-[600px] bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{product}</h2>
                    <h2> Price:${price}</h2>
                    <h3> Rating:{rating}</h3>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/redbull/${_id}`}><div className="btn">See All</div></Link>
                        <div className="btn">Update</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductSixs;