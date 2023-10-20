import { useEffect, useState } from "react";


const Cardsection = ({Brands}) => {
    const { product} =Brands
    
    
    return (
        <div>
            <h3>{product}</h3>
        </div>
    );
};

export default Cardsection;