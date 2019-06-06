import React from "react";
import { Link } from "react-router-dom";

class Listitem extends React.Component {
  render() {
    const { user } = this.props;

    return (

          <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td>{user.remember}</td>
            <td>
              <Link to={`/`} className="btn btn-info">
                view
              </Link>
            </td>
            <td>
              <Link to={`/`} className="btn btn-success">
                edit
              </Link>
            </td>
            <td>
              <Link to={`/`} className="btn btn-danger">
                delete
              </Link>
            </td>
          </tr>
        
    );
  }
}

export default Listitem;
