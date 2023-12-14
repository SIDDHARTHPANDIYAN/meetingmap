import React,{useState} from 'react';
import './Signup.css';

function Signup()
{
    const [name,setName]=useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [check,setCPassword]=useState('');
    const ChangeName = (my) => {setName(my.target.value);};
    const ChangeEmail = (my) => {setEmail(my.target.value);};
    const ChangePassword = (my) => {setPassword(my.target.value);};
    const ChangeCPassword = (my) => {setCPassword(my.target.value);};
        return(
            
            <div id="back1">
            <div class='well' id="login_box">
                <div id="welcome">
                
                    <br></br>
                    <h1 id="welcome_txt"></h1><h1 id="title"></h1>
                </div>
                <div>

                <h3 id="email_text">Name</h3>
                    <input type="text" placeholder="Enter your name " id="text" value={name} onChange={ChangeName}></input>
                    <br></br>

                    <h3 id="email_text">Email</h3>
                    <input type="email" placeholder="Enter your email " id="text" value={email} onChange={ChangeEmail}></input>
                    <br></br>

                    <h3 id="password_text">Password</h3>
                    <input type="password" placeholder="Enter your password " id="text" value={password} onChange={ChangePassword}></input>

                    
                    <h3 id="Conf_pass">Confirm Password</h3>
                    <input type="password" placeholder="Confirm your password " id="text" value={check} onChange={ChangeCPassword}></input>
                    <br></br>
                    
                    <h3 id="age">Enter Age</h3>
                    <input type="number" placeholder='Enter your age ' id="text"></input>
                    <br></br><br></br>

                    <h3 id="age">Enter Mobile No</h3>
                    <input type="tel" placeholder='Enter your number ' id="text"></input><br></br><br></br><br></br>

                    <button className="login_button1" >Sign up</button>
                    
                </div>
            </div>
            </div>
        );
}
export default Signup;
