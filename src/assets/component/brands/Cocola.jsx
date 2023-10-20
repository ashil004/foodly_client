
import { useLoaderData, } from "react-router-dom";
import ProductCard from "./ProductCard";


const Cocola = () => {
    const productsname =useLoaderData();
    console.log(productsname);
   
   
    

    return (
        <div>
            
           {
            productsname.map(productname => <ProductCard to={productname._id} productsname ={productname} ></ProductCard>)
           }



        </div>
    );
};

export default Cocola;