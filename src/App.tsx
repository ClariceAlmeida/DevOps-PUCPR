import './App.css'
import Button from './components/Button.tsx'

function App() {
  return (
    <div className="App">
      <div className="tela">
        0.75
      </div>
      <div className="corpo">
          <Button element='AC' className="span3" />
          <Button element='/' className="laranja" />
          <Button element='7' />
          <Button element='8' />
          <Button element='9' />
          <Button element='*' className="laranja" />
          <Button element='4' />
          <Button element='5' />
          <Button element='6' />
          <Button element='-' className="laranja" />
          <Button element='1' />
          <Button element='2' />
          <Button element='3' />
          <Button element='+' className="laranja"     />
          <Button element='0' className="span2" /> 
          <Button element='.' />
          <Button element='=' className="laranja" />
      </div>
    </div>
  )
}

export default App
