import React, { useState } from 'react';

const RoleSelectionPage = () => {
    const [selectedRole, setSelectedRole] = useState(null);

    const handleRoleSelect = (role) => {
        setSelectedRole(role);
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen bg-white text-center relative" dir="rtl">
                <img src="/img/VectorR.png" alt="Vector Decoration" className="absolute top-0 left-0 w-12 h-12 md:w-[90px] md:h-[70px] lg:h-[80px] pointer-events-none z-11 " />
                <img src="/img/VectorL.png" alt="Vector Decoration" className="absolute bottom-0 right-0 w-12 h-12 md:w-[90px] md:h-[70px] lg:h-[80px] pointer-events-none z-11 " />
                {/* Header */}
                <header className="absolute top-9 right-5 flex items-center w-full max-w-md px-6">
                    <img src="/img/framee.png" alt="Logo" className="h-10 w-44" />
                </header>

                {/* Main content */}
                <div className="flex flex-col items-center">
                    {/* Image */}
                    <img src="/img/Screen.png" alt="Background" className="w-[470px] h-[200px] " />
                    {/* Main title */}
                    <h1 className="text-xl font-semibold text-gray-700 mb-2">
                        أهلا بك اختر واحد من الاختيارات التالية لنبدأ!
                    </h1>
                    <p className="text-gray-500 mb-6">أنا أكون ؟</p>

                    {/* Role selection buttons */}
                    <div className="flex gap-10 mb-11">
                        <button
                            onClick={() => handleRoleSelect('معلم')}
                            className={` border rounded-lg `}
                            style={{ width: '85px', height: '80px' }}
                        >
                            <img src="/img/Frameteach.png" alt="Teacher Icon" className="w-full h-full" />
                            <span className={`text-sm font-medium ${selectedRole === 'معلم' ? 'text-green-800' : 'text-gray-500'}`}>
                                معلم
                            </span>
                        </button>
                        <button
                            onClick={() => handleRoleSelect('طالب')}
                            className={` border rounded-lg `}
                            style={{ width: '85px', height: '80px' }}
                        >
                            <img src="/img/Framestd.png" alt="Teacher Icon" className="w-full h-full" />
                            <span className={`text-sm font-medium ${selectedRole === 'طالب' ? 'text-green-800' : 'text-gray-500'}`}>
                                طالب
                            </span>
                        </button>
                    </div>

                    {/* Start button */}
                    <button
                        className="px-8 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition  w-[220px]"
                    >
                        ابدأ الآن
                    </button>
                </div>
            </div>
        </>
    );
};

export default RoleSelectionPage;
