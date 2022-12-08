import Die from "./components/Die";
import Text from './components/Text'
import {GlobalStyle,Div,Wrapper} from './components/styled/app.styled';
import {Button} from './components/styled/button.styled'
import React from "react";
function App() {
  const [dice,SetDice]=React.useState(rand());
  const [Tenzies,setTenzies]=React.useState(false);
  React.useEffect(()=>{
    const allHeld=dice.every(die=>die.isHeld);
    const allSame=dice.every(die=>die.value===dice[0].value);
    if(allSame&&allHeld){
      setTenzies(true);
    }
  },[dice])
  function rand(){
    let random=[];
    for(let i=0;i<12;i++){
      random.push({
        value:Math.floor(Math.random() * 6) + 1,
        isHeld:false,
        id:i})
    }
    return random;
  }
  function roll(){
    if(!Tenzies){
      SetDice(oldDice=>oldDice.map(die=>{
        return die.isHeld ? die : {...die,value:Math.floor(Math.random() * 6) + 1}
      }))
    }else{
      SetDice(rand());
      setTenzies(false);
    }
  }
  function holdDice(id){
    SetDice(oldDice=> oldDice.map(die=>{
      return die.id===id ? {...die, isHeld:!die.isHeld} : die
    }))
  }
  const AllDie=dice.map(die=><Die holdDice={()=>holdDice(die.id)} isHeld={die.isHeld} value={die.value} key={die.id} id={die.id}/>)
  return (  
    <Div>
      <GlobalStyle />
      <Text />
      <Wrapper>
        {AllDie}
      </Wrapper>
      <Button onClick={roll}>{Tenzies?'New Game':"Roll"}</Button>
    </Div>
  );
}

export default App;
