// import './Social.css'
import TitleComp from'../Title'
import { FaFacebookF ,FaTwitter,FaYoutube,FaLinkedinIn} from "react-icons/fa";

function Social(){

    return(
        <div className='container Social pb-3 rounded border m-2 bg-white' style={{maxWidth:"96.5%"}}>
        <TitleComp TitleComp="Social Info" description="Social Media Information"/>
        <ul className='m-2 p-2 pt-0 pb-2'>
            <li className='mt-3 align-items-center justify-content-between d-flex bg-light rounded border '>
                <div className='d-flex align-items-center justify-content-between'>
                <div className='p-2 border-end'>
                <FaTwitter size={22} color="#999"/>
                </div>
                <p className='text-black-50 m-2'>Twitter Username</p>
                </div>
            </li>
            <li className='mt-3 align-items-center justify-content-between d-flex bg-light rounded border'>
                <div className='d-flex align-items-center justify-content-between'>
                <div className='p-2 border-end'>
                <FaFacebookF size={22} color="#999"/>
                </div>
                <p className='text-black-50 m-2'>Facebook Username</p>
                </div>
        
            </li>
            <li className='mt-3 align-items-center justify-content-between d-flex bg-light rounded border'>
                <div className='d-flex align-items-center  justify-content-between'>
                <div className='p-2 border-end'>
                <FaYoutube size={22} color="#999"/>
                </div>
                <p className='text-black-50 m-2'>Youtube Username</p>
                </div>
            
            </li>
            <li className='mt-3 align-items-center justify-content-between d-flex bg-light rounded border'>
                <div className='d-flex align-items-center justify-content-between'>
                <div className='p-2 border-end'>
                <FaLinkedinIn size={22} color="#999"/>
                </div>
                <p className='text-black-50 m-2'>LinkedinIn Username</p>
                </div>
            
            </li>
            
        </ul>
    </div>
    )
}

export default Social;