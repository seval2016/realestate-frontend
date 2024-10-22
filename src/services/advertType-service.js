import axios from 'axios';

const API_URL = '#';  // Backend URL 'i buraya yazacagiz unutma


export const getAdvertTypes = async () => {
    const response = await axios.get(`${ADVERT_TYPE_GET_ALL_BY_PAGE_API}/advert-types`);
    return response.data;
};

export const getAdvertTypeById = async (id) => {
    const response = await axios.get(`${ADVERT_TYPE_GET_BY_ID_API}/advert-types/${id}`);
    return response.data;
};


export const createAdvertType = async (advertTypeData) => {
    const response = await axios.post(`${ADVERT_TYPE_CREATE_API}/advert-types`, advertTypeData);
    return response.data;
};

export const updateAdvertType = async (id, advertTypeData) => {
    const response = await axios.put(`${ADVERT_TYPE_UPDATE}/advert-types/${id}`, advertTypeData);
    return response.data;
};


export const deleteAdvertType = async (id) => {
    const response = await axios.delete(`${ADVERT_TYPE_DELETE_API}/advert-types/${id}`);
    return response.data;
};
