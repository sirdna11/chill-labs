import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title:string;
    containerStyles?:string;
    handleClick?:MouseEventHandler<HTMLButtonElement>
    btnType?:"button"|"submit"
}

export interface SearchCategoryProps{
    category:string;
    setCategory:(category:string)=>void
}