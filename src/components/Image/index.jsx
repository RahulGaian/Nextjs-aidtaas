
let Img = ({src,style,className,onClick}) => {
    //   console.log()
    return(
        <img src={process.env.PUBLIC_URL + src} style={style}  onClick={onClick} className={className} alt="Imagenotfound " />
    )
}
export default Img;

