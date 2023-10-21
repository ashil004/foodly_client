import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const Ptwo = () => {
    const mirinda = useLoaderData();
    console.log(mirinda);
    const { id } = useParams();
    const [add ,setAdd] =useState( null);
    useEffect( ()=>{ 
        const ea = mirinda.find(ea => ea._id === id)
        
        setAdd(ea);
    },[mirinda,id]);
    console.log(add);
    return (
        <div>
            <h3> the length:{
                add.length
            }</h3>
        </div>
    );
};

export default Ptwo;