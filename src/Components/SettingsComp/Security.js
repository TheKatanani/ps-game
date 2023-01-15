import "./Security.css"
import TitleComp from'../Title'
import Switches from '../Switches '
function  Security(){
    return(
        <>
        <div className="container Security pb-5 rounded border m-2 bg-white" style={{maxWidth:"96.5%"}}>
        <TitleComp TitleComp="Security Info" description="Security Information Avout Your Account"/>
        <div className="d-flex align-items-center justify-content-between">
            <div>
            <h6 className="pt-2 ps-2 m-0 ">Passowrd</h6>
            <p className="ps-2 text-black-50">Last Change On 25/10/2021</p>
            </div>   
            <div className="d-flex me-2">
                <button type="button" className="btn btn-primary ms-auto">change</button>
                </div>
        </div>
        <div className="d-flex align-items-center justify-content-between border-top">
            <div>
            <h6 className="pt-2 ps-2 m-0 ">Two-Factor Authentication</h6>
            <p className="ps-2 text-black-50">Enable/Disable The Feature</p>
            </div>   
            <Switches />
        </div>
        <div className="d-flex align-items-center justify-content-between border-top pb-4">
            <div>
            <h6 className="pt-2 ps-2 m-0 ">Passowrd</h6>
            <p className="ps-2 text-black-50">Last Change On 25/10/2021</p>
            </div>   
            <span className='rounded py-1 px-2 bg-light border btn'>Devices</span>
        </div>
        </div>
        </>
    )
}

export default Security;