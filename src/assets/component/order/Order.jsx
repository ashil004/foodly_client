import { Link } from "react-router-dom";

const Order = () => {

    return (
        <div className="my-10">
            {/* dive one */}
            <div className="max-w-7xl mx-auto my-10 space-y-5 ">
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/t4MCv5Q/pexels-pixabay-158053.jpg" alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Mango Drinks</h2>
                        <p>Mango drinks are refreshing, tropical beverages bursting with the sweet and tangy essence of ripe mangoes, perfect for quenching your thirst on a hot day. These delightful concoctions are a delightful blend of pureed mangoes, ice, and sometimes a hint of lime, creating a taste of pure summer in a glass.</p>
                        <div className="card-actions justify-end">
                            <Link to="/from"><button className="btn btn-primary">Update</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/wWpgP2r/pexels-lisa-fotios-109275.jpg" alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Mrinda Drinks</h2>
                        <p>Lemon drinks are zesty and invigorating beverages that combine the bright, citrusy flavor of lemons with a touch of sweetness, resulting in a tangy, thirst-quenching delight that can be enjoyed on its own or as a refreshing mixer in various cocktails and mocktails.</p>
                        <div className="card-actions justify-end">
                        <Link to="/from"><button className="btn btn-primary">Update</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/S6C7RMY/pexels-content-pixie-2836945.jpg" alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">coffce</h2>
                        <p>Cold coffee, often known as iced coffee, is a chilled and energizing beverage made from brewed coffee, sweetened to taste, and then cooled with ice. It offers a satisfying coffee kick with a cool, refreshing twist, making it a popular choice during warm weather or as a pick-me-up on a hot day.</p>
                        <div className="card-actions justify-end">
                        <Link to="/from"><button className="btn btn-primary">Update</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/KD7tMsD/pexels-esmihel-muhammad-16444383.jpg" alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Red Bull</h2>
                        <p>Red Bull is a popular energy drink known for its distinctive blue and silver can. It is a carbonated beverage that contains caffeine, taurine, B-vitamins, and sugar, providing a quick energy boost. Red Bull is often consumed to enhance alertness and combat fatigue, making it a common choice for those seeking an energy boost, particularly in the form of a canned beverage.</p>
                        <div className="card-actions justify-end">
                        <Link to="/from"><button className="btn btn-primary">Update</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/qDVd05k/pexels-roman-odintsov-4551975.jpg" alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Fruit Drinks</h2>
                        <p>Fruit drinks are delightful and refreshing beverages made from the natural juices or extracts of various fruits, offering a burst of fruity flavors. These drinks can be found in a wide range of flavors, including apple, orange, grape, and more, and they are often sweetened to enhance their taste. Fruit drinks are a favorite choice for quenching thirst and enjoying the natural goodness of fruits in a convenient liquid form.</p>
                        <div className="card-actions justify-end">
                        <Link to="/from"><button className="btn btn-primary">Update</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/NLmjnPP/pexels-hanbo-wang-4575406.jpg" alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">My Hero Drinks</h2>
                        <p>My Hero Drink" is not a recognized or widely known beverage name. If you have a specific drink in mind or if "My Hero Drink" refers to a personalized or local beverage, please provide more details or context, and I'll do my best to assist you.</p>
                        <div className="card-actions justify-end">
                        <Link to="/from"><button className="btn btn-primary">Update</button></Link>
                        </div>
                    </div>
                </div>
                
            </div>



        </div>
    );
};

export default Order;