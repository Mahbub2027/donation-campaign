import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonationFund } from "../utility/localstorage";

const Donation = () => {
    const donations = useLoaderData();

    const [donationAmount, setDonationAmount] = useState([]);
    const [datalength, setDatalength] = useState(4);

    useEffect(()=>{
        const donationsID = getStoredDonationFund([]);

        if(donations.length > 0){
            const amountDonation = [];
            for(const id of donationsID){
                const donation = donations.find(donation => donation.id === id)
                if(donation){
                    amountDonation.push(donation);
                }
            }
            // console.log(amountDonation);
            setDonationAmount(amountDonation);
        }
    },[donations])

    return (
        <div className="max-w-6xl mx-auto">
            {/* <h2>Donation: {donationAmount.length}</h2> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-10">
                {
                    donationAmount.slice(0, datalength).map(donation => 
                    <div key={donation.id}>
                        <div className="flex flex-row gap-8 items-center h-48" style={{backgroundColor: donation.card_bg}}>
                            <div><img className="w-40 md:w-64 h-48" src={donation.image} alt="" /></div>
                            <div>
                                <h2 className="w-20 p-1 font-semibold" style={{backgroundColor: donation.category_bg, color: donation.text_bg}}>{donation.category_name}</h2>
                                <h2 className="text-2xl font-bold">{donation.title}</h2>
                                <h2 className="text-lg font-semibold" style={{color: donation.text_bg}}>${donation.price.toFixed(2)}</h2>
                                <button className="my-3 font-semibold" style={{backgroundColor: donation.text_bg, color: "white", padding: '7px', borderRadius: '5px'}}>View Details</button>
                            </div>
                        </div>
                    </div>
                    )

                }
            </div>

            <div className={datalength === donationAmount.length || donationAmount.length < 4 ? 'hidden' : ''}>
             <div className="flex justify-center my-10">
                <button onClick={()=> setDatalength(donationAmount.length)} className="bg-green-700 text-white  py-2 w-36 font-bold rounded-lg text-lg">See All</button>
             </div>
            </div>
        </div>
    );
};

export default Donation;