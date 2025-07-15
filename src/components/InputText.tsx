'use client';

import React from 'react';

//# Interface para el componente InputText
// Este componente es un campo de entrada de texto reutilizable que acepta una etiqueta, un valor
// y una función de cambio para manejar las actualizaciones del valor del campo.
// También puede aceptar un marcador de posición opcional para mostrar cuando el campo está vacío.
//#
interface Props {
    label: string;
    value: string;
    onChange: (val: string) => void;
    placeholder?: string;
    rows?: number;
}

export const InputText: React.FC<Props> = ({ label, value, onChange, placeholder, rows = 6 }) => (
    <div className="mb-4">
        <label className="block mb-1 text-sm font-medium text-gray-700">{label}</label>
        <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            rows = {rows}
        />
    </div>
);
