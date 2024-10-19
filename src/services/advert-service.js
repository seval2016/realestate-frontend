import axios from 'axios';




const API_URL = '#';  // Backend URL'i buraya # yazmayi unutma

// Get all adverts with optional filters
export const getAdverts = async (params = {}) => {
    const response = await axios.get(`${ADVERT_GET_ALL_BY_PAGE_API}/adverts`, { params });
    return response.data;
};

// Get authenticated user's adverts
export const getUserAdverts = async () => {
    const response = await axios.get(`${API_URL}/adverts/auth`);
    return response.data;
};

// Get advert details by ID (for editing)
export const getAdvertById = async (id) => {
    const response = await axios.get(`${API_URL}/adverts/${id}/auth`);
    return response.data;
};

// Create a new advert
export const createAdvert = async (advertData) => {
    const response = await axios.post(`${ADVERT_CREATE_API}/adverts`, advertData);
    return response.data;
};

// Update an existing advert
export const updateAdvert = async (id, advertData) => {
    const response = await axios.put(`${ADVERT_UPDATE_API}/adverts/auth/${id}`, advertData);
    return response.data;
};

// Delete an advert
export const deleteAdvert = async (id) => {
    const response = await axios.delete(`${ADVERT_DELETE_API}/adverts/auth/${id}`);
    return response.data;
};

// Get popular adverts
export const getPopularAdverts = async (amount = 10) => {
    const response = await axios.get(`${API_URL}/adverts/popular/${amount}`);
    return response.data;
};
