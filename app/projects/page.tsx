'use client';

import React, { useState } from 'react';
import ButtonThemeSwitch from '@/components/button/ButtonThemeSwitch';
import SidebarMenu from '@/components/layout/SidebarMenu';

import ButtonIcon from '@/components/button/ButtonIcon';
import ProjectListMobile from '@/components/ui/project/ProjectListMobile';
import ProjectListDesktop from '@/components/ui/project/ProjectListDesktop';

const ProjectPage = () => {
    const [showProject, setShowProject] = useState('desktop');
    const handleChangeProject = (type: string) => {
        setShowProject(type);
    };
    return (
        <div>
            <div className="fixed right-0 top-5 z-99 my-auto h-[100px] w-[90px]">
                <ButtonThemeSwitch />
            </div>
            <div className="fixed bottom-0 right-0 top-0 z-99 my-auto table w-[100px]">
                <SidebarMenu />
            </div>

            <main className="flex min-h-screen flex-col items-center p-5 lg:p-20">
                <div className="mb-5 text-text-xxl font-semibold text-yellow-600">
                    Latest Project
                </div>
                <div className="flex w-full justify-center gap-2 p-2">
                    <div
                        className={`${showProject === 'desktop' && 'border-yellow-600" border-b'} p-1 transition-all`}
                    >
                        <ButtonIcon
                            icon="radix-icons:desktop"
                            iconSize={34}
                            onClick={() => handleChangeProject('desktop')}
                        />
                    </div>
                    <div
                        className={`${showProject === 'mobile' && 'border-yellow-600" border-b'} p-1 transition-all`}
                    >
                        <ButtonIcon
                            icon="radix-icons:mobile"
                            iconSize={34}
                            onClick={() => handleChangeProject('mobile')}
                        />
                    </div>
                </div>
                {showProject === 'mobile' ? (
                    <ProjectListMobile />
                ) : (
                    <ProjectListDesktop />
                )}
            </main>
        </div>
    );
};

export default ProjectPage;
