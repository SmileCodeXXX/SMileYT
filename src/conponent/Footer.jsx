import { Link } from "react-router-dom";

function footer() {
  return (
    <>
      <div className="footer">       
        <Link to="privacy">Privacy</Link>
        <Link to="terms">Our Terms & Agreement</Link>
        <p>
          Copyright 2023&copy; by smileyt.com. All Rights Reserved.
        </p>
      </div>
    </>
  );
}

export default footer;
