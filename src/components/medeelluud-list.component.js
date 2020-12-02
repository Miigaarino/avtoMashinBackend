import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";

const Medeelel = (props) => (
  <tr>
    <td>{props.medeelel.carDugaar}</td>
    <td>{props.medeelel.uildverlegch}</td>
    <td>{props.medeelel.model}</td>
    <td>{props.medeelel.zasvarUilchilgee}</td>
    <td>{props.medeelel.date.substring(0, 10)}</td>
    <td>
      <Link to={"/edit/" + props.medeelel._id}>
        <UpdateIcon />
      </Link>{" "}
      |{" "}
      <a
        href="#"
        onClick={() => {
          props.deleteMedeelel(props.medeelel._id);
        }}
      >
        <DeleteIcon />
      </a>
    </td>
  </tr>
);

export default class MedeelluudList extends Component {
  constructor(props) {
    super(props);

    this.deleteMedeelel = this.deleteMedeelel.bind(this);

    this.state = { medeelluud: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/medeelluud/")
      .then((response) => {
        this.setState({ medeelluud: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteMedeelel(id) {
    axios.delete("http://localhost:5000/medeelluud/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      medeelluud: this.state.medeelluud.filter((el) => el._id !== id),
    });
  }

  medeelelList() {
    return this.state.medeelluud.map((currentmedeelel) => {
      return (
        <Medeelel
          medeelel={currentmedeelel}
          deleteMedeelel={this.deleteMedeelel}
          key={currentmedeelel._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Машинууд</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Машины дугаар </th>
              <th>Үйлдвэрлэгч</th>
              <th>Модел</th>
              <th>Засвар үйлчилгээ</th>
              <th>Он сар</th>
              <th>Үйлдэл</th>
            </tr>
          </thead>
          <tbody>{this.medeelelList()}</tbody>
        </table>
        <br />
        <br />
        <br />
      </div>
    );
  }
}
