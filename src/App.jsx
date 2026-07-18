import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "./layout/AppLayout"

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout /> } >
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
