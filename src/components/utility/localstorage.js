const getStoredDonationFund = ()=>{
    const storedDonationFund = localStorage.getItem('donation-amount');
    if(storedDonationFund){
        return JSON.parse(storedDonationFund);
    }
    return [];
}


const saveDonationFund = id => {
    const storedDonationFund = getStoredDonationFund();
    const exists = storedDonationFund.find(categoryId => categoryId === id);
    if(!exists){
        storedDonationFund.push(id);
        localStorage.setItem('donation-amount',JSON.stringify(storedDonationFund));

    }
}

export {getStoredDonationFund, saveDonationFund} 