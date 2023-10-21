import { useLoaderData } from "react-router-dom";
import ProductOnes from "./ProductOnes";

const Cocola = () => {

    const ProductsOne = useLoaderData();
    return (
        <div>
            
            <div className="grid md:grid-cols-2 gap-4 max-w-7xl mx-auto">
            {
                ProductsOne.map(Product => <ProductOnes Product key={ProductsOne._id} ProductsOne ={Product}></ProductOnes>)
            }
            </div>
           


        </div>
    );
};

export default Cocola;