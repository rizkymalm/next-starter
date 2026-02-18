import React from 'react';

import {
    ProjectDashboard,
    ProjectKoins,
    ProjectSpace,
} from '@/components/ui/project';

const Project = () => {
    return (
        <div className="relative h-[600vh] w-full max-w-full">
            <div className="relative z-999 m-auto h-[200vh] w-full items-center justify-center">
                <ProjectKoins />
            </div>
            <div className="relative z-999 m-auto h-[200vh] w-full items-center justify-center">
                <ProjectSpace />
            </div>
            <div className="relative z-999 m-auto h-[200vh] w-full items-center justify-center">
                <ProjectDashboard />
            </div>
        </div>
    );
};

export default Project;
