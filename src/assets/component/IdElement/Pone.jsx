import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const Pone = () => {
    const eax = useLoaderData();
    const { id } = useParams();

    const ea = eax.find(ea => ea._id === id)
    console.log(ea);
    return (
        <div>

            <img className="mx-auto pt-16 flex justify-center items-center w-[650px] " src={ea.photo
            }></img>
           <div className=" ml-8 pt-10">
           <h3 className="text-3xl font-bold">{ea.product}</h3>
            <p>{ea.description
            }</p>

           </div>





        </div>
    );
};

export default Pone;