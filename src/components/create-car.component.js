import React, { Component } from "react";
import axios from "axios";

export default class CreateCar extends Component {
  constructor(props) {
    super(props);

    this.onChangeCarDugaar = this.onChangeCarDugaar.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      carDugaar: "",
    };
  }

  onChangeCarDugaar(e) {
    this.setState({
      carDugaar: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const car = {
      carDugaar: this.state.carDugaar,
    };

    console.log(car);

    axios
      .post("http://localhost:5000/cars/add", car)
      .then((res) => console.log(res.data));

    this.setState({
      carDugaar: "",
    });
  }

  render() {
    return (
      <div>
        <h3>Шинэ Машин Нэмэх</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Машины дугаар: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.carDugaar}
              onChange={this.onChangeCarDugaar}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Машин Нэмэх"
              className="btn btn-primary"
            />
          </div>
        </form>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
