import imgError from "../assets/imgs/error.png";
import { Link } from "react-router-dom";
export const ErrorPage = () => {
  return (
    <div className="card p-1">
      <img src={imgError} alt="Error Page, Something Went Wrong" />
      <Link to="/" className="btn btn-outline-success">
        <strong>Back To Home Page</strong>
      </Link>
    </div>
  );
};
