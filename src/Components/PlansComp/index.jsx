/* eslint-disable array-callback-return */
import './styles.css'
import {BsInfoCircleFill} from "react-icons/bs";
function  PlansComp(props){
    let features =["access all lessons","access all videos lesons","appear on lesder","access all lessons","access all videos lesons","appear on lesder","access all lessons","access all videos lesons","appear on lesder"]
    return(
        <div className="container pb-2 m-2 bg-light p-2 PlansComp">
            <div className={`${props.title} p-4 text-center`}>
                <h5 className='m-0 p-0'>{props.title}</h5>
                <span className='price m-0 p-0'>{props.price}</span>
            </div>
            <div>
                {props.features.map((x,i)=>   
                    (
                        <>
                        <div key={i} className="d-flex justify-content-between border-bottom mt-2 p-1 align-items-center">
                            <p><span className="p-2">{x===1?"✔":"❌"}</span>
                                {features[i]}     
                            </p>
                        <BsInfoCircleFill color="#777"/>
                        </div>
                        </>
                    )
                )}
            </div>
            <div>

            {props.join?
            <button className={`btn rounded p-1 m-2 ${props.title}`}>Jion</button>:
            <p className='text-center p-1 m-2 text-black-50'>this is your Current Plan</p>
        }
        </div>
        </div>
    )
}

export default PlansComp;



/*
            <PlansComp title="Free" price="0.00" fetures={[1,1,1,0,0,0,0,0,0]}/>
            <PlansComp title="Basic" price="7.99" fetures={[1,1,1,1,1,1,1,0,0]}/>
            <PlansComp title="Premium" price="19.99" fetures={[1,1,1,1,1,1,1,1,1]} join/>


              props.features.map((x)=>{(

                        
                        <div className="d-flex justify-content-center">
                            <p>{x===1?<span>✔</span>:<span>❌</span>}
                                {features[0]}     
                            </p>
                        </div>
            (<BsInfoCircleFill/>)
            )
            }
            )

*/ 