import React from 'react';

const Card = ({ icon, heading, paragraph }) => {
    return (
        <div style={{border: '1px solid #695441'}} className="bg-gray-50 rounded-lg shadow-md p-4 flex flex-col items-start w-80 h-[330px]">
            <div className="mb-3">
                {icon}
            </div>
            <h3 className="text-lg font-bold mb-2">{heading}</h3>
            <p className="text-gray-700 ">{paragraph}</p>
        </div>
    );
};

export default Card;

