'use client';

import { useRouter } from 'next/navigation';
import { InputText } from '@/components/InputText';
import { StepFormLayout } from '@/components/StepFormLayout';
import { storageGlobal } from '@/lib/StoreGlobal';

export default function JobDescriptionStep() {
    const router = useRouter();
    const { cvData, setJobDescription } = storageGlobal();

    const handleNext = () => {
        if (!cvData.jobDescription || cvData.jobDescription.length < 20) {
        return alert('La descripción del trabajo debe tener al menos 20 caracteres.');
        }
        router.push('/form/step3');
    };

    const handleBack = () => {
        router.push('/form/step1');
    };

    return (
        <StepFormLayout>
        <h2 className="text-xl font-semibold mb-6">Fase 2: Descripción del Trabajo</h2>
        <InputText
            label="Pega aquí la descripción del trabajo"
            value={cvData.jobDescription || ''}
            onChange={setJobDescription}
            placeholder="Ej. Estamos buscando un desarrollador front-end con experiencia en React..."
        />
        <div className="flex justify-between mt-4">
            <button
            onClick={handleBack}
            className="bg-gray-300 text-gray-800 py-2 px-6 rounded hover:bg-gray-400 transition"
            >
            Volver
            </button>
            <button
            onClick={handleNext}
            className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
            >
            Siguiente
            </button>
        </div>
        </StepFormLayout>
    );
}
