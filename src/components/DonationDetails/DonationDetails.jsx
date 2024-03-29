import { useLoaderData, useParams } from "react-router-dom";
import { saveDonationFund } from "../utility/localstorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DonationDetails = () => {

    const categories = useLoaderData();
    const {id} = useParams();
    const IntId = parseInt(id);
    const category = categories.find(category=> category.id == IntId);
    console.log(category);

    const handleDonation =() => {
 
        saveDonationFund(IntId);
        toast.success("You Successfully Donate") 
    }

    return (
        <div className="max-w-6xl mx-auto">
            {/* <h2>Donation Details</h2> */}
            <div className="relative my-10 mx-1">
                <img className="w-full h-96" src={category.image} alt="" />
                <div className="text-white absolute bottom-0 p-8 bg-slate-700 w-full bg-opacity-40">
                <button onClick={handleDonation} className="px-4 py-2 rounded-lg " style={{backgroundColor: category.text_bg}}>Donate ${category.price.toFixed(2)}</button>
                <ToastContainer />
                </div>
            </div>

            <h1 className="text-3xl font-bold my-5 mx-1">{category.title}</h1>
            <p className="text-justify my-8 mx-1">{category.description}</p>
        </div>
    );
};

export default DonationDetails;