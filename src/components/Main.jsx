import { useState } from "react";

import Styles from "./Main.module.css";
import Form from "./Form";
import Options from "./Options";
import SearchSheet from "./SearchSheet";

const Main = () => {
  const [view, setView] = useState(true);

  return (
    <div className={Styles.Main}>
      <Options setView={setView} />

      {view && (
        <div id={Styles.view}>
          <Form />
        </div>
      )}

      {!view && <SearchSheet />}
    </div>
  );
};

export default Main;
