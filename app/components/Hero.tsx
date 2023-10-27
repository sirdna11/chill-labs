"use client"

import Image from "next/image"
import { CustomButton } from './CustomButton'

export const Hero = () => {
    const handleScroll = ()=>{

    }
  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">
            Browse Our Products
            </h1>

            <p className="hero__subtitle">
            "Explore a variety of items handpicked just for you."
            </p>
            <CustomButton
                title="Explore Products"
                containerStyles="bg-primary-blue text-white rounded-full mt-10"
                handleClick={handleScroll}
            />
            
        </div>
        <div className="hero__image-container">
            <div className="hero__image">
                <Image src="/9212290.jpg" alt="grocery" fill className="object-contain"/>
            </div>
        </div>
    </div>
  )
}
