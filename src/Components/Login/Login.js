import { Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import UseAuth from "../../Hooks/UseFirebase";


const Login = () => {
    const { logOut, googleSignin, user } = UseAuth()
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const handlebtn=()=>{
        googleSignin()
        history.push(redirect_uri)
    }
    return (
        <div style={{height:"400px"}}>
            <div className="text-center my-auto" style={{padding:"200px"}}>
            <h1>Please Login</h1>
            <Button onClick={()=>{handlebtn()}}>Sign In via Google</Button>
            </div>
        </div>
    );
};

export default Login;