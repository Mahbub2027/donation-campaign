import { useState } from "react";
import Category from "../Category/Category";

const DonationCategories = () => {

    const [categories, setCategories] = useState([]);

    fetch('category.json')
    .then(res => res.json())
    .then(data => setCategories(data));

    const handleDonationCategories = () =>{
        
    }


    return (
        <div onClick={}>
            {/* <h1>Donation Categories: {categories.length}</h1> */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-14 rounded-md">
            {
                categories.map(category => <Category key={category.id} category={category}></Category>)
            }
            </div>

        </div>
    );
};

export default DonationCategories;