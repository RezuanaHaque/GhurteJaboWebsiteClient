import { Button } from "react-bootstrap";
import UseAuth from "../../Hooks/UseFirebase";


const Login = () => {
    const { logOut, googleSignin, user } = UseAuth()
    return (
        <div style={{height:"400px"}}>
            <div className="text-center my-auto" style={{padding:"200px"}}>
            <h1>Please Login</h1>
            <Button onClick={googleSignin}>Sign In via Google</Button>
            </div>
        </div>
    );
};

export default Login;