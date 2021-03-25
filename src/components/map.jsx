import React,{useState,useEffect} from "react";
import { YMaps, Map, Placemark} from "react-yandex-maps";



export default function PageMap(props){
    const [cords, setCords]= useState([]);
    useEffect(()=>{
      console.log("map render");
      window.ymaps.ready(()=>{
        props.address&&props.address.address&&!cords[0]&&window.ymaps.geocode(props.address.address).then((res)=>{
          let comCords=res.geoObjects.get(0).geometry._coordinates;
          setCords(comCords)
        }).catch(()=>{
          console.log("errorsss");
        })
      })
    },[])
   
  
      return(
        <>
        <YMaps>
        <Map width="90%" height="250px" className="yandex-map" defaultState={{
        center: cords,
        zoom: 15,
      }}>
         <Placemark geometry={cords?cords:[40.19203022715642,44.506145671909124]} />
        </Map>
      </YMaps>
      </>
      )
}