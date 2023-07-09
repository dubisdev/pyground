import { Route, Router } from "wouter"
import Editor from './components/Editor';
import Layout from "./components/Layout"
import "./globals.css"
import ResultDisplayer from './components/Result';
import LoadPage from './components/LoadPage';
import { useHashLocation } from "./hooks/useHashLocation";

export const App = () => {
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
