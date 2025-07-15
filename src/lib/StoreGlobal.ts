import {create} from 'zustand';
import {ICvStore} from '../interfaces/ICvStore';

export const storageGlobal = create<ICvStore>((set) => ({
    cvData: {
        nombre: '',
        apellidos: '',
        jobDescription: '',
        uploadedCvFile: undefined,
    },
    setNombre: (nombre: string) =>
        set((state) => ({
        cvData: { ...state.cvData, nombre },
        })),
    setApellidos: (apellidos: string) =>
        set((state) => ({
        cvData: { ...state.cvData, apellidos },
        })),
    setJobDescription: (jobDescription: string) =>
        set((state) => ({
            cvData: { ...state.cvData, jobDescription },
        })),
    setUploadedCvFile: (file: File | undefined) =>
        set((state) => ({
            cvData: {...state.cvData, uploadedCvFile: file}
        })),
}));