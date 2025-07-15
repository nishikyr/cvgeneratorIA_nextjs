'use client';


import { ICvSection } from '@/interfaces/ICvSection';
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, arrayMove, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useState } from 'react';


const iaGeneratedSections: ICvSection[] = [
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
    return (
        <div className="space-y-6 mt-6">
            {iaGeneratedSections.map((section) => (
                <div
                key={section.id}
                className="bg-white p-5 rounded-md shadow border border-gray-200"
                >
                <h3 className="text-lg font-bold text-indigo-700 mb-2">{section.title}</h3>
                {Array.isArray(section.content) ? (
                    <ul className="list-disc pl-5 text-gray-800 space-y-1">
                    {section.content.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                    </ul>
                ) : (
                    <p className="text-gray-800 whitespace-pre-line">{section.content}</p>
                )}
                </div>
            ))}
        </div>
    );
}
