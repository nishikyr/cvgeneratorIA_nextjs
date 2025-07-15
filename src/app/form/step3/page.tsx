'use client';

import { useRouter } from 'next/navigation';
import { StepFormLayout } from '@/components/StepFormLayout';
import { FileUploader } from '@/components/FileUploader';
import { storageGlobal } from '@/lib/StoreGlobal';
import { showError, showSuccess } from '@/utils/alerts';

export default function UploadStep() {
    const router = useRouter();
    const { cvData, setUploadedCvFile } = storageGlobal();

    const handleNext = () => {
        if (!cvData.uploadedCvFile) {
            return showError('Por favor sube tu CV antes de continuar.');
        }
        // Aquí podríamos hacer la llamada a la IA (en el próximo paso)
        router.push('/preview');
    };

    const handleBack = () => {
        router.push('/form/step2');
    };

    return (
        <StepFormLayout>
            <h2 className="text-xl font-semibold mb-6">Fase 3: Subir tu CV</h2>
            <FileUploader
                currentFile={cvData.uploadedCvFile}
                onFileSelect={setUploadedCvFile}
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
                className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 transition"
                >
                Generar
                </button>
            </div>
        </StepFormLayout>
    );
}
