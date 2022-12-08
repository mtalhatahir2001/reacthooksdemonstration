import Counter from './components/counter/counter';
import Profile from './components/profile/profile';
import {createContext} from 'react';
import { useCustomHook } from './customHook/useCustomHook';

export const UserContext = createContext();

function App() {
  //this is my custom hook use to fetch data using ajax
  let data = useCustomHook("https://api.github.com/users/mtalhatahir2001", "get");
  return <>
      <UserContext.Provider value={data}>
        <Profile/>
        <Counter/>    
      </UserContext.Provider>  
  </>
}

export default App;