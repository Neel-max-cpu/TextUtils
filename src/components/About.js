import React from 'react'

export default function About(props) {
    
    // const [myStyle, setMyStyle] = useState(  
    // {
    //     color : 'black', 
    //     backgroundColor: 'white'    
    // });

    let myStyle = {
        color: props.mode === 'dark'? 'white' : 'rgb(0 0 0 / 85%)',
        // color: props.mode === 'light'? 'black' : 'white',
        backgroundColor: props.mode === 'dark'? 'rgb(39 36 36 / 85%)' : 'white',
        // backgroundColor: props.mode === 'light'? 'white' : 'rgb(0 0 0 / 85%)',

        border: '1px solid ',
        borderColor: props.mode === 'dark'? 'white' : 'rgb(0 0 0 / 85%)'
    }


    // const [btnText, setBtnText] = useState("Enable Dark Mode");
    

    
    // const toggleStyle = () =>{
    //     if(myStyle.color === 'black'){
    //         setMyStyle({
    //             color : 'white', 
    //             backgroundColor: 'black',   
    //             border: '1px solid white' 
    //         })
    //         setBtnText("Enable Light Mode");
    //     }
    //     else{
    //         setMyStyle({
    //             color : 'black', 
    //             backgroundColor: 'white'    
    //         })
    //         setBtnText("Enable Dark Mode");
    //     }
    // }


  return (
    <div classNameName="container" style={{color: props.mode === 'dark'? 'white' : 'rgb(0 0 0 / 85%)'}}>
        <h1 className="my-5">About Us</h1>
        <div class="accordion" id="accordionExample" style={myStyle}>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze Your Text</strong>
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div class="accordion-body" style={myStyle} >
                        {/* <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
                        Textutils give you a way to analyze your text quickly and efficiently. Be it word count, 
                        character count or previewing your text. It can help you to <b>Capitalize</b> your text; <b>LowerCase</b> your text; <b>Clear</b> your text;
                        make you text in <b>aLtErNaTiNg</b> manner; <b>Copy</b> your text; <b>Speak</b> out loud; and finally <b>Remove</b> extra spaces.
                    </div>
                </div>
            </div>
            <div class="accordion-item" >
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>
                    Free To Use
                    </strong>
                </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body" style={myStyle} >
                        {/* <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
                        TextUtils is a free character counter tool that provides instant character count & word count statistics
                        for a given text. TextUtils reporst the number fo words and characters. Thus it is suitable for writing text with word/ character limits.
                        TextUtils is an Open Source project.                                                
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browse Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body" style={myStyle} >
                        {/* <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
                        This word counter software works in any web browsers such as Chrome, Firfox, Safari, Opera etc. It suits to count characters in facebook, blog,
                         books, excel document, pdf document , essay, etc. It also works well in mobile platforms.                         
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    <strong>Creator</strong>
                </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body" style={myStyle} >
                        {/* <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
                        This App is made by <strong>Neel Bhattacharya</strong>. It is made in React. Made with the helps of youtube video, and react js documantation, and as a react project this is my first react app. Hope you all like it.
                        🎉🥳
                    </div>
                </div>
            </div>
        </div>   
        {/* <div className="container my-3" >
            <button onClick={toggleStyle} type="button" className="btn btn-primary" >{btnText}</button>      
        </div> */}
    </div>
  )
}
