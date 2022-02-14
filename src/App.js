import React,{Fragment} from "react";
import Provider from './provider'
import Context from "./context";


const Agents = () => {
  return <AgentOne/>
}

const AgentOne = () => {
  return <AgentTwo/>
}

const AgentTwo = () => {
  return <AgentBond/>
}

const AgentBond = () => {
  return (
    <Context.Consumer>
      {
        (context) => (
          <Fragment>
            <h3>Agent Info.</h3>
            <p>Mission name : {context.data.name}</p>
            <p>agent : {context.data.agent}</p>
            <h2>Mission Status : {context.data.accept}</h2>
            <button onClick={
              context.isAccept
            }>Choose to accept</button>
          </Fragment>
        )
      }
    </Context.Consumer>
  )
}


const App = () => {
  return(
    <div>
      <h1>Context API</h1>
      <Provider>
        <Agents/>
      </Provider>
    </div>
  )
}

export default App;


