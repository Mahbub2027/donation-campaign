import Banner from "../Banner/Banner";
import DonationCategories from "../DonationCategories/DonationCategories";

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <div className="max-w-6xl mx-auto">
            <     DonationCategories></DonationCategories>
            </div>
        </div>
    );
};

export default Home;