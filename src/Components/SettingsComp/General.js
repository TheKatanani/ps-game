import './General.css'
import TitleComp from'../Title'
function General(){
    return(
            <div className='container General pb-4 rounded border m-2 bg-white'style={{maxWidth:"96.5%"}}>
                <TitleComp TitleComp="General Info" description="General Information About Your Account"/>
                <div className='ps-2'>
                    
                <label htmlFor='FirstName' className='text-black-50'>First Name</label>
                <input type="text" id="FirstName" placeholder='First Name' className='w-100 mt-1   rounded p-2  mb-3'></input>                    
                
                <label htmlFor='lastName' className='text-black-50'>Last Name</label>
                <input type="text" id="lastName" placeholder='Last Name' className='w-100 mt-1 p-2  rounded mb-3'></input>                    
                <div className='d-flex align-items-center justify-content-between row'>
                    <div className='col-10'>
                        <label htmlFor='Email' className='text-black-50'>Email</label>
                        <input type="text" id="Email" placeholder='moha@gmail.com' className='w-100 mt-1 p-2 bg-light rounded mb-3'></input>                    
                    </div>
                    <span className='col-2 '>Change</span>
                </div>
                </div>
            </div>
    )
}

export default General;