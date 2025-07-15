export type CvSectionType = 'profile' | 'education' | 'experience' | 'skills' | 'contact';


export interface ICvSection {
    id: string;
    type: CvSectionType;
    title: string;
    content: string | string[];
}