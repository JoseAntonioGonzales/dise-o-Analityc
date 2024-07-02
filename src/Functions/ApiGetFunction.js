import axios from "axios";

const serverUrl = 'http://localhost:5000';

const urls = {
    sucursales: serverUrl + '/sucursal',
    otraRuta: serverUrl + '/otra-ruta',
};

const ApiGetFunction = async (urlKey) => {
    try {
        const url = urls[urlKey];
        if (!url) {
            throw new Error(`URL no encontrada para ${urlKey}`);
        }
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(`Error en ApiGetFunction para ${urlKey}:`, error);
        throw error;
    }
};

export default ApiGetFunction;
