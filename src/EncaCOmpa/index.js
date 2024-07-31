import React from 'react';

function EncaCOmpa({ cadenas, sucursales, tiposVenta, setSelectedCadena, setSelectedSucursal, setSelectedTipoVenta, fechaInicio, setFechaInicio, fechaFin, setFechaFin, ventaInfo }) {
    const renderSelectOptions = (options, defaultOption) => (
        <>
            <option value="">{defaultOption}</option>
            {options.map(option => (
                <option key={option.id} value={option.id}>{option.nombre}</option>
            ))}
        </>
    );

    return (
        <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="p-4 border rounded-lg bg-gray-50 shadow-md">
                <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                        <label className="block mb-1">Cadena:</label>
                        <select onChange={(e) => setSelectedCadena(e.target.value)} className="border p-2 rounded-lg w-full">
                            {renderSelectOptions(cadenas, "Seleccione una cadena")}
                        </select>
                    </div>
                    <div className="col-span-2">
                        <label className="block mb-1">Sucursal:</label>
                        <select onChange={(e) => setSelectedSucursal(e.target.value)} className="border p-2 rounded-lg w-full">
                            {renderSelectOptions(sucursales, "Seleccione una sucursal")}
                        </select>
                    </div>
                    <div className="col-span-2">
                        <label className="block mb-1">Tipo de Venta:</label>
                        <select onChange={(e) => setSelectedTipoVenta(e.target.value)} className="border p-2 rounded-lg w-full">
                            {renderSelectOptions(tiposVenta, "Seleccione un tipo de venta")}
                        </select>
                    </div>
                    <div className="col-span-1">
                        <label className="block mb-1">Fechas Desde:</label>
                        <input type="date" className="border p-2 rounded-lg w-full" value={fechaInicio} onChange={(e) => setFechaInicio(e.target.value)} />
                    </div>
                    <div className="col-span-1">
                        <label className="block mb-1">Fechas Hasta:</label>
                        <input type="date" className="border p-2 rounded-lg w-full" value={fechaFin} onChange={(e) => setFechaFin(e.target.value)} />
                    </div>
                </div>
            </div>
            <div className="p-4 border rounded-lg bg-gray-50 shadow-md">
                <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                        <label className="block mb-1">Cadena:</label>
                        <select onChange={(e) => setSelectedCadena(e.target.value)} className="border p-2 rounded-lg w-full">
                            {renderSelectOptions(cadenas, "Seleccione una cadena")}
                        </select>
                    </div>
                    <div className="col-span-2">
                        <label className="block mb-1">Sucursal:</label>
                        <select onChange={(e) => setSelectedSucursal(e.target.value)} className="border p-2 rounded-lg w-full">
                            {renderSelectOptions(sucursales, "Seleccione una sucursal")}
                        </select>
                    </div>
                    <div className="col-span-2">
                        <label className="block mb-1">Tipo de Venta:</label>
                        <select onChange={(e) => setSelectedTipoVenta(e.target.value)} className="border p-2 rounded-lg w-full">
                            {renderSelectOptions(tiposVenta, "Seleccione un tipo de venta")}
                        </select>
                    </div>
                    <div className="col-span-1">
                        <label className="block mb-1">Fechas Desde:</label>
                        <input type="date" className="border p-2 rounded-lg w-full" />
                    </div>
                    <div className="col-span-1">
                        <label className="block mb-1">Fechas Hasta:</label>
                        <input type="date" className="border p-2 rounded-lg w-full" />
                    </div>
                </div>
            </div>
            {ventaInfo && (
                <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
                    <h2 className="text-xl text-gray-800 mb-4">Información de la Venta</h2>
                    <pre className="bg-gray-100 p-4 rounded-lg text-gray-700">{JSON.stringify(ventaInfo, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default EncaCOmpa;
