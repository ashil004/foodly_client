import { useLoaderData } from "react-router-dom";
import ProductTwos from "./ProductTwos";


const Coffce = () => {
    const ProductsTwo = useLoaderData();
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-4 max-w-7xl mx-auto">
                {
                    ProductsTwo.map(ProductTwo =><ProductTwos ProductTwo key={ProductsTwo._id} ProductsTwo={ProductTwo}></ProductTwos>)
                }
            </div>
            
        </div>
    );
};

export default Coffce;