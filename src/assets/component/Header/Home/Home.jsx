
import { useLoaderData } from "react-router-dom";
import Bannar from "./Bannar/Bannar";

import SectionOne from "./section1/SectionOne";
import SectionTow from "./section2/SectionTow";
import Cardsection from "./Card/Cardsection";


const Home = () => {
    const Brands = useLoaderData();
    
    return (
        <div>
            <Bannar></Bannar>
            <SectionOne></SectionOne>
            <div className="mt-6">
                <h3 className="font-semibold text-teal-400 text-center">Best For You</h3>
                <h3 className="font-bold text-5xl text-center">Our Beverage</h3>
               
               <div >
               
                <Cardsection > </Cardsection>
             
                    
                </div>
            </div>
            <div className="mt-6">
                <h3 className="font-semibold text-teal-400 text-center">Testimonial</h3>
                <h3 className="font-bold text-5xl text-center">What People Say</h3>
                <SectionTow></SectionTow>
            </div>
            
        </div>
    );
};

export default Home;