import { config } from "./config";



export const ADVERT_GET_ALL_BY_PAGE_API = `${config.apiURL}/adverts/search`;
export const ADVERT_GET_ALL_API = `${config.apiURL}/adverts/getAll`;
export const ADVERT_DELETE_API = `${config.apiURL}/adverts/delete`;
export const ADVERT_CREATE_API = `${config.apiURL}/adverts/save`;
export const ADVERT_UPDATE_API = `${config.apiURL}/adverts/update`;


export const ADVERT_TYPE_GET_ALL_BY_PAGE_API = `${config.apiURL}/adverttype/search`;
export const ADVERT_TYPE_GET_BY_ID_API = `${config.apiURL}/adverttype/getViceDeanById`;
export const ADVERT_TYPE_DELETE_API = `${config.apiURL}/adverttype/delete`;
export const AADVERT_TYPE_CREATE_API = `${config.apiURL}/adverttype/save`;
export const ADVERT_TYPE_UPDATE_API = `${config.apiURL}/adverttype/update`;

// yukarida adverttype'i camelcase ile yazabiliriz, tekrar gozden gecirelim, endpoint't