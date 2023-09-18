import '../App.css';
import {useEffect,useState} from 'react';
import axios from 'axios';

function India() {
    const [news, setnews] = useState([]);
    useEffect(()=>{
      axios.get("https://newsapi.org/v2/everything?q=india&from=2023-08-18&sortBy=publishedAt&apiKey=d7b27f66c1474e1a8105f3e14109f563")
      .then((res)=>{
        setnews(res.data.articles); 
      })
    },[])
    return (
      <div>
        {/* <div style={{backgroundColor:"#279EFF"}}>
          <img src={logo} style={{height:100,width:190,objectFit:"fill",marginLeft:"100px"}}/>
        </div> */}
      <div style={{display:'flex', backgroundColor:"#282c34",margin:0}}>
      <div className='container my-5' >
        <div className='row text-center'>
          {
            news.map((val)=>{
              return(
                <div className='col my-3'>
                  <div className="card" style={{width: "18rem",justifyContent:"space-around",backgroundColor:"#279EFF",borderColor:"#D5FFD0"}}>
                      <img src={val.urlToImage} class="card-img-top" alt="..." style={{width:286,height:200,borderBottom:"black",objectFit:"cover"}}/>
                      <div className="card-body">
                        <h5 className="card-title" style={{fontWeight:"bold"}}>{val.title}</h5>
                        <p className="card-text" style={{maxLines:8}}>{val.description}</p>
                        <a href={val.url} className="btn btn-dark" target='_blank' rel="noreferrer" >Read More</a>
                      </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      </div>
    </div>
    );
  }
  
  export default India;
  