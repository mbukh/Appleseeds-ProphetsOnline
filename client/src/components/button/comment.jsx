import React, { useState } from "react";
function CommentButton() {
  const [Comments, setComments] = useState(0);
  const [Commented, setCommented] = useState(false);
  return (
    <button
       className={`Commented-button ${Commented ? 'Commented' : ''}`}
       onClick={() => {
          setComments(Comments + 1);
          setCommented(true);
          // get req to '/Comment'
       }}
    >
       {Commented} Commented
    </button>
 );
}
export default CommentButton;
