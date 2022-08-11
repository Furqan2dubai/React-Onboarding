import React from 'react' 
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import {useState , useEffect} from 'react';
export default function single({setPage, post_id}) {

    const [data, setData] = useState([]);  
    const [comments, setcomments] = useState([]);  
    const getPost = async() => {
        try{
          const data = await fetch('https://jsonplaceholder.typicode.com/posts/'+post_id);
          
          setData(await data.json());  
        }
        catch(error){
          console.log(error); 
        }
      }
    const getComment = async() => {
        try{
          const data = await fetch('https://jsonplaceholder.typicode.com/posts/'+post_id+'/comments');
          
          setcomments(await data.json());  
          console.log(comments); 
        }
        catch(error){
          console.log(error); 
        }
      }
    
      useEffect(()=>{
        getPost(); 
        getComment(); 
      }, []) ;

 
      
    const Comment = ()=>{
        return(
          comments.map((e)=>{
            return (
            <div className='col-12'>
                <b> {e.email} </b>
                <p> {e.body} </p>
                <div className='line'></div>
            </div>
            )
         }) 
        );
    }

  return (
    <div className="container d-flex align-items-center flex-column">
        <div className='col-8 p-5'>
            <b onClick={(e)=>setPage('home')}>Back</b> 
            <h1><b>{data.title}</b></h1>
            <img src={data.id%2 ==1 ? img1 : img2} className='m-auto p-5'/>
            <p>
                {data.body}
            </p>

            <div style={{borderBottom:'1px solid black'}}></div>
            <div className='col-12 comment_section m-5'>
                <h3>Comments (4)</h3>
                <input type="text" placeholder='Email'/>
                <div className='col-10 p-5'>

                    <Comment  />
                    
                    
                    
                </div>
            </div>
        </div>
    </div>
  )
}
