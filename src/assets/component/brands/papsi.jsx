import { useLoaderData } from "react-router-dom";
import ProductSixs from "./ProductSixs";

const Papsi = () => {
    const Papsies = useLoaderData();

    return (
        <div>
            <div className="grid md:grid-cols-2 gap-4 max-w-7xl mx-auto">
                {
                    Papsies .map(Papsie => <ProductSixs Papsie key={Papsies._id} Papsies={Papsie} ></ProductSixs>)
                }
            </div>
            
        </div>
    );
};

export default Papsi;