import axios from 'axios';

const API_URL = '#';  // Backend URL 'i buraya yazacagiz unutma

// Get all advert types
export const getAdvertTypes = async () => {
    const response = await axios.get(`${ADVERT_TAYPE_GET_ALL_BY_PAGE_API}/advert-types`);
    return response.data;
};

// Get advert type by ID
export const getAdvertTypeById = async (id) => {
    const response = await axios.get(`${ADVERT_TAYPE_GET_BY_ID_API}/advert-types/${id}`);
    return response.data;
};

// Create a new advert type
export const createAdvertType = async (advertTypeData) => {
    const response = await axios.post(`${ADVERT_TAYPE_CREATE_API}/advert-types`, advertTypeData);
    return response.data;
};

// Update an existing advert type
export const updateAdvertType = async (id, advertTypeData) => {
    const response = await axios.put(`${ADVERT_TAYPE_UPDATE}/advert-types/${id}`, advertTypeData);
    return response.data;
};

// Delete an advert type
export const deleteAdvertType = async (id) => {
    const response = await axios.delete(`${ADVERT_TAYPE_DELETE_API}/advert-types/${id}`);
    return response.data;
};
