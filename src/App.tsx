import { Route, Router } from "wouter"
import Editor from './components/Editor';
import Layout from "./components/Layout"
import "./globals.css"
import ResultDisplayer from './components/Result';
import LoadPage from './components/LoadPage';
import { useHashLocation } from "./hooks/useHashLocation";
import { useEffect } from "react";

export const App = () => {
  const [_, navigate] = useHashLocation()

  useEffect(() => {
    navigate("/")
  }, [])


  return <Router hook={useHashLocation}>
    <Route path="/">
      <LoadPage />
    </Route>
    <Route path="/app">
      <Layout>
        <Editor />
        <ResultDisplayer />
      </Layout>
    </Route>
  </Router>

}
