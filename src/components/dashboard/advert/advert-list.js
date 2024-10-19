import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdvertList = () => {
    const [adverts, setAdverts] = useState([]);

    useEffect(() => {
        const fetchAdverts = async () => {
            const response = await axios.get(`${ADVERT_GET_ALL_BY_PAGE_API}/adverts/auth`); 
            setAdverts(response.data);
        };
        fetchAdverts();
    }, []);

    const handleDelete = async (advertId) => {
        await axios.delete(`${ADVERT_DELETE_API}/adverts/${advertId}/auth`);
        setAdverts(adverts.filter(advert => advert.id !== advertId));
    };

    return (
        <div>
            <h1>Your Adverts</h1>
            <ul>
                {adverts.map(advert => (
                    <li key={advert.id}>
                        <h2>{advert.title}</h2>
                        <p>Status: {advert.is_active ? 'Active' : 'Passive'}</p>
                        <button onClick={() => handleDelete(advert.id)}>Delete</button>
                        <button onClick={() => window.location.href = `/adverts/${advert.id}/edit`}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdvertList;
