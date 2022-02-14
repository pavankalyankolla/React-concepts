import react,{useState} from "react";

import PackageContext from './context'

//creating provider

const Provider = props => {
    const [mission,setMission] = useState({
        name : "Go to US",
        agent : "007",
        accept : "Not accepted"
    })
    return(
          <PackageContext.Provider 
          value={{
              data : mission,
              isAccept : () => {
                  setMission({...mission,accept:"ACCEPTED"})
              }
              }}>
              {props.children}
          </PackageContext.Provider>
    )
}


export default Provider