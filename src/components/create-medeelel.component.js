import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CreateMedeelel extends Component {
  constructor(props) {
    super(props);

    this.onChangeCarDugaar = this.onChangeCarDugaar.bind(this);
    this.onChangeUildverlegch = this.onChangeUildverlegch.bind(this);
    this.onChangeModel = this.onChangeModel.bind(this);
    this.onChangeZasvarUilchilgee = this.onChangeZasvarUilchilgee.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      carDugaar: "",
      uildverlegch: "",
      model: "",
      zasvarUilchilgee: "",
      date: new Date(),
      cars: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/cars/")
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            cars: response.data.map((car) => car.carDugaar),
            carDugaar: response.data[0].carDugaar,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeCarDugaar(e) {
    this.setState({
      carDugaar: e.target.value,
    });
  }

  onChangeUildverlegch(e) {
    this.setState({
      uildverlegch: e.target.value,
    });
  }

  onChangeModel(e) {
    this.setState({
      model: e.target.value,
    });
  }

  onChangeZasvarUilchilgee(e) {
    this.setState({
      zasvarUilchilgee: e.target.value,
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const medeelel = {
      carDugaar: this.state.carDugaar,
      uildverlegch: this.state.uildverlegch,
      model: this.state.model,
      zasvarUilchilgee: this.state.zasvarUilchilgee,
      date: this.state.date,
    };

    console.log(medeelel);

    axios
      .post("http://localhost:5000/medeelluud/add", medeelel)
      .then((res) => console.log(res.data));

    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Машины мэдээлэл нэмэх</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Машины дугаар: </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.carDugaar}
              onChange={this.onChangeCarDugaar}
            >
              {this.state.cars.map(function (car) {
                return (
                  <option key={car} value={car}>
                    {car}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Үйлдвэрлэгч: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.uildverlegch}
              onChange={this.onChangeUildverlegch}
            />
          </div>
          <div className="form-group">
            <label>Модел: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.model}
              onChange={this.onChangeModel}
            />
          </div>

          <div className="form-group">
            <label>Засвар үйлчилгээ: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.zasvarUilchilgee}
              onChange={this.onChangeZasvarUilchilgee}
            />
          </div>

          <div className="form-group">
            <label>Он сар: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Мэдээлэл нэмэх"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
