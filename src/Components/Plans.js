import React from 'react';
import PlansComp from './PlansComp'
class Plans extends React.Component{
    render(){
        return(
            <div className="container Plans row">
            <div className='col-lg-4 col-md-6 col-sm-12'>
            <PlansComp title="Free" price="0.00" features={[1,1,1,0,0,0,0,0,0]} join=" "/>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
            <PlansComp title="Basic" price="7.99" features={[1,1,1,1,1,1,1,0,0]} join=" "/>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
            <PlansComp title="Premium" price="19.99" features={[1,1,1,1,1,1,1,1,1]} />
            </div>
        </div>
    )
}
}

export default Plans;