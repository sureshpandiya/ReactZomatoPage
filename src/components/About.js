import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>About Us</h1>
        {/* <div>
          LoggedIn User 
            <UserContext.Consumer>
              {(loggedInUser) => (<h1 className="text-xl font-bold">{loggedInUser}</h1>)}
            </UserContext.Consumer>
        </div> */}
        <h2>About Class Component</h2>
        <UserClass name={"First"} location={"chennai class"} />
      </div>
    );
  }
}

export default About;
