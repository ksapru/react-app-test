import React from 'react';

export default function Login() {
    return (
        <div>
            <h1><center>Welcome</center></h1> 

             <form>
             <center><h4> Username: </h4><input></input> <button message="submit" name="submit" value="Submit"> Submit  </button> <p></p></center>
             <center><h4> Password: </h4><input></input>  <button message="submit" name="submit" value="Submit"> Submit  </button> <p></p> </center> 
                
             <center> <h5> If this is a new user, click here: </h5> <button onClick="newuser" message="newUser" value="newUser"> Create an account </button> </center>
             </form>
        </div>
    )
}
