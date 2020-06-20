import React, { Fragment } from "react";
import { useSelector } from "react-redux";

//AntD
import { Alert } from "antd";

export const Error = () => {
  // /const ErrorMSG = useSelector((state) => state.Error.error);
  const ErrorMSG = useSelector((state) => state.Error);
  const AlertMSG = useSelector((state) => state.Alert);

  let renderComponent = <Fragment />;

  if (AlertMSG.length > 0) {
    renderComponent = <Alert message={AlertMSG} type="success" />;
  } else {
    renderComponent = ErrorMSG.map((Error, index) => (
      <div key={index}>
        <Alert message={Error} type="error" />
      </div>
    ));
  }

  return renderComponent;
};
