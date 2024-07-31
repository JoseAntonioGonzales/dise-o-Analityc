import React from 'react';

function TablaVenta() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <div className="flex items-start">
                <div className="pr-4">
                    <h2 className="text-2xl font-bold mb-4">Ventas Bs</h2>
                    <div className="flex items-center mt-14">
                        <div className="bg-green-500 text-white px-6 py-1 rounded-l-md">LENTES</div>
                    </div>
                    <div className="flex items-center mt-2">
                        <div className="bg-green-500 text-white px-6 py-1 rounded-l-md">LC</div>
                    </div>
                    <div className="flex items-center mt-2">
                        <div className="bg-green-500 text-white px-6 py-1 rounded-l-md">GAFAS</div>
                    </div>
                    <div className="flex items-center mt-2">
                        <div className="bg-green-500 text-white px-6 py-1 rounded-l-md">OTROS</div>
                    </div>
                </div>
                <div className="flex-1">
                    <table className="w-full table-auto border-collapse">
                        <thead>
                            <tr>
                                <th className="border px-4 py-2 bg-teal-600 text-white text-right">27/11/2014</th>
                                <th className="border px-4 py-2 bg-teal-600 text-white text-right">Meta</th>
                                <th className="border px-4 py-2 bg-teal-600 text-white text-right">28/11/2015</th>
                            </tr>

                            <tr className="bg-gray-300">
                                <td className="border px-4 py-2 text-right">$ 486.986</td>
                                <td className="border px-4 py-2 text-right">$ 538.129</td>
                                <td className="border px-4 py-2 text-right">$ 330.973</td>
                            </tr>
                        </thead>
                        <tbody>
                          
                            <tr className="bg-white">
                                <td className="border px-4 py-2 text-right">$ 191.325</td>
                                <td className="border px-4 py-2 text-right">$ 218.033</td>
                                <td className="border px-4 py-2 text-right">$ 190.585</td>
                            </tr>
                            <tr className="bg-white">
                                <td className="border px-4 py-2 text-right">$ 20.193</td>
                                <td className="border px-4 py-2 text-right">$ 24.226</td>
                                <td className="border px-4 py-2 text-right">$ 190.585</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 text-right">$ 71.911</td>
                                <td className="border px-4 py-2 text-right">$ 92.684</td>
                                <td className="border px-4 py-2 text-right">$ 38.367</td>
                            </tr>
                            <tr className="bg-white">
                                <td className="border px-4 py-2 text-right">$ 204.192</td>
                                <td className="border px-4 py-2 text-right">$ 183.445</td>
                                <td className="border px-4 py-2 text-right">$ 104.739</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default TablaVenta;