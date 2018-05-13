import React from 'react';
import About from './components/about'
import Course from './components/course'
class App extends React.Component {
  render(){
    return(
      <About name={'Carlos'} profession={'Ingeniero'} age={25} skills={["JS","PHP", "MySQL","C#"]}>
      <Course/>
      </About>
    )
  }
}

export default App;
