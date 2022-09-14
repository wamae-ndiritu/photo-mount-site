import React from "react";

const Message = ({ variant, children }) => {
  return (
    <div className=" d-flex justify-content-center mt-4">
      <div className={`alert ${variant}`}>{children}</div>
    </div>
  );
};

Message.defaultProps = {
  variant: "alert-info",
};

export default Message;
