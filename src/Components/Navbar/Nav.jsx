import "./Nav.scss";
import { useAuth0 } from "@auth0/auth0-react";


//importing icons
import { MdLocalShipping, MdOutlineAccountCircle } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { CiLogout } from "react-icons/ci";

//importing images
import logo from "../../assets/logo.webp";
import { Link } from "react-router-dom";

const Nav = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  return (
    <div>
      <div className="header">
        <div className="top-header">
          <div className="icon">
            <MdLocalShipping />
          </div>
          <div className="info">
            <p>Free Shipping when upto 100$</p>
          </div>
        </div>
        <div className="mid-header">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="search-box">
            <input type="text" placeholder="input" />
            <button>
              <AiOutlineSearch />
            </button>
          </div>
          {isAuthenticated ? (
            //if provided details is authenticate then the logout will appear
            <div className="user">
              <div className="icon">
                <CiLogout />
              </div>
              <div className="btn">
                <button
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            // if the person hasnot made his id then login will appear
            <div className="user">
              <div className="icon">
                <FiLogIn />
              </div>
              <div className="btn">
                <button onClick={() => loginWithRedirect()}>Login</button>
              </div>
            </div>
          )}
        </div>
        <div className="last-header">
          <div className="user-profile">
            {isAuthenticated ? (
              <>
                <div className="icon">
                  <MdOutlineAccountCircle />
                </div>
                <div className="info">
                  <h2>{user.name}</h2>
                  <p>{user.email}</p>
                </div>
              </>
            ) : (
              <>
                <div className="icon">
                  <MdOutlineAccountCircle />
                </div>
                <div className="info">
                  <p>Please Login</p>
                </div>
              </>
            )}
          </div>
          <div className="nav">
            <ul>
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
                <Link href="/shop" className="link">
                  shop
                </Link>
                <Link href="/collection" className="link">
                  Collection
                </Link>
                <Link href="/about" className="link">
                  About
                </Link>
                <Link href="/contact" className="link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="offer">
            <p>Flat 10% off over all product</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
