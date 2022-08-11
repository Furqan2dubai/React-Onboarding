import React from "react";
import "../styles/Home.css";
import {useState , useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import List from "./List";
import Single from "./Single";

function Home() {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([1,2,3]);
  const [page, setPage] = useState('home');  
  const [post_id, setPost_id] = useState(0);  

  const getPost = async() => {
    try{
      const data = await fetch('https://jsonplaceholder.typicode.com/posts/');
      
      setNews(await data.json()); 
      setLoading(false);
    }
    catch(error){
      console.log(error);
      setLoading(true);

    }
  }

  useEffect(()=>{
    getPost();
    console.log(news);
  }, []) ;

 
  const Loading = () => {
    return (
      <div className='d-flex p-2'>loading...</div>
    )
  }



 if(loading){
    return(<Loading/>)
  }
  return (
    <>
      {
      (page=='home') ? 
      <List news={news} setPage={(e)=>setPage(e)} setPost_id={id=>setPost_id(id)} />
      :
      <Single setPage={(e)=>setPage(e)} post_id={post_id} />
    }
    </>
  );
}


export default Home;
