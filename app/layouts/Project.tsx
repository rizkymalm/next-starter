import React from 'react';

import {
    ProjectDashboard,
    ProjectKoins,
    ProjectSpace,
} from '@/components/ui/project';

const Project = () => {
    return (
        <div className="relative h-[1800vh] w-full max-w-full">
            <ProjectKoins />
            <ProjectSpace />
            <ProjectDashboard />
        </div>
    );
};

export default Project;
