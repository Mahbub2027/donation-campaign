import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonationFund } from "../utility/localstorage";

const Donation = () => {
    const donations = useLoaderData();

    const [donationAmount, setDonationAmount] = useState([]);

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
        <div>
            <h2>Donation: {donationAmount.length}</h2>
            {
                donationAmount.map(donation => <li key={donation.id}>{donation.title}</li>)
            }
        </div>
    );
};

export default Donation;