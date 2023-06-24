import { useEffect, useState } from "react";
import "./Message.css";

const Message = ({ type, msg }: any) => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    if (!msg) {
      setVisible(false);
      return;
    }

    setVisible(true);
    return;
  }, [msg]);

  return (
    <>
      {visible && (
        <div className="container-message">
          <div className={type} id="message">
            <p>{msg}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Message;
