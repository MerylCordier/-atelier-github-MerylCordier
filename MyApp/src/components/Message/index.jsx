/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Message as SemanticMessage } from "semantic-ui-react";

const Message = ({ hasError, message, setIsVisible }) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    //On nettoie le useEffect pour etre sure qu'il ne se déclanche pas par la suite de manière involontaire
    return () => {
        clearTimeout(timeOut)
    };
  }, [message]);

  return <SemanticMessage negative={hasError}>{message}</SemanticMessage>;
};
export default Message;
