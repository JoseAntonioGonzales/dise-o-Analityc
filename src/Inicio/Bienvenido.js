import React, { useState, useEffect } from "react";
import ApiGetFunction from "../Functions/ApiGetFunction";

function Inicio() {
    const [sucursales, setSucursales] = useState([]);
    const [tiposVenta, setTiposVenta] = useState([]);
    const [ventaInfo, setVentaInfo] = useState(null);
    const [selectedTipoVenta, setSelectedTipoVenta] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const sucursalesData = await getOpticas();
            setSucursales(sucursalesData);

            const tiposVentaData = await getTiposVenta();
            setTiposVenta(tiposVentaData);
        };

        fetchData();
    }, []);

    const getOpticas = async () => {
        try {
            const response = await ApiGetFunction('sucursales');
            const sucursales = response.map(sucursal => ({
                id: sucursal._id,
                nombre: sucursal.nombre,
                flag: sucursal.flag
            }));
            return sucursales;
        } catch (error) {
            console.log('Error en getOpticas:', error);
            return [];
        }
    };

    const getTiposVenta = async () => {
        try {
            const response = await ApiGetFunction('tipoVenta');
            const tiposVenta = response.map(tipo => ({
                id: tipo._id,
                nombre: tipo.nombre
            }));
            return tiposVenta;
        } catch (error) {
            console.log('Error en getTiposVenta:', error);
            return [];
        }
    };

    const getVentaById = async (id) => {
        try {
            const response = await ApiGetFunction('ventaId', { id });
            return response;
        } catch (error) {
            console.log('Error en getVentaById:', error);
            return null;
        }
    };

    const handleTipoVentaChange = async (event) => {
        const tipoVentaId = event.target.value;
        setSelectedTipoVenta(tipoVentaId);

        const ventaData = await getVentaById(tipoVentaId);
        setVentaInfo(ventaData);
    };

    return (
        <div>
            <select>
                {sucursales.map(sucursal => (
                    <option key={sucursal.id} value={sucursal.id}>
                        {sucursal.nombre}
                    </option>
                ))}
            </select>
            <select onChange={handleTipoVentaChange}>
                <option value="">Seleccione un tipo de venta</option>
                {tiposVenta.map(tipo => (
                    <option key={tipo.id} value={tipo.id}>
                        {tipo.nombre}
                    </option>
                ))}
            </select>
            {ventaInfo && (
                <div>
                    <h2>Información de la Venta</h2>
                    <pre>{JSON.stringify(ventaInfo, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default Inicio;
