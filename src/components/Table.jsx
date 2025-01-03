import React from 'react'
import { TABLE_LIST } from '../utils/helper'

const Table = () => {
    return (
        <div className='min-h-screen flex bg-[#191423] items-center py-12'>
            <div className="container mx-auto max-w-[1240px]">
                <div className="flex flex-wrap">
                    <div className="xl:w-1/2 lg:w-5/12 w-full px-5">
                        <h1 className="sm:text-[46px] text-4xl font-semibold sm:mb-[50px] mb-8 text-white">Competition</h1>
                        <p className="mb-2 text-white lg:max-w-[381px] xl:max-w-[481px]"> Given our best in class offering, we need to cut through by opting for penetration pricing.</p>
                        <p className="mb-2 text-white lg:max-w-[381px] xl:max-w-[481px]"> This will allow us to disrupt an established market by introducing our product and service at a lower price to entice new customers to purchase or subscribe. This strategy will help us capture the attention of this very large audience in need of a good solution.</p>
                        <p className="mb-2 text-white lg:max-w-[381px] xl:max-w-[481px]"> The current return and refund process centres around either traditional advice or software. By combining both together for an aggressively affordable fee, we think we can capture much of the demand for those people that feel competent in managing their own refunds / returns.</p>
                        <p className="mb-2 text-white lg:max-w-[381px] xl:max-w-[481px]">  As well as being the cheapest in market, our product offers everything a sole trader needs  in one place, whilst pricing innovation of zero commission rather than a commission, will  drive customers that are particularly price sensitive.</p>
                    </div>
                    <div className="xl:w-1/2 lg:w-7/12 w-full max-xl:px-5 max-lg:pt-8">
                        <div className='bg-[#026070]  mx-auto sm:py-14 py-8 px-4 rounded-xl max-md:overflow-x-scroll'>
                            {TABLE_LIST.map((obj, i) => (
                                <div key={i} className={`flex !justify-center ${i === 0 ? "border-none" : "border-t border-black"} w-full max-w-[600px] mx-auto max-md:w-[580px]`}>
                                    <div className={` justify-center ${i === 0 ? "opacity-0" : ""} w-[140px] py-[22px] pr-12`}>
                                        <p className='text-sm font-normal text-white leading-4'>{obj.feature}</p>
                                    </div>
                                    <div className={`w-24 bg-white text-center flex justify-center items-center py-[18.8px] ${i === 0 ? "rounded-t-lg" : i === 6 ? " rounded-b-lg " : ""}`}>
                                        <p className={`text-xs font-semibold ${i === 6 ? "!font-normal !text-[8px] !leading-[9px] max-w-[33px]" : ""}`}>{obj.rift}</p>
                                    </div>
                                    <div className={`w-24 bg-white text-center flex justify-center items-center py-[18.8px] mx-3 ${i === 0 ? "rounded-t-lg" : i === 6 ? " rounded-b-lg " : ""} `}>
                                        <p className={`text-xs font-semibold ${i === 6 ? "!font-normal !text-[8px] !leading-[9px] max-w-[33px]" : ""}`}>{obj.taxscouts}</p>
                                    </div>
                                    <div className={`w-24 bg-white text-center flex justify-center items-center mr-3 py-[18.8px] ${i === 0 ? "rounded-t-lg" : i === 6 ? " rounded-b-lg " : ""}`}>
                                        <p className={`text-xs font-semibold ${i === 6 ? "!font-normal !text-[8px] !leading-[9px] max-w-[48px]" : ""}`}>{obj.coconut}</p>
                                    </div>
                                    <div className={`w-24 text-center flex justify-center items-center bg-[#56E3CB] py-[18.8px] ${i === 0 ? "rounded-t-lg" : i === 6 ? " rounded-b-lg " : ""} `}>
                                        <p className={`text-xs font-semibold ${i === 6 ? "!leading-[9px] !font-normal !text-[8px] max-w-[64px]" : ""}`}>{obj.pie}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table