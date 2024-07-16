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
        
        // Handle URL parameters
        if (params.id) {
            url += `/${params.id}`;
        }

        // Handle query parameters
        const queryParams = new URLSearchParams();
        if (params.tipoVenta) queryParams.append('tipoVenta', params.tipoVenta);
        if (params.fechaInicio) queryParams.append('fechaInicio', params.fechaInicio);
        if (params.fechaFin) queryParams.append('fechaFin', params.fechaFin);
        const queryString = queryParams.toString();
        if (queryString) {
            url += `?${queryString}`;
        }

        const response = await axios.get(url);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(`Error en ApiGetFunction para ${urlKey}:`, error);
        throw error;
    }
};

export default ApiGetFunction;
