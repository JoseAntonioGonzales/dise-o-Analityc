import React, { useState, useEffect } from "react";
import ApiGetFunction from "../Functions/ApiGetFunction";

function Inicio() {
    const [sucursales, setSucursales] = useState([]);
    const [tiposVenta, setTiposVenta] = useState([]);
    const [ventaInfo, setVentaInfo] = useState(null);
    const [selectedSucursal, setSelectedSucursal] = useState("");
    const [selectedTipoVenta, setSelectedTipoVenta] = useState("");
    const [fechaInicio, setFechaInicio] = useState("");
    const [fechaFin, setFechaFin] = useState("");

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

    const getVentaById = async (id, tipoVenta, fechaInicio, fechaFin) => {
        try {
            const response = await ApiGetFunction('ventaId', { id, tipoVenta, fechaInicio, fechaFin });
            return response;
        } catch (error) {
            console.log('Error en getVentaById:', error);
            return null;
        }
    };

    const handleSearch = async () => {
        const ventaData = await getVentaById(selectedSucursal, selectedTipoVenta, fechaInicio, fechaFin);
        setVentaInfo(ventaData);
    };

    return (
        <div>
            <select onChange={(e) => setSelectedSucursal(e.target.value)}>
                <option value="">Seleccione una sucursal</option>
                {sucursales.map(sucursal => (
                    <option key={sucursal.id} value={sucursal.id}>
                        {sucursal.nombre}
                    </option>
                ))}
            </select>
            <select onChange={(e) => setSelectedTipoVenta(e.target.value)}>
                <option value="">Seleccione un tipo de venta</option>
                {tiposVenta.map(tipo => (
                    <option key={tipo.id} value={tipo.id}>
                        {tipo.nombre}
                    </option>
                ))}
            </select>
            <input type="date" value={fechaInicio} onChange={(e) => setFechaInicio(e.target.value)} />
            <input type="date" value={fechaFin} onChange={(e) => setFechaFin(e.target.value)} />
            <button onClick={handleSearch}>Buscar</button>
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
