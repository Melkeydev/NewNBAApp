import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Message } from "semantic-ui-react";

export const Error = () => {
  // /const ErrorMSG = useSelector((state) => state.Error.error);
  const ErrorMSG = useSelector((state) => state.Error);
  const AlertMSG = useSelector((state) => state.Alert);

  let renderComponent = <Fragment/>;

  if (AlertMSG.length > 0) {
    renderComponent = (
      <Message positive>{AlertMSG}</Message>
    );
  } else {
    renderComponent = (
      ErrorMSG.map((Error, index) => (
        <div key={index}>
          <Message negative>{Error}</Message>
        </div>
      ))
    );
  }

  return renderComponent;
};
