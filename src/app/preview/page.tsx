'use client';

import { SortableSection } from '@/components/SortableSection';
import { ICvSection } from '@/interfaces/ICvSection';
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, arrayMove, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useState } from 'react';


const initialSections: ICvSection[] = [
    {
        id: 'sec-1',
        type: 'profile',
        title: 'Perfil Profesional',
        content: `Desarrollador frontend con +4 años de experiencia en la creación de interfaces modernas y responsivas. Especializado en React y optimización UX.`,
    },
    {
        id: 'sec-2',
        type: 'experience',
        title: 'Experiencia Profesional',
        content: [
        'Frontend Developer - TechCorp (2021–2024)',
        'Implementación de interfaces en React + Tailwind',
        'Optimización del rendimiento en 40%',
        'Colaboración con diseño UX/UI',
        ],
    },
    {
        id: 'sec-3',
        type: 'education',
        title: 'Educación',
        content: [
        'Grado en Ingeniería Informática - Univ. de Madrid (2015–2019)',
        'Curso Avanzado de React - Udemy (2023)',
        ],
    },
    {
        id: 'sec-4',
        type: 'skills',
        title: 'Habilidades Técnicas',
        content: ['React', 'Next.js', 'Tailwind', 'TypeScript', 'Git', 'Figma'],
    },
];



export default function PreviewPage() {
    const [sections, setSections] = useState<ICvSection[]>(initialSections);

    const sensors = useSensors(useSensor(PointerSensor));

    const handleDragEnd = (event: any) => {
        const { active, over } = event;
        if (active.id !== over?.id) {
        const oldIndex = sections.findIndex((s) => s.id === active.id);
        const newIndex = sections.findIndex((s) => s.id === over.id);
        setSections(arrayMove(sections, oldIndex, newIndex));
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-6 space-y-6">
        <h2 className="text-2xl font-bold text-center">🧾 Previsualización del CV</h2>
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
        >
            <SortableContext items={sections.map((s) => s.id)} strategy={verticalListSortingStrategy}>
            <div className="space-y-6 mt-6">
                {sections.map((section) => (
                <SortableSection key={section.id} section={section} />
                ))}
            </div>
            </SortableContext>
        </DndContext>
        </div>
    );
}
