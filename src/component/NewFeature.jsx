import React, { createRef, Component } from "react";

export default class NewFeature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      data: [],
    };
    this.containerRef = createRef();
  }

  componentDidMount() {
    this.fetchData();
    document.addEventListener("click", this.handleOutsideClick, true);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleOutsideClick, true);
  }

  fetchData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      this.setState({ data });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  handleOutsideClick = (e) => {
    if (this.containerRef.current && !this.containerRef.current.contains(e.target)) {
      this.setState({ show: false });
    }
  };

  toggleShow = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    const { show, data } = this.state;

    return (
      <div>
        <button type="button" onClick={this.toggleShow}>
          {show ? "Close Form" : "Open Form"}
        </button>
        {show && (
          <div
            style={{
              width: "300px",
              height: "300px",
              textAlign: "center",
              border: "1px black solid",
              overflow: "auto",
              pointerEvents: "none",
            }}
            ref={this.containerRef}
          >
            <h1>Aviral Malik</h1>
            <p>Hello there, Nice to Meet you</p>
            <div
              style={{
                pointerEvents: "auto",
              }}
            >
              {data.map((item) => (
                <div key={item.id} style={{ pointerEvents: "none" }}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}