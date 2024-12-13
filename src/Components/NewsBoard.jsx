import { useEffect } from "react";
import { useState } from "react";
import Newsitem from "./Newsitem";
const NewsBoard = ({cat}) => {

    const[articles,setArticles] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${cat}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url) 
            .then((response) => response.json())
            .then((data) => {
                console.log("Fetched articles:", data.articles);
                setArticles(data.articles);
            });
    }, [cat]);
    

  return (
    <div>
        <h2 className="text-center">Latest <span className="badge bg-danger">News</span> </h2>
        
        {articles.map((news,index)=>{   
            return <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
        })} 
    </div>
  )
}

export default NewsBoard 