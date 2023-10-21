import { useLoaderData } from "react-router-dom";
import ProductThrees from "./ProductThrees";


const Fanta = () => {
    const Fantaes = useLoaderData();
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-4 max-w-7xl mx-auto">
                {
                    Fantaes.map(Fantae => <ProductThrees Fantae key={Fantaes._id} Fantaes={Fantae}></ProductThrees>)
                }
            </div>
            
        </div>
    );
};

export default Fanta;