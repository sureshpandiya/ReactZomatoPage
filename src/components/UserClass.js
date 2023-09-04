import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 2,
    };
		// console.log("Child Constructor")
  }

	componentDidMount(){
		// console.log("Child Componenrt Did Mount");
	}

  componentWillUnmount(){
    // console.log("Component will UnMount")
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;
		console.log("Child Render")
    return (
      <div className="userCard">
        <h1>count : {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h3>Name: {name}</h3>
        <h4>Location: {location}</h4>
        <h4>Email: @gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
