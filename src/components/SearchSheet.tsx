import "./SearchSheet.css";
import { useState, ChangeEvent } from "react";
import instance from "../utils/axios";
import CalcExhibition from "./CalcExhibition";
import Message from "./Message";

const SearchSheet = () => {
  const [search, setSearch] = useState<string>();
  const [data, setData] = useState<any>();
  const [msg, setMsg] = useState<any>({
    type: null,
    msg: null,
  });

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  function handleSearch(e: React.MouseEvent<HTMLButtonElement>) {
    instance
      .post("/search", {
        _id: search,
      })
      .then((res: any) => {
        setData(res.data.sheet);
      })
      .catch((error) => {
        setMsg({
          type: "error",
          msg: error.response.data.msg,
        });

        setTimeout(() => {
          setMsg({
            type: null,
            msg: null,
          });
        }, 2500);
      });
  }

  return (
    <>
      {!data && (
        <div id="search_sheet">
          <Message type={msg.type} msg={msg.msg} />
          <input
            id="input-search"
            placeholder="Digite o id da folha"
            type="search"
            value={search}
            onChange={(e) => handleOnChange(e)}
          />

          <button className="btn btn-search" onClick={(e) => handleSearch(e)}>
            Buscar folha
          </button>
        </div>
      )}

      {data && <CalcExhibition data={data} />}
    </>
  );
};

export default SearchSheet;
