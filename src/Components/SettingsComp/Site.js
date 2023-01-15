import './Backup.css'
import TitleComp from'../Title'
import { IoToggle } from "react-icons/io5";
function Site(){
    return(
            <div className='container Site pb-3 rounded border m-2 bg-white'style={{maxWidth:"96.5%"}}>
                <TitleComp TitleComp="Site Control" description="Control The Wedsite If There Is Waintenance "/>
                <div className='d-flex align-items-center justify-content-between'>
                    <div>
                        <h6 className="pt-2 ps-2 m-0 ">Wedsite Control</h6>
                        <p className="ps-2 text-black-50">Open/Close Wedsite And Type The Reason</p>
                    </div>
                    <div className='m-1'>
                    <IoToggle size={40} color="#0d6efd"/>
                    </div>
                </div>
                <textarea id="quickTitlebox" placeholder="Your Thought" className="w-100 p-2 mb-3"></textarea>

            </div>
    )
}

export default Site;