import React from "react";
import {MyMessage} from "./MyMessage"
// functional welcome component
const WelcomeBanner = props => <h1>{props.message}</h1>;


class Follow extends React.Component {
    constructor() {
      super();
      this.state = {
          welcomeMessage: '',
          myGreeting: 'Ich heise Denis, und ich komt aus America'
        };
       
    }
    //changehandler
    //target is the input field and value is whatever is typed into the input field
    messageChangeHandler = event => {
      console.log(event);
      this.setState({
        welcomeMessage: event.target.value
      });
    };
    
    render() {
      console.log(this.state)
        return (
            <div>
            <MyMessage myGreeting={this.state.myGreeting}/>
            <WelcomeBanner message={this.state.welcomeMessage} />
          
            <input onChange={this.messageChangeHandler} />
        </div>
      );
    }
  }

  export default Follow