'use client';

import React from 'react';

// Definición de las propiedades del componente

interface Props {
    onFileSelect: (file: File) => void;
    currentFile?: File;
}

export const FileUploader: React.FC<Props> = ({ onFileSelect, currentFile }) => {
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const validTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!validTypes.includes(file.type)) {
        alert('Solo se permiten archivos PDF o Word (.docx)');
        return;
    }

    const maxSizeMB = 5;
    if (file.size > maxSizeMB * 1024 * 1024) {
        alert('El archivo debe pesar menos de 5MB');
        return;
    }

    onFileSelect(file);
};

return (
    <div className="mb-4">
        <label className="block mb-1 text-sm font-medium text-gray-700">Adjunta tu CV (.pdf o .docx)</label>
        <input
            type="file"
            accept=".pdf,.docx"
            onChange={handleFileChange}
            className="mb-2"
        />
        {currentFile && (
            <p className="text-sm text-gray-600">
            Archivo seleccionado: <strong>{currentFile.name}</strong>
            </p>
        )}
        </div>
    );
};
