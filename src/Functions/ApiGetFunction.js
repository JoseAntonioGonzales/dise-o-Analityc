import axios from "axios";

const serverUrl = 'http://localhost:5000';

const urls = {
    sucursales: serverUrl + '/sucursal',
    tipoVenta: serverUrl + '/tipo-venta',
    ventaId: serverUrl + '/venta', // base URL for ventaId
};

const ApiGetFunction = async (urlKey, params = {}) => {
    try {
        let url = urls[urlKey];
        if (!url) {
            throw new Error(`URL no encontrada para ${urlKey}`);
        }
        
        if (params.id) {
            url += `/${params.id}`;
        }

        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(`Error en ApiGetFunction para ${urlKey}:`, error);
        throw error;
    }
};

export default ApiGetFunction;
