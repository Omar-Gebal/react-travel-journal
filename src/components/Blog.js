import '../styles/Blog.css';

export default function Blog({items}){
    //destructuring items
    const {title, location, googleMapsUrl, startDate, endDate, description, imageUrl} = items;
    //image links
    const coverImg = imageUrl;
    const locationIcon = 'https://img.icons8.com/color/48/000000/marker--v1.png';
    
    return(
        <section className="blog">
            <div className='cover-container'>
                <img className="cover" src={coverImg} alt={title}/>
            </div>
            <div className="blog-content">
                <div className="location">
                    <img src={locationIcon} alt='location icon'/>
                    <h3 className="country">{location}</h3>
                    <a className="googlemaps" target="_blank" href={googleMapsUrl} rel='noreferrer'>View on Google Maps</a>
                </div>
                <h1>
                    {title}
                </h1>
                <h2>
                    {startDate} - {endDate}
                </h2>
                <p className="description">
                   {description}
                </p>
            </div>
        </section>
    )
}