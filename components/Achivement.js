"use client"
import React from 'react'
import dynamic from 'next/dynamic'
const AnimatedNumbers=dynamic(
    ()=>{
    return import("react-animated-numbers");
    },
    {ssr:false}
);

const achivementsList = [
    {
        metric: " Expert Technician", 
        value: "50",
        postfix:"+"
    },
    {
        metric: "On Going Projects",
        value: "80",
        postfix:"+"
    },
    {
        metric: "Complete Projects",
        value: "380",
        postfix:"+"
    },
    {
        // prefix:"~",
        metric: "Happy Customer",
        value: "3000,000",
        postfix:"+"

    },
    {
        metric: "Years",
        value: "7",
        postfix:"+"
    },
]

const AchivementSection = ({margin}) => {
    return (
        <div className='py-8 lg:px-4 xl:gap-16 sm:py-16  xl:px-16'>
            {/* <div className='border-[#33353F] border rounded-md py-8 px-16 flex flex-row items-center justify-between'> */}
            <div className='  md:px-8 grid grid-cols-1 md:grid-cols-5      items-center justify-between'>
                {achivementsList?.map((achive, i) => {
                    return (
                        <div key={i} className='  bg-primary md:mt-0 mt-5 text-center mx-4 rounded-xl p-3 '>
                            <h2 className='text-black text-4xl justify-center  font-bold flex flex-row'>
                                {/* {achive?.prefix} */}
                                <AnimatedNumbers includeComma 
                                animateToNumber={parseInt(achive?.value)} 
                                locale='en-US'
                                className='text-black text-center  text-4xl font-bold'
                                configs={((_,index)=>{
                                    return{
                                        mass:1,
                                        friction:100,
                                        tensions:140 * (index + 1)
                                    }
                                })}
                                />
                                 {achive?.postfix}
                                </h2>
                            <p className='text-black  font-bold text-center text-base'>{achive?.metric}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AchivementSection