import React, { useState } from 'react';

const sucursalesData = [
    { nombre: "OptiCentro Matriz Sucre", id: "matriz" },
    { nombre: "Opticentro Azurduy", id: "azurduy" },
    { nombre: "Opticentro Potosi", id: "potosi" },
    { nombre: "Opticentro Tarija", id: "tarija" },
    { nombre: "Opticentro Tarija2", id: "tarija2" },
    { nombre: "Opticentro Yacuiba", id: "yacuiba" },
    { nombre: "Opticentro La Paz", id: "lapaz" },
    { nombre: "Opticentro La Paz2", id: "lapaz2" },
    { nombre: "Opticentro Tupiza", id: "tupiza" },
    // Añadir más sucursales aquí según sea necesario
];

const staticData = [
    {
        producto: "LENTES",
        imagen: "/lentes.png",
        data1: 141,
        data2: 223,
        varUnidades: "-22,1%"
    },
    {
        producto: "LENTES CONTACTO",
        imagen: "/lentes-contacto.png",
        data1: 33,
        data2: 75,
        varUnidades: "-19,3%"
    },
    {
        producto: "GAFAS",
        imagen: "/gafas.png",
        data1: 146,
        data2: 181,
        varUnidades: "-19,3%"
    },
    {
        producto: "OTROS",
        imagen: "/otros.png",
        data1: 111,
        data2: 75,
        varUnidades: "48,0%"
    },
];

function TablaVentaSucursal() {
    const [visibleStates, setVisibleStates] = useState(sucursalesData.map(() => false));

    const toggleVisibility = (index) => {
        setVisibleStates(prevStates =>
            prevStates.map((isVisible, i) => (i === index ? !isVisible : isVisible))
        );
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <h2 className="text-2xl font-bold mb-4">Ventas por Sucursal</h2>
            {sucursalesData.map((sucursal, index) => (
                <div key={sucursal.id} className="mb-4">
                    <div className="flex items-center cursor-pointer" onClick={() => toggleVisibility(index)}>
                        <div className={`transform ${visibleStates[index] ? 'rotate-90' : ''} transition-transform`}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </div>
                        <span className="ml-2">{sucursal.nombre}</span>
                    </div>
                    {visibleStates[index] && (
                        <div className="flex items-start mt-4">
                            <div className="flex-1">
                                <table className="w-full table-auto border-collapse">
                                    <thead>
                                        <tr>
                                            <th className="border px-4 py-2 bg-teal-600 text-white text-left">Producto</th>
                                            <th className="border px-4 py-2 bg-teal-600 text-white text-right">27/11/2014</th>
                                            <th className="border px-4 py-2 bg-teal-600 text-white text-right">28/11/2015</th>
                                            <th className="border px-4 py-2 bg-teal-600 text-white text-right">Var%Unidades</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {staticData.map((producto, i) => (
                                            <tr key={i} className={i % 2 === 0 ? "" : "bg-gray-100"}>
                                                <td className="border px-4 py-2 text-left flex items-center">
                                                    <img src={producto.imagen} alt={producto.producto} className="w-8 h-8 mr-2" />
                                                    {producto.producto}
                                                </td>
                                                <td className="border px-4 py-2 text-right">{producto.data1}</td>
                                                <td className="border px-4 py-2 text-right">{producto.data2}</td>
                                                <td className="border px-4 py-2 text-right">{producto.varUnidades}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default TablaVentaSucursal;
