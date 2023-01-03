
//function component - props is an argument
const HeadingComponent = (props) =>{
    return <div>
      <h1>{props.title}</h1>
      <p>count = {props.count}</p>
    </div> 
  }
  
export default HeadingComponent ;