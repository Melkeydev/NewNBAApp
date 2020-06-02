import React from "react";
import { useSelector } from "react-redux";
import { Message } from "semantic-ui-react";

export const Error = () => {
  const ErrorMSG = useSelector((state) => state.Error.error);

  return (
    <div>
      {" "}
      {ErrorMSG.length > 0 && (
        <div>
          <Message negative>{ErrorMSG}</Message>
        </div>
      )}{" "}
    </div>
  );
};
