function TitleComp(props){
    return(
        <div>
            <h3 className="pt-2 ps-2 m-0 TitleComp">{props.TitleComp}</h3>
            {props.description && <p className="ps-2 text-black-50">{props.description}</p>}
        </div>
    )
}

export default TitleComp;