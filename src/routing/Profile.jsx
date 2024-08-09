import { Link, Outlet } from "react-router-dom";

const Profile = () => {
    return (
      <div>
        <h1>Hello from profile page!</h1>
        <p>So, how are you?</p>
        <Link to="Popeye">Popeye </Link>

        <Link to="Spinach">Spinach</Link>
        <hr />
      <h2>The profile visited is here:</h2>
      <Outlet />
      </div>
    );
  };
  
  export default Profile;