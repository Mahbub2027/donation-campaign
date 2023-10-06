import { useLoaderData, useParams } from "react-router-dom";
import { saveDonationFund } from "../utility/localstorage";

const DonationDetails = () => {

    const categories = useLoaderData();
    const {id} = useParams();
    const IntId = parseInt(id);
    const category = categories.find(category=> category.id === IntId);
    console.log(category);

    const handleDonation =() => {
        saveDonationFund(IntId);
    }

    return (
        <div className="max-w-6xl mx-auto">
            {/* <h2>Donation Details</h2> */}
            <div className="relative my-10 mx-1">
                <img className="w-full h-96" src={category.image} alt="" />
                <div className="">
                <button onClick={handleDonation} className="px-4 py-1 text-white absolute bottom-6 left-6" style={{backgroundColor: category.text_bg}}>Donate ${category.price}</button>
                </div>
            </div>

            <h1 className="text-3xl font-bold my-5 mx-1">{category.title}</h1>
            <p className="text-justify my-8 mx-1">{category.description}</p>
        </div>
    );
};

export default DonationDetails;