/* eslint-disable no-undef */
/* eslint-disable no-unreachable */
import React from "react";
import {Layout} from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MenuTop from "./components/MenuTop";

//Pages
import Home from "./pages/home";
import AlbumList from "./pages/albumList";
import TracksList from "./pages/tracksList";
import TracksDetails from "./pages/tracksDetails";
import Serach from "./pages/serach";
import Error404 from "./pages/error404";


export default function App() {
  const { Header, Content } = Layout;

 //search("hola mundo", "album");asdsad


  return (
    <Layout>
    <Router>
      
     <Header> 
       <MenuTop />
     </Header>

   <Content>
    <Switch>

      <Route path="/" exact={true}>
       <Home />
      </Route>

      <Route path="/albumList" exact={true}>
        <AlbumList />
      </Route>

      <Route path="/tracksList" exact={true}>
        <TracksList />
      </Route>

      <Route path="/tracksDetails" exact={true}>
        <TracksDetails />
      </Route>

      <Route path="/serach" exact={true}>
        <Serach />
      </Route>

      <Route path="/albumList/:id" exact={true}>
        <AlbumList />
      </Route>

      <Route path="*">
        <Error404 />
      </Route>

    </Switch>
   </Content>
 </Router>
</Layout>
  );
}

