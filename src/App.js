import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Addservice from './Components/Addservice/Addservice';
import Booknow from './Components/Booknow/Booknow';
import Destination from './Components/Destination/Destination';
import Error from './Components/Error/Error';
import Footer from './Components/Footer/Footer';
import Banner from './Components/Header/Banner';
import Menubar from './Components/Header/Menubar';
import Login from './Components/Login/Login';
import ManageOrderc from './Components/ManageOrderc/ManageOrderc';
import Myorders from './Components/Myorders/Myorders';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AuthProvider from './Context/AuthProvider';

function App() {
  // const {user,logOut,googleSignin}=UseAuth()
  return (

    <AuthProvider>
      <BrowserRouter>
        <Menubar></Menubar>
        <Switch>
          <Route exact path='/'>

            <Banner></Banner>
            <Destination></Destination>

          </Route>
          <Route exact path='/home'>

            <Banner></Banner>
            <Destination></Destination>

          </Route>
          <PrivateRoute exact path='/manageorders'>


            <ManageOrderc></ManageOrderc>

          </PrivateRoute>
          <PrivateRoute exact path='/orders'>


            <Myorders></Myorders>

          </PrivateRoute>
          <Route path='/destination/:destinationID/:index'>

            <Booknow></Booknow>

          </Route>
          <PrivateRoute path="/addnewservice">
            <Addservice></Addservice>
          </PrivateRoute>
          <Route path='/destination'>

            <Destination></Destination>

          </Route>
          <Route path='/login'>

            <Login></Login>

          </Route>
          <Route path='*'>

            <Error></Error>

          </Route>


        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
