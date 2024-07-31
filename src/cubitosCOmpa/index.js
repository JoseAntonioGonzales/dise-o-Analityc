import React from 'react';

function CubitosCOmpa() {
    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="grid grid-cols-6 gap-4 p-4 border rounded-lg bg-gray-100 shadow-md">
                {[
                    "CANT SUCURSALES",
                    "TOTAL VENTA",
                    "TCP",
                    "VENTA X DIA",
                    "TKT PROMEDIO",
                    "TRAFICO"
                ].map((title, index) => (
                    <div key={index} className="p-3 border rounded-lg bg-white shadow-sm flex flex-col items-center justify-center">
                        <h3 className="text-xs font-bold text-center text-gray-800 mb-2">{title}</h3>
                        <span className="text-lg font-semibold text-blue-600">0</span>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-6 gap-4 p-4 border rounded-lg bg-gray-100 shadow-md">
                {[
                    "TRAFICO",
                    "TKT PROMEDIO",
                    "VENTA X DIA",
                    "TCP",
                    "TOTAL VENTA",
                    "CANTIDAD SUCURSALES"
                ].map((title, index) => (
                    <div key={index} className="p-3 border rounded-lg bg-white shadow-sm flex flex-col items-center justify-center">
                        <h3 className="text-xs font-bold text-center text-gray-800 mb-2">{title}</h3>
                        <span className="text-lg font-semibold text-blue-600">0</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CubitosCOmpa;
