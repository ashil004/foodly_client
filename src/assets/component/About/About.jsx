

const About = () => {
    return (
        <div className="m-16">
            <div className="hero min-h-screen w-full" style={{ backgroundImage: 'url(https://i.ibb.co/N9BQGQ6/pexels-pixabay-265704.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Healthly Smoothie</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                    </div>
                </div>
            </div>

            <div className="hero min-h-screen  mt-32">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/3p9JwMq/pexels-dom-j-303324.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Delightful Sips & Savory Bites Foodliy</h1>
                        <p className="py-6">Welcome to 'Delightful Sips & Savory Bites,' where culinary excellence meets unmatched refreshment. Our establishment is a haven for those who appreciate the art of fine dining and the pleasure of savoring exquisite flavors.</p>

                    </div>
                </div>
            </div>

            <div className="hero min-h-screen mt-32">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/gZ7Xj7V/pexels-ryutaro-tsukata-5220047.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">SipCity: Your Liquid Haven</h1>
                        <p className="py-6">This title suggests a place where customers can enjoy a wide variety of beverages in a relaxed and welcoming atmosphere. You can replace "SipCity" with the actual name of your shop.</p>
                       
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;