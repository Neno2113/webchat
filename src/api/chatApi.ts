import axios from 'axios';



const baseURL = process.env.REACT_APP_API_URL || '';

const chatApi = axios.create({ baseURL });

chatApi.interceptors.request.use(
    async( config ) => {
        const token = localStorage.getItem('token');
        if( token ){
            config.headers!['x-token'] = token;
        } 
        return config;
    }
)

export default chatApi;