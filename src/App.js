import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Project from "./components/Project"
import NavBar from "./components/NavBar"
import Post from "./components/Post"
import SinglePost from "./components/SinglePost"
function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route component={Home} path="/" exact/>
        <Route component={About} path="/about" />
        <Route component={Project} path="/projects" />
        <Route component={Post} path="/posts" exact/>
        <Route component={SinglePost} path="/posts/:slug" />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
