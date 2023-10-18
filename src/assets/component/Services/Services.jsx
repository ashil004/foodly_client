const Services = () => {

    const box = event => {
        event.preventDefault();
        const from = event.target;
        const p =from.photo.value;
        const pn =from.product.value;
        const price = from.price.value;
        const des =from.description.value;
        const reting =from.rating.value;
        const productObject ={p,pn,price,des,reting};
        console.log(productObject);
        
        //send the data 
         
      
       

    }
    return (
        <div className="bg-teal-100 p-24">
            <h2 className="font-extrabold">Add to the User Order:</h2>
            <form onSubmit={box}>
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Photo url</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="photo" placeholder="Enter your photo url " className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="product" placeholder="Enter your Product Name  " className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className=" md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Type of Product</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="type" placeholder="Product of type " className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="price" placeholder="Enter your product price  " className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className=" md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Enter Product Description</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="description" placeholder="Enter your product description  " className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="rating" placeholder="Enter your Rating " className="input input-bordered w-full" />
                        </label>
                    </div>
                    
                </div>
                
                <input className="btn btn-block mt-2 bg-teal-400 text-sky-600" type="submit" value="Add Product" />
            </form>

        </div>
        
    );
};

export default Services;

