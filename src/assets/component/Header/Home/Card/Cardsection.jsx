
import { Link } from "react-router-dom";


const Cardsection = ({ Brands }) => {
    const { photo, product,price,description,rating,_id } = Brands;
   


    return (
        
            <div  className="card w-96 bg-base-100 shadow-xl">
                {/* <Link to={`/Brands/${_id}`}> */}

                <figure className="px-10 pt-10">
                <img src={photo} alt="Brands" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{product}</h2>
                
                
            </div>
                {/* </Link> */}

            
            
            
        </div>
       
    );
};

export default Cardsection;