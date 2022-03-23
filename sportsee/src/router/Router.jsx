import { BrowserRouter as Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"; 
import Error from "./pages/Error"
import User from './pages/User';

export default function Router(){

<Routes>

        <Route exact path="/" element={<Home />}/>

        <Route path='/user' element={<User />} />

        <Route path="/*" element={<Error />}/>
          
</Routes>

}
