import React from "react";
import { useSelector } from "react-redux";
import { Message } from "semantic-ui-react";

export const Error = () => {
  // /const ErrorMSG = useSelector((state) => state.Error.error);
  const ErrorMSG = useSelector((state) => state.Error);
  const AlertMSG = useSelector((state) => state.Alert);

  return (
    <div>
      {AlertMSG.length > 0 ? (
        <Message positive>{AlertMSG}</Message>
      ) : (
        ErrorMSG.map((Error, index) => {
          return (
            <div key={index}>
              <Message negative>{Error}</Message>
            </div>
          );
        })
      )}
    </div>
  );
};
