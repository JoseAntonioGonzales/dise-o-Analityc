import React, { useState, useEffect } from "react";
import ApiGetFunction from "../Functions/ApiGetFunction";
import EncaCOmpa from "../EncaCOmpa";
import TablaVenta from "../tablaVenta";
import CubitosCOmpa from "../cubitosCOmpa";
import TablaVentaSucursal from "../tablaVentaSucursal";

function Inicio() {
    const [sucursales, setSucursales] = useState([]);
    const [tiposVenta, setTiposVenta] = useState([]);
    const [cadenas, setCadenas] = useState([]);
    const [ventaInfo, setVentaInfo] = useState(null);
    const [selectedCadena, setSelectedCadena] = useState("");
    const [selectedSucursal, setSelectedSucursal] = useState("");
    const [selectedTipoVenta, setSelectedTipoVenta] = useState("");
    const [fechaInicio, setFechaInicio] = useState("");
    const [fechaFin, setFechaFin] = useState("");
    const [cantidadPorSucursal, setCantidadPorSucursal] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const sucursalesData = await getOpticas();
            setSucursales(sucursalesData);

            const tiposVentaData = await getTiposVenta();
            setTiposVenta(tiposVentaData);

            const cadenasData = await getCadenas();
            setCadenas(cadenasData);

            const cantidadData = await getCantidadPorSucursal();
            setCantidadPorSucursal(cantidadData);
        };

        fetchData();
    }, []);

    const getOpticas = async () => {
        try {
            const response = await ApiGetFunction('sucursales');
            return response.map(sucursal => ({
                id: sucursal._id,
                nombre: sucursal.nombre,
                flag: sucursal.flag
            }));
        } catch (error) {
            console.log('Error en getOpticas:', error);
            return [];
        }
    };

    const getTiposVenta = async () => {
        try {
            const response = await ApiGetFunction('tipoVenta');
            return response.map(tipo => ({
                id: tipo._id,
                nombre: tipo.nombre
            }));
        } catch (error) {
            console.log('Error en getTiposVenta:', error);
            return [];
        }
    };

    const getCadenas = async () => {
        try {
            const response = await ApiGetFunction('cadenas');
            return response.map(cadena => ({
                id: cadena._id,
                nombre: cadena.nombre
            }));
        } catch (error) {
            console.log('Error en getCadenas:', error);
            return [];
        }
    };

    const getCantidadPorSucursal = async () => {
        try {
            const response = await ApiGetFunction('cantidadPorSucursal');
            return response.map(cantidad => ({
                nombre: cantidad.sucursal,
                lentes: cantidad.lentes,
                lc: cantidad.lc,
                gafas: cantidad.gafas,
                otros: cantidad.otros
            }));
        } catch (error) {
            console.log('Error en getCantidadPorSucursal:', error);
            return [];
        }
    };

    const getVentaById = async (id, tipoVenta, fechaInicio, fechaFin) => {
        try {
            return await ApiGetFunction('ventaId', { id, tipoVenta, fechaInicio, fechaFin });
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
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                <div className="flex justify-start mb-4">
                    <button onClick={handleSearch} className="border p-2 rounded-lg bg-blue-500 text-white shadow-md hover:bg-blue-600 transition duration-200">Buscar</button>
                </div>
                <EncaCOmpa 
                    cadenas={cadenas}
                    sucursales={sucursales}
                    tiposVenta={tiposVenta}
                    setSelectedCadena={setSelectedCadena}
                    setSelectedSucursal={setSelectedSucursal}
                    setSelectedTipoVenta={setSelectedTipoVenta}
                    fechaInicio={fechaInicio}
                    setFechaInicio={setFechaInicio}
                    fechaFin={fechaFin}
                    setFechaFin={setFechaFin}
                    ventaInfo={ventaInfo}
                />
            </div>
            <TablaVenta />
            <CubitosCOmpa />
            <div className="mt-6">
                <TablaVentaSucursal />
            </div>
        </div>
    );
}

export default Inicio;
