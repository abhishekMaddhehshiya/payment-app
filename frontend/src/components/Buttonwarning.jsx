import { Link } from "react-router-dom"
export function Buttonwarning({label,buttonText,to}){
    return <div className="color-gray text-1xl pt-3 ">
        {label} 
        <Link className="underline m-1 cursor-pointer" to={to}> 
            {buttonText} 
        </Link>
    </div>
}