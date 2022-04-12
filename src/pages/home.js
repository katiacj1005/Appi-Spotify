import React from "react";
import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './home.scss'; 
import { Credentials } from "./credentials";


function Home() {
    
    const [checkedArtist, setCheckArtist] = React.useState(false);
    const [checkedAlbum, setCheckAlbum] = React.useState(false);
    const [checkedPista, setCheckPista] = React.useState(false);
  
    const handledCheckArtist = () => {
      setCheckArtist(!checkedArtist)
    }
  
    const handledCheckAlbum = () => {
      setCheckAlbum(!checkedAlbum)
    }
    const handledCheckPista = () => {
      setCheckPista(!checkedPista)
    }
  
    const clientId = Credentials().ClientId;
    const clientSecret = Credentials().ClientSecret;

    //Funcion asyn/await

    const getToken = async() => {

                const result = await fetch('https://accounts.spotify.com/api/token', {
                    method: 'POST',
                    headers: {
                        'Content-Type' : 'application/x-www-form-urlencoded', 
                        'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
                    },
                    body: 'grant_type=client_credentials'
                });
              
                const data =  result.json();
                return data;
              }     
 

    const _search = async() => {
        var palabraBuscar;
        var tipo;

        const token  = await getToken();
      
      const result = await fetch("https://api.spotify.com/v1/search?type="+ tipo + "&q="+palabraBuscar 
        , {
            method: 'GET',
            headers: { 
                'Authorization' : 'Bearer ' + token.access_token,
                'Content-Type': "application/json"
            },
        });
      
        const data =  result.json();
        console.log(await data);
        return data;
     
      }

  return (
<section>
    
          
    <div cassName='search' id='search'> 
      <input type="text" />
      <Tooltip title="search">
      <Button onClick={_search} type="primary" shape="circle" icon={<SearchOutlined />} />
    </Tooltip>
            </div>

            <div id="checkBox"> 
        

                
                  <div className='artist'>
                  <label>
            <input type="checkbox" checked={checkedArtist} onChange={handledCheckArtist} />
            ARTIST
          </label>
                 </div>
    
                <div className='album'>
                <label>
            <input type="checkbox" checked={checkedAlbum} onChange={handledCheckAlbum} />
            ALBUM
          </label>
                  </div>
               
    
                <div className='pista'>
                <label>
            <input type="checkbox" checked={checkedPista} onChange={handledCheckPista}/>
            PISTA
          </label>
                  </div>
               </div>

    
             </section>
    )
}
 export default Home; 