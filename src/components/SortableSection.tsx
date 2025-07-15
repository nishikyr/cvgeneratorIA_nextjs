'use client';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { ICvSection } from '@/interfaces/ICvSection';
import React from 'react';

interface Props {
    section: ICvSection;
}

export const SortableSection: React.FC<Props> = ({ section }) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id: section.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.4 : 1,
    };

    return (
        <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className="bg-white p-5 rounded-md shadow border border-gray-200 cursor-move"
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
    );
};
