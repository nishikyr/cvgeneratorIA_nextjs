'use client';

import { useRouter } from 'next/navigation';
import { InputText } from '@/components/InputText';
import { StepFormLayout } from '@/components/StepFormLayout';
import { storageGlobal } from '@/lib/StoreGlobal';

export default function FormStep() {
    const router = useRouter();
    const { cvData, setNombre, setApellidos } = storageGlobal();

    const handleNext = () => {
        if (!cvData.nombre || !cvData.apellidos) return alert('Rellena todos los campos');
        router.push('/form/step2');
    };

    return (
        <StepFormLayout>
        <h2 className="text-xl font-semibold mb-6">Fase 1: Nombre y Apellidos</h2>
        <InputText label="Nombre" value={cvData.nombre} onChange={setNombre} />
        <InputText label="Apellidos" value={cvData.apellidos} onChange={setApellidos} />
        <button
            onClick={handleNext}
            className="mt-4 bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
        >
            Siguiente
        </button>
        </StepFormLayout>
    );
}
