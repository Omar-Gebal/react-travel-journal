import Blog from "./Blog"
import '../styles/Main.css';
import data from '../data.js';

export default function Main(props){
    const blogs = data.map((blog, i) => {
        return(
        <div key={blog.id}>
            <Blog 
                items={blog} 
            />
            {i + 1 !== data.length && <hr/>}
        </div>
        )
    })
    return(
        <section className="main">
            {blogs}
        </section>
    )
}