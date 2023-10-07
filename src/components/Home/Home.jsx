import { useState } from "react";
import Banner from "../Banner/Banner";
import DonationCategories from "../DonationCategories/DonationCategories";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const [categories, setCategories] = useState(useLoaderData())
    return (
        <div >
            <Banner setCategories= {setCategories}></Banner>
            <div className="max-w-6xl mx-auto">
            <DonationCategories categories = {categories}></DonationCategories>
            </div>
        </div>
    );
};

export default Home;