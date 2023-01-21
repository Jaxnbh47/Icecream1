interface AdProperties{
    flavor: String,
    isLight: Boolean,
    fontSize: Number
}



export function Ad (props: any) {
    return(
        <div className="Ad">
            <p>{props.flavor}</p>
            <p>{props.isLight.toString()}</p>
            <p>{props.fontSize}</p>
        </div>
    )
}