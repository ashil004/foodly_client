import { useLoaderData } from "react-router-dom";
import ProductFours from "./ProductFours";


const Mrinda = () => {
    const Mrindass = useLoaderData();
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-4 max-w-7xl mx-auto">
                {
                    Mrindass.map( Mrindas =><ProductFours Mrindas key={Mrindass._id} Mrindass={Mrindas} ></ProductFours>)
                }
            </div>
        </div>
    );
};

export default Mrinda;