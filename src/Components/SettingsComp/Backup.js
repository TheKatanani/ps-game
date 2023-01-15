import './Backup.css'
import TitleComp from'../Title'
import { RiStackFill } from "react-icons/ri";
function Backup(){

    return(
        <div className='container Backup  pb-5 rounded border m-2 bg-white' style={{maxWidth:"96.5%"}}>
        <TitleComp TitleComp="Backup Manager " description="Control Backup Time And Location"/>
        <ul className='pt-0 p-2 pb-4 border-bottom '>
            <li className='mt-2 align-items-center  d-flex  '>
                <input  className="form-check-input" type="radio" id="QuickDraft"></input>
                <label className="form-check-label" for="QuickDraft">Quick Draft</label>
            </li>
            <li className='mt-2 align-items-center  d-flex '>
                <input  className="form-check-input" type="radio" id="YearlyTargets"></input>
                <label className="form-check-label" for="YearlyTargets">Yearly Targets</label>
            </li>
            <li className='mt-2 align-items-center  d-flex pb-3'>
                <input  className="form-check-input" type="radio" id="TicketsStatisics"></input>
                <label className="form-check-label" for="TicketsStatisics">Tickets Statisics</label>
            </li>
        </ul>
        <div className=' d-flex mamager justify-content-between py-4 m-2'>
            <div className='py-2  px-3 text-center rounded border'>
                <RiStackFill/>
                <h6>Mengaman</h6>
            </div>
            <div className='py-2  px-3 text-center rounded border border-primary'>
                <RiStackFill color='#0d6efd'/>
                <h6>Zero</h6>
            </div>
            <div className='py-2  px-3 text-center rounded border'>
                <RiStackFill/>
                <h6>Sigma</h6>
            </div>
        </div>
    </div>
    )
}

export default Backup;



   
