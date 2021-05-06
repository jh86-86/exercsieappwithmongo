// import React, {useState,useEffect} from 'react';
// import io from 'socket.io-client';
// import TextField from '@material-ui/core/Textfield';
// import '../App.css';

// const socket =io.connect('http://localhost:4000')

function Chatroom() {


    // const[state, setState]=useState({message:'', name:''});
    // const[chat,setChat]=useState([{message:'hi', name:'jj'}]);

    // useEffect(()=>{
    //     socket.on('message',({name,message})=>{
    //         setChat([...chat, {name,message}])
    //     })
    // },[])

    // function onTextChange(e){
    //     setState({...state, [e.target.name]: e.target.value})
    // }

    // function onMessageSubmit(e){
    //     e.preventDefault()  //prevents referesh and clearing state
    //     const{name,message}=state
    //     socket.emit('message', {name,message})
    //     setState({message:'',name})
    // }







    return (
        <div>
            <h1>Chatroom</h1>

            {/* <form onSubmit={onMessageSubmit}>
                <h1>Messanger</h1>
                <div className="name-field">
                    <TextField name="name" 
                        onChange={e => onTextChange(e)} 
                        value={state.name} 
                        label="name"
                        />
                </div>
                <div>
                    <TextField name="message" 
                        onChange={e => onTextChange(e)} 
                        value={state.message} 
                        id="outlined-multiline-static"
                        variant="outlined" //material ui styling
                        label="message"
                        />
                </div>
              <button>Submit</button>  
            </form>
                <div >
                    <h1>Chat log</h1>
                
                    {chat.map((text, i) => (
                        <div key={i}>{text.message}</div>
                      ))}
    
                </div> */}




        </div>
    )
}

export default Chatroom;