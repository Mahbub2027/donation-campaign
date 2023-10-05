const Banner = () => {
    return (
        <div className="w-full h-[70vh] bg-no-repeat " style={{backgroundImage: `url('https://i.ibb.co/bgCYJz8/bg-donation.jpg')`, opacity: 0.8}}>
            
            <div className="max-w-xl mx-auto pt-24">
                <div><h1 className="text-4xl font-bold">I Grow By Helping People In Need</h1> <br /></div>
                <div className="">
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <button className="bg-[#FF444A] text-white px-4 py-3 rounded-xl">Search</button>
                </div>
            </div>
            
            {/* <img className=" w-full h-[70vh] opacity-40" src="https://i.ibb.co/bgCYJz8/bg-donation.jpg" alt="" /> */}
        </div>
    );
};

export default Banner;