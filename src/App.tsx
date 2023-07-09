import Editor from './components/Editor';
import Layout from "./components/Layout"
import "./globals.css"
import ResultDisplayer from './components/Result';

export const App = () => {
  return <Layout>
    <Editor />
    <ResultDisplayer />
  </Layout>
}
