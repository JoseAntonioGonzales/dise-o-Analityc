import axios from "axios";

const serverUrl = 'http://localhost:3001/api/post';

const urls = {
    putData: serverUrl + '/',
}


const ApiPostFunction = async (data) => {
    try {
        const response = await axios.post(urls.putData, data);
        return response;
    } catch (error) {
        console.error('Error en ApiPostFunction:', error);
        throw error;
    }
}

export default ApiPostFunction;
