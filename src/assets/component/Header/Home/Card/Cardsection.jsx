import { Link } from "react-router-dom";

const Cardsection = () => {

    return (
        <div className="grid md:grid-cols-3 gap-4">
             <div  className="card w-96 h-96 bg-base-100 shadow-xl">
                
                <Link to ='/cocola' >

                <figure className="px-10 pt-10">
                <img src="https://i.ibb.co/QCQzg44/download.png" alt="Brands" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Cocalola</h2>
                
                
            </div>
            </Link>
         
        </div>

        <div  className="card w-96 h-96 bg-base-100 shadow-xl">
                
                <Link to ='/coffce' >

                <figure className="px-10 pt-10">
                <img src="https://i.ibb.co/6typ9fb/1-brewingupagl.jpg" alt="Brands" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Start Bulcks</h2>
                
                
            </div>
            </Link>
         
        </div>
        <div  className="card w-96 h-96 bg-base-100 shadow-xl">
                
                <Link to ='/fanta' >

                <figure className="px-10 pt-10">
                <img src="https://i.ibb.co/VC4tjMr/Fanta-logo-2009-svg.png" alt="Brands" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Fanta</h2>
                
                
            </div>
            </Link>
         
        </div>
        <div  className="card w-96 h-96 bg-base-100 shadow-xl">
                
                <Link to ='/mrinda' >

                <figure className="px-10 pt-10">
                <img src="https://i.ibb.co/BPSvWLd/mira003-mirinda-logo.png" alt="Brands" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Mrinda</h2>
                
                
            </div>
            </Link>
         
        </div>
        <div  className="card w-96 h-96 bg-base-100 shadow-xl">
                
                <Link to ='/papsi' >

                <figure className="px-10 pt-10">
                <img src="https://i.ibb.co/JRkG7WF/Pepsilogo02-201310210104514411-20180524105721574.jpg" alt="Brands" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Papsi</h2>
                
                
            </div>
            </Link>
         
        </div>
        <div  className="card w-96 h-96 bg-base-100 shadow-xl">
                
                <Link to ='/redbull' >

                <figure className="px-10 pt-10">
                <img src="https://i.ibb.co/xStFLVz/644fb7a661d1ce17a38bd400-20230501-T1259-57190a1e-49cf-459a-a818-f63afa0b1755.jpg" alt="Brands" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Red Bull </h2>
                
                
            </div>
            </Link>
         
        </div>
        </div>
    );
};

export default Cardsection;
