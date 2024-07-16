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
    const [meta, setMeta] = useState("");

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
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="mb-6 flex items-center space-x-4">
                    <select onChange={(e) => setSelectedSucursal(e.target.value)} className="border p-2 rounded-lg">
                        <option value="">Seleccione una sucursal</option>
                        {sucursales.map(sucursal => (
                            <option key={sucursal.id} value={sucursal.id}>
                                {sucursal.nombre}
                            </option>
                        ))}
                    </select>
                    <select onChange={(e) => setSelectedTipoVenta(e.target.value)} className="border p-2 rounded-lg">
                        <option value="">Seleccione un tipo de venta</option>
                        {tiposVenta.map(tipo => (
                            <option key={tipo.id} value={tipo.id}>
                                {tipo.nombre}
                            </option>
                        ))}
                    </select>
                    <button onClick={handleSearch} className="border p-2 rounded-lg bg-blue-500 text-white shadow-md hover:bg-blue-600 transition duration-200">Buscar</button>
                </div>
                <div className="flex justify-between mb-6 space-x-4">
                    <div className="w-1/2 p-4 border rounded-lg bg-blue-50 shadow-md">
                        <h2 className="text-xl mb-2 text-blue-700">PERIODO ANTERIOR</h2>
                        <div className="flex mb-4 space-x-4">
                            <div>
                                <label className="block text-blue-700 mb-1">Fecha Desde</label>
                                <input type="date" className="border p-2 rounded-lg w-40" value={fechaInicio} onChange={(e) => setFechaInicio(e.target.value)} />
                            </div>
                            <div>
                                <label className="block text-blue-700 mb-1">Fecha Hasta</label>
                                <input type="date" className="border p-2 rounded-lg w-40" value={fechaFin} onChange={(e) => setFechaFin(e.target.value)} />
                            </div>
                        </div>
                        <div className="border p-4 rounded-lg bg-white shadow">
                            <h3 className="text-lg mb-2 text-blue-700">VENTAS</h3>
                            <p className="text-2xl text-gray-800">{ventaInfo ? ventaInfo.numero : "NUM"}</p>
                        </div>
                    </div>
                    <div className="w-1/2 p-4 border rounded-lg bg-green-50 shadow-md">
                        <h2 className="text-xl mb-2 text-green-700">PERIODO ACTUAL</h2>
                        <div className="flex mb-4 space-x-4">
                            <div>
                                <label className="block text-green-700 mb-1">Fecha Desde</label>
                                <input type="date" className="border p-2 rounded-lg w-40" />
                            </div>
                            <div>
                                <label className="block text-green-700 mb-1">Fecha Hasta</label>
                                <input type="date" className="border p-2 rounded-lg w-40" />
                            </div>
                        </div>
                        <div className="border p-4 rounded-lg bg-white shadow">
                            <p className="text-2xl text-gray-800">NUM</p>
                        </div>
                    </div>
                </div>
                <div className="border p-4 rounded-lg bg-yellow-50 shadow-md mb-6">
                    <h3 className="text-lg mb-2 text-yellow-700">META</h3>
                    <input
                        type="number"
                        className="border p-2 rounded-lg w-full"
                        value={meta}
                        onChange={(e) => setMeta(e.target.value)}
                        placeholder="Ingrese la meta"
                    />
                </div>
                <div className="border p-4 rounded-lg bg-red-50 shadow-md mb-6">
                    <h3 className="text-lg mb-2 text-red-700">VDR</h3>
                    <p className="text-2xl text-gray-800">PIO</p>
                </div>
                {ventaInfo && (
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl text-gray-800 mb-4">Información de la Venta</h2>
                        <pre className="bg-gray-100 p-4 rounded-lg text-gray-700">{JSON.stringify(ventaInfo, null, 2)}</pre>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Inicio;
