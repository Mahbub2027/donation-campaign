import { useRef } from "react";
import { useLoaderData } from "react-router-dom";

const Banner = ({setCategories}) => {

    const alldata = useLoaderData();
    const searchref = useRef();

    const handleSubmit = () => {
      const search = searchref?.current?.value.toLowerCase();
      console.log(alldata);

      const filterData = alldata.filter((item) =>
      item.category_name.toLowerCase().includes(search)
    );
      console.log(filterData);
      setCategories(filterData);
    
};
    return (
        <div className="hero min-h-[80vh]" style={{backgroundImage: 'url(https://i.ibb.co/bgCYJz8/bg-donation.jpg)'}}>
            <div className="hero-overlay bg-white bg-opacity-70"></div>
            <div className="hero-content text-center ">
        <div className="">
            <h1 className="mb-5 text-4xl font-bold">I Grow By Helping People In Need</h1>
            {/* <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
            <div className="relative">
                    <input  ref={searchref}
                // value="Hello"
                    defaultValue={""} 
                        type="text" placeholder="Search here..." 
                        className="input input-bordered w-full pr-16" /> 
                <button onClick={handleSubmit} className="px-5 py-3 bg-[#FF444A] absolute text-white font-semibold top-0 right-0 rounded-r-lg">Search</button>
            </div>
        </div>
        </div>
        </div>
    )
};

export default Banner;
