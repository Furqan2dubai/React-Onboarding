import React from 'react'

import img from "../../https-repo.png";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
export default function 
({news, setPage, setPost_id}) {

    const Posts = ({data})=>{
        return(
          data.map((e)=>{
            return (
              <div className="post" key={e.id} onClick={()=>{setPost_id(e.id);setPage('single');}}>
                <div className="col-11  bg-white">
                  <img src={(e.id%2) == 1 ? img1 : img2} />
                  <div className="txt">
                    <h5>{e.title}</h5>
                    <p>{e.body}…</p>
                    <b>Read more</b> 
                  </div>
                </div>
              </div> 
            )
        }) 
        );
    }

  return (
    <div>
        <p className="popup">We are now hosting events with Zoom Webinars! <b><u>Find out more</u></b> <span>x</span></p>
        <div className="container d-flex align-items-center flex-column m-5"> 
            <div className="col-12">
                <h1 className=" pt-10 w-full text-center text-cyan-900 font-bold text-4xl">
                    Latest News
                </h1>
                <p className="text-center ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliq.
                </p>
            </div>
            <div className="d-flex align-content: center justify-content-center post_container">
                
                <Posts data={news} />  

            </div>
        </div>
    </div>
  )
}
