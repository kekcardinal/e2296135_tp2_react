import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ title, showAdd, onAdd }) => {
  const location = useLocation();
  return (
    <header className="header">
      {/* <h1 style={headingStyle}>{props.title}</h1> */}
      {/* <h1>{title}</h1> */}
      {location.pathname === "/portail" && (
        <Button
          text={showAdd ? "Close" : "Ajouter"}
          color={showAdd ? "red" : "green"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

/*const headingStyle = {
    color : 'red',
    background:'Black'
}*/

export default Header;
