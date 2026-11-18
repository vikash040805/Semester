import Counter from "./Counter"
import ChangeName from "./ChangeName"
function App(){
  let name = "Vikash"
  let islogged=true
  return (
    <>
    <h1>Hello World</h1>
    <h2>Welcome {name}</h2>
    {islogged ? <p>Active</p>:<p>Inactive</p>}
    <Counter/>
    <ChangeName />



    </>
  )
}
export default App