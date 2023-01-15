import TitleComp from'../Title'

function Widgets(){

    return(
        <div className='container Widgets pb-5 rounded border m-2 bg-white' style={{maxWidth:"96.5%"}}>
        <TitleComp TitleComp="Widgets Control" description="Show/Hide Widgets"/>
        <ul className='pt-0 p-2 pb-4'>
        <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
  <label className="form-check-label" HTMLfor="flexCheckDefault">
    Default checkbox
  </label>
</div>
            <li className='mt-2 align-items-center  d-flex  '>
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                <label className='form-check-label' HTMLHTMLfor="flexCheckDefault">Quick Draft</label>
            </li>
            <li className='mt-2 align-items-center  d-flex '>
                <input className="form-check-input" type="checkbox" id="YearlyTargets"></input>
                <label className='form-check-label' HTMLfor="YearlyTargets">Yearly Targets</label>
        
            </li>
            <li className='mt-2 align-items-center  d-flex '>
                <input className="form-check-input" type="checkbox" id="TicketsStatisics"></input>
                <label className='form-check-label' HTMLfor="TicketsStatisics">Tickets Statisics</label>
            
            </li>
            <li className='mt-2 align-items-center  d-flex '>
                <input className="form-check-input" type="checkbox" id="LatestNews"></input>
                <label className='form-check-label' HTMLfor="LatestNews">Latest News</label>
            </li>
            <li className='mt-2 align-items-center  d-flex '>
                <input className="form-check-input" type="checkbox" id="LatestTasks"></input>
                <label className='form-check-label' HTMLfor="LatestTasks">Latest Tasks</label>
            </li>
            <li className='mt-2 align-items-center  d-flex pb-3'>
                <input className="form-check-input" type="checkbox" id="TopSearch"></input>
                <label className='form-check-label' HTMLfor="TopSearch">Top Search Items</label>
            </li>
            
        </ul>


    </div>
    )
}

export default Widgets;