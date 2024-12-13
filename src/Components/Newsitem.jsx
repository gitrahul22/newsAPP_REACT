import image1 from '../assets/images.png'
const Newsitem = ({title,description,src,url}) => {
  return (
    
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
        <img src={src?src:image1} style={{ height:"180px",width:"320px"}} className="card-img-top"  alt="Image Not Available" />
        <div className="card-body">
        <h5 className="card-title">{(title || "No Title Available").slice(0, 50)}</h5>
        <p className="card-text">
            {description ? description.slice(0, 50) : "Lorem ipsum dolor sit amet consectetur adipisicing elit." }
        </p>
        <a href={url} className="btn btn-primary">Read More</a>
        </div>
    </div>
  )
}

export default Newsitem


