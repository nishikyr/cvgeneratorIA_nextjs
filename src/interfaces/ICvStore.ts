import { ICvData } from "./ICvData";

export interface ICvStore {
    cvData: ICvData;
    setNombre: (nombre: string) => void;
    setApellidos: (apellidos: string) => void;
    setJobDescription: (jobDescription: string) => void;
    setUploadedCvFile: (file: File | undefined) => void;
}