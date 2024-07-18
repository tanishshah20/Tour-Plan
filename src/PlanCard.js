import React, { useState } from 'react';

const planList = [
    {
        id: 1,
        img:'https://cdn.thecodehelp.in/Agra.jpeg',
        price: '35,000',
        place: 'Agra',
        desc: 'Agra is a city in northern India, known for the iconic Taj Mahal, a stunning white marble mausoleum built by Mughal emperor Shah Jahan in memory of his beloved wife. Agra is also home to several other historic and architectural wonders, including Agra Fort and Fatehpur Sikri.'
    },
    {
        id: 2,
        img:'https://cdn.thecodehelp.in/Jaipur.jpeg',
        price: '78,000',
        place: 'Jaipur',
        desc: 'Jaipur is the capital city of the Indian state of Rajasthan, known for its stunning pink-hued buildings and palaces. The city is also known as the "Pink City" due to the color of many of its buildings. Jaipur is famous for its intricate textiles, colorful handicrafts, and delicious cuisine.'
    },
    {
        id: 3,
        img:'https://cdn.thecodehelp.in/Goa.jpeg',
        price: '20,500',
        place: 'Goa',
        desc: 'Goa is a small state on India\'s western coast, known for its stunning beaches, vibrant nightlife, and Portuguese-influenced architecture. The state is also known for its spicy seafood dishes and unique cultural traditions.'
    },
    {
        id: 4,
        img:'https://cdn.thecodehelp.in/Varanasi.jpeg',
        price: '38,500',
        place: 'Varanasi',
        desc: 'Varanasi is a holy city in northern India, situated on the banks of the sacred river Ganges. The city is a major pilgrimage site for Hindus and is famous for its ancient temples, winding alleyways, and colorful festivals.'
    },
    {
        id: 5,
        img:'https://cdn.thecodehelp.in/Darjeeling.jpeg',
        price: '98,000',
        place: 'Darjeeling',
        desc: 'Starting in the colorful port city of Gdańsk, you\'ll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, you\'ll experience mighty Malbork castle, the cobbly-cute village of Toruń, Poland\'s contemporary capital of Warsaw, the spiritual Jasna Góra Monastery, and charming Kraków — Poland\'s finest city. In this land of surprises — so trendy and hip, yet steeped in history — there\'s so much to discover. Join us for the Best of Poland in 10 Days!'
    },
    {
        id: 6,
        img:'https://cdn.thecodehelp.in/Jaisalmer.jpeg',
        price: '66,000',
        place: 'Jaisalmer',
        desc: 'Jaisalmer is a city in the Indian state of Rajasthan, known for its stunning sandstone architecture and its location in the heart of the Thar Desert. The city is home to several impressive palaces and fortresses, as well as unique cultural traditions and handicrafts.'
    },
    {
        id: 7,
        img:'https://cdn.thecodehelp.in/Kochi.jpeg',
        price: '46,000',
        place: 'Kochi',
        desc: 'Kochi is a port city in the Indian state of Kerala, known for its historic connections to trade and commerce. The city is home to several stunning churches, synagogues, and mosques, as well as a rich culinary tradition that blends Indian, Portuguese, and other influences.'
    }
];

const PlanCard = () => {
    const classList1 = "h-[100px] max-w-full mx-3 mt-1 text-base text-wrap overflow-hidden text-ellipsis line-clamp-4";
    const classList2 = "h-max max-w-full mx-3 mt-1 text-base text-wrap";    

    const [List,setList] = useState(planList);
    const [Read, setRead] = useState("Read More");
    const [Class, setClass] = useState(classList1);

    const changeRead = (id) => {
        setList(
            List.map((t)=>{
                if(t.id === id){
                    return{
                        ...t,
                        expand: !t.expand
                    }
                }
                return t;
            })
        )
    }

    const handleRemove = (id) => {
        setList(List.filter((t) => t.id !== id));
    };

    const handleRefresh = () => {
        setList(planList);
    };

    return (
        <div className='h-max w-full m-6 p-6 flex justify-center items-start flex-wrap gap-2'>
        {
            List.length>0 ? (
                List.map((e)=>{
                    const currentClass = e.expand ? classList2:classList1;
                    const currentRead = e.expand ? "Read Less" : "Read More";

                    return(
                        <div className='m-2 p-2 h-max max-w-[350px] sm:max-w-[400px] flex justify-center items-start flex-col border-2 rounded-lg  shadow-[0_0_5px_rgba(0,0,0,0.3)]' key={e.id}>
    
                            <img src={e.img} alt={e.place} className='w-full aspect-square object-center object-cover my-2'></img>
                            
                            <div className='h-max max-w-full mx-2 my-1 flex justify-start items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mx-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                <p className='text-base sm:text-xl font-semibold font-mono'>{e.price}</p>
                            </div>
    
                            <p className='h-max max-w-full mx-3 my-1 text-2xl sm:text-3xl font-semibold font-mono tracking-wide'>{e.place}</p>
    
                            <p className={currentClass}>{e.desc}</p>
                            <span className='mx-3 text-blue-500 underline cursor-pointer' onClick={() => changeRead(e.id)}>{currentRead}</span>
    
    
                            <button className='h-max w-[70%] mx-auto my-3 p-1 text-lg sm:text-xl text-center bg-red-100 border-red-600 border-2 rounded-lg hover:bg-red-600 hover:text-white font-semibold' onClick={() => handleRemove(e.id)}>Not Interested</button>
                        </div>
                    )
                })
            ):(
                <div className='flex justify-center items-center flex-col'>
                    <p className='text-3xl'>No tours left</p>
                    <button className='m-2 p-2 flex justify-center items-center flex-row h-max w-max bg-slate-400 rounded-lg' onClick={()=> handleRefresh()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mx-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                        refresh
                    </button>
                </div>
            )
            
        }
        </div>
    )
}

export default PlanCard;
