const Logout = ({ color, text, onClick }) => {
    return (
      <button
        onClick={onClick}
        style={{ backgroundColor: color }}
        className="btn btn-logout"
      >
        {text}
      </button>
    );
  };
  
  export default Logout;
  