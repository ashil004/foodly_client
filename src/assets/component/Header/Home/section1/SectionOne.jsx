

const SectionOne = () => {
    return (
        <div>
            <div className="flex flex-col w-full lg:flex-row">
                <div className="grid flex-grow h-96 card  rounded-box place-items-center">
                    <img src="https://i.ibb.co/4mKnjFh/Screenshot-86.png" className="w-80 h-80" alt="" />
                </div>
                <div className="divider lg:divider-horizontal"></div>  
                <div className="grid flex-grow h-96  card  rounded-box place-items-center">
                    <h3 className="font-semibold text-teal-400">Drink For Health</h3>
                    <h1 className="text-5xl font-bold ">Fresh Fruit <span className="text-teal-400">Juices</span></h1>
                    <p>Us percipit urbanitas referrentur ea.<br/> Mei at numquam
                        molestiae intellegam.<br/>Ansed dictas accumsan.<br/>  Nam sint
                        atqui voluptatibus an,<br/>  pro ne malis semper perpetua.<br/>  Nam
                        sint atqui voluptatibus an,<br/>pro ne malis semper perpetua.</p>

                        <button className="btn p-4 bg-teal-400 text-sky-600">Buy Now </button>
                </div>
            </div>
        </div>
    );
};

export default SectionOne;