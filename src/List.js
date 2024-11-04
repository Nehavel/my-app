import React from "react";
import './List.css';
import { useState } from "react";
const items = [
    {title: 'title11', desc: 'ddddddd'},
    {title: 'title12', desc: 'qqqqqqqqqq'},
    {title: 'title13', desc: 'ssssssssss'},
    {title: 'title14', desc: 'ccccccccc'},
    {title: 'title15', desc: 'xxxxxxxx'},
    {title: 'title16', desc: 'zzzzzzz'},
    {title: 'title17', desc: 'mmmmmmmm'}
];

function displayIndex(index){
    alert(index + 1);
}

function Card({item, index}){
   
    function showMore(value){
        console.log(showMoreIndex)
        if(showMoreIndex.includes(value)){
            setShowMoreIndex(showMoreIndex.splice(showMoreIndex.splice(showMoreIndex.indexOf(value),1)));
       
        } else {

            showMoreIndex.push(value)
            setShowMoreIndex(showMoreIndex); 
          
        }
        console.log(showMoreIndex)
    }
    console.log(item)
    return(
        <div className="card">
            <div className="title">
                {item.title}
            </div>
            <div>
                {item.desc}
            </div>   
            {showMoreIndex}
            <div>
            <button onClick={()=> showMore(index)}>Show More</button>          
            <button onClick={()=> displayIndex(index)}>Show my Index</button>
            </div>  
        </div>
    )

}
export default function List() {
    const list = items.map((item,i) =>  (<>

    <Card  key={item.title} item={item} index={i} />
   
    </>));
    return (
     <>
     <div className="list">
     {list}
     </div>
     </>
    );
  }