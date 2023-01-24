import { Link } from "react-router-dom";

function footer() {
  return (
    <>
      <div className="footer">
        <p>
          These terms and conditions outline the rules and regulations for the
          use of smileyt's Website, located at smileyt.com. By accessing this
          website we assume you accept these terms and conditions. Do not
          continue to use smileyt if you do not agree to take all of the terms
          and conditions stated on this page.
        </p>
        <p>
          Copyright 2023&copy; by smileyt.com. All Rights Reserved. Smileyt is
          Powered by smileyt.com.
        </p>
        <Link to="privacy">Privacy</Link>
        <Link to="terms">Our Terms&Agreement</Link>
      </div>
    </>
  );
}

export default footer;
