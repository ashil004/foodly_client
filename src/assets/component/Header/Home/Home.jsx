import Bannar from "./Bannar/Bannar";
import Cardsection from "./Card/Cardsection";
import SectionOne from "./section1/SectionOne";


const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <SectionOne></SectionOne>
            <div className="mt-6">
                <h3 className="font-semibold text-teal-400 text-center">Best For You</h3>
                <h3 className="font-bold text-5xl text-center">Our Beverage</h3>
                
                <Cardsection></Cardsection>
            </div>
            hello home
        </div>
    );
};

export default Home;