import React, { useState } from "react";
import ApiGetFunction from "../Functions/ApiGetFunction";

function Inicio() {
    
    const getOpticas = async () => {
        try {
            const response = await ApiGetFunction('sucursales');
            const sucursales = [];
            
            for (let i = 0; i < response.length; i++) {
                const sucursal = {
                    id: response[i]._id,
                    nombre: response[i].nombre,
                    flag: response[i].flag
                };
                sucursales.push(sucursal);
            }
            
            return sucursales;
        } catch (error) {
            console.log('Error en getOpticas:', error);
            return []; 
        }
    } 

    getOpticas()




    return (
        <div>
            
        </div>
    );
}

export default Inicio;
