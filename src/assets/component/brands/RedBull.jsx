import { useLoaderData } from "react-router-dom";
import ProductFives from "./ProductFives";


const RedBull = () => {
    const RedBulles = useLoaderData();
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-4 max-w-7xl mx-auto">
                {
                    RedBulles.map( RedBulle =><ProductFives RedBulle key={RedBulles._id} RedBulles={RedBulle} ></ProductFives>)
                }
            </div>
        </div>
    );
};

export default RedBull;