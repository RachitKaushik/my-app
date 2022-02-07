import React,{useState} from 'react'

export default function About() {
    const [myStyle, setMyStyle] = useState({
        color:'black',
        backgroundColor:'white'
    } )
    const [btntext, setBtntText] = useState('Enable Dark Mode')
    let toggleStyle=()=>{
        if(myStyle.color==='black'){
            setMyStyle({
                color:'white',
                backgroundColor:'black',
                border: '1px solid white'
                
            })
            setBtntText('Enable Light Mode')
        }
        else{
            setMyStyle({
                color:'black',
                backgroundColor:'white'
                
            })
            setBtntText('Enable Dark Mode')
        }

    }

    return (
        <div className="container" style={myStyle}>
            <h2 className="my-3 ">About Us</h2>
            <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button"style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyse your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={myStyle}>
        <strong>Analyse Your Text:</strong> Texters gives you a way to analyse your text quickly and efficiently.Be it a word count or Character count
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>Free to use:</strong> 
          Texters is a free character counter tool that provide instant character count or word counter
          statistics for a given text.Texters reports the number of word and character. Thus it is
          suitable for writing text with word/characher limit. 
        
        
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>Browser compatable</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>Absolutely Browser Compatable:</strong> 
        This word counter work in any web browser such as Chrome, Firefox, Internet Explorer,
        Safari, Opera. It suits to count character in facebook, blogs, books, excel 
        document, pdf document, essays, etcs.
      </div>
    </div>
  </div>
</div>
<div className="container">
<button onClick={toggleStyle} type="button" className="btn btn-dark my-3 mx-3">{btntext}</button>
</div>

        </div>
    )
}
