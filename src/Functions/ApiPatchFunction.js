import axios from "axios";

const serverUrl = 'http://localhost:5000';

const urls = {
    putData: serverUrl + '/',
}

const ApiPatchFunction = async (data) => {
    try {
        const response = await axios.patch(urls.putData, data);
        return response;
    } catch (error) {
        console.error('Error en ApiPatchFunction:', error);
        throw error;
    }
}

