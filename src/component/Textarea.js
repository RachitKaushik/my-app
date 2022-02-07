import React,{useState} from 'react'


export default function Textarea(props) {
    const handleonchange = (event)=>{
        console.log("on change function fired");
        setText(event.target.value);
    }
    const handleonclick = ()=>{
        console.log("Uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
       
        
        

    }
    const handleonclickl=()=>{
        let newText=text.toLowerCase();
        setText(newText);
      
      
        
        
    }
    
    
    const handleonclickclr = ()=>{
        console.log("Uppercase was clicked");
        let newText="";
        setText(newText);
       
    }
    const handleCopy=()=>{
        let newText=document.getElementById("MyBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
       
        
    }
    const[text, setText]=useState('Enter text here');

    return (
        <>
        <div>
            

<div className="mb-3" style={{color: props.mode==="dark"?"white":"rgb(3 10 40)"}} >
<h1>{props.heading}</h1>
  <label htmlFor="textarea" className="form-label">Example textarea</label>
  <textarea className="form-control" id="MyBox" value={text} onChange={handleonchange} style={{backgroundColor: props.mode==="dark"?"#1e3144":"white",color:props.mode==="dark"?"white":"rgb(3 10 40)"}} rows="8"></textarea>
  
</div>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleonclick}>Convert to uppercase</button>
<button  disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleonclickl}>Convert to uppercase</button>

<button  disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleonclickclr}>Clear Text</button>
<button  disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>

        </div>
        
        <div className="container my-4"style={{color: props.mode==="dark"?"white":"rgb(3 10 40)"}} >
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} Character</p>
            <p>{0.008 * text.length} Minute read </p>
            <h3>Preview</h3>
            <hr/>
            <p>{text.length>0?text:" Nothing to preview!Enter something in the textbox above to preview it here"}</p>
            <hr/>
        </div>
        </>
    )
}
