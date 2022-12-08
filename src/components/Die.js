import {Div} from './styled/die.styled';
export default function Die(props){  
      return(
            <Div isHeld={props.isHeld} onClick={props.holdDice}>
                  <h2>{props.value}</h2>
            </Div>
      )

}