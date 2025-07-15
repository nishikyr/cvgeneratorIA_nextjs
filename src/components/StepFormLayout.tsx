'use client';

import React from 'react';

export const StepFormLayout = ({ children }: { children: React.ReactNode }) => (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl">
        {children}
        </div>
    </main>
);
