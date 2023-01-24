import '../css/Ad.css'

interface AdProperties{
    flavor: String,
    isLight: Boolean,
    fontSize: any //something is wrong with my font size input and so forth
}



export function Ad(props:AdProperties) {
    let className = "Ad " + (props.isLight ? "Ad--Light" : "Ad--dark");
    return(
        <div className={className}>
            <p className="VoteFor">Vote For</p>
            <p style={{fontSize: props.fontSize}}>{props.flavor}</p>
        </div>
    )
}