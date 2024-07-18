import React from 'react';
import PlanCard from './PlanCard';

const Plan = () => {
    return (
        <div className='min-h-screen max-w-screen flex justify-start items-center flex-col p-4 overflow-x-hidden overflow-y-auto'>
            <p className='m-6 py-3 sm:py-6 px-10 sm:px-20 h-max max-w-full border-[6px] border-dashed border-blue-500 rounded-lg text-center text-3xl font-semibold font-mono tracking-wide'>Tour Plan</p>
            <PlanCard></PlanCard>
        </div>
    )
}

export default Plan;
