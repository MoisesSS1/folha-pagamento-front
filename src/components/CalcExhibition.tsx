import "./CalcExhibition.css";
import axios from "../utils/axios";
import { ChangeEvent, useState } from "react";
import Message from "./Message";

const CalcExhibition = ({ data }: any) => {
  const [dataSave, setDataSave] = useState({});
  const [input, setInput] = useState<string>();
  const [msg, setMsg] = useState<any>();

  async function handleSaveSheet() {
    await axios
      .post("/save", { ...dataSave })
      .then((res) => {
        setMsg({
          type: "sucess",
          msg: res.data.msg,
        });

        setTimeout(() => {
          setMsg("");
        }, 2400);
      })
      .catch((error) => {
        setMsg({
          type: "error",
          msg: error.response.data.msg,
        });

        setTimeout(() => {
          setMsg("");
        }, 2400);
      });
  }

  console.log(msg);

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    setDataSave({ ...data, _id: e.target.value });
    setInput(e.target.value);
  }

  return (
    <div id="CalcExhibition">
      {msg && <Message type={msg.type} msg={msg.msg} />}
      {!data.sat && (
        <>
          <div className="inSheet">
            <h2>Descontos em folha</h2>
            <ul>
              <p>
                Salário Bruto:
                <li className="line">
                  R$ <span>{data.salary}</span>
                </li>
              </p>

              <p>
                INSS em folha:
                <li className="line">
                  R$ <span>{data.inss_in_sheet}</span>{" "}
                </li>
              </p>

              <p>
                Vale transporte:
                <li className="line">
                  R$ <span>{data.transport}</span>
                </li>
              </p>

              <p>
                Vale refeição:
                <li className="line">
                  R$ <span>{data.snack}</span>
                </li>
              </p>
            </ul>

            <p className="line DescTotal">
              Total de descontos: R${" "}
              {data.inss_in_sheet + data.transport + data.snack}
            </p>
            <p className="line totalCost">
              Custo total: R${" "}
              {data.salary +
                data.vacation +
                data.deci_3 +
                data.FGTS +
                data.FGTS_prov}
            </p>
            <p className="line liquid">
              Salário liquido: R${" "}
              {data.salary - (data.inss_in_sheet + data.transport + data.snack)}
            </p>

            {!data._id && (
              <p className="inputSave">
                <input
                  type="text"
                  placeholder="Nome da folha"
                  value={input}
                  onChange={(e) => handleOnChange(e)}
                />
                <button onClick={() => handleSaveSheet()}>Salvar folha</button>
              </p>
            )}
          </div>

          <div className="employer">
            <h2>Pago pelo empregador</h2>
            <ul>
              <p>
                Férias:
                <li className="line">
                  R$ <span>{data.vacation}</span>
                </li>
              </p>

              <p>
                13° Salário:
                <li className="line">
                  R$ <span>{data.deci_3}</span>
                </li>
              </p>

              <p>
                FGTS:
                <li className="line">
                  R$ <span>{data.FGTS}</span>
                </li>
              </p>

              <p>
                {" "}
                FGTS/Provisão de multa para rescisão:
                <li className="line">
                  R$ <span>{data.FGTS_prov}</span>
                </li>
              </p>
            </ul>

            <p className="line DescTotal">
              Pago sobre a folha: R$
              {data.vacation + data.deci_3 + data.FGTS + data.FGTS_prov}
            </p>
          </div>
        </>
      )}

      {data.sat && (
        <>
          <div className="inSheet">
            <h2>Descontos em folha</h2>
            <ul>
              <p>
                Salário Bruto:
                <li className="line">
                  R$ <span>{data.salary}</span>
                </li>
              </p>

              <p>
                INSS em folha:
                <li className="line">
                  R$ <span>{data.inss_in_sheet}</span>{" "}
                </li>
              </p>

              <p>
                Vale transporte:
                <li className="line">
                  R$ <span>{data.transport}</span>
                </li>
              </p>

              <p>
                Vale refeição:
                <li className="line">
                  R$ <span>{data.snack}</span>
                </li>
              </p>
            </ul>

            <p className="line DescTotal">
              Total de descontos: R${" "}
              {data.inss_in_sheet + data.transport + data.snack}
            </p>
            <p className="line totalCost">
              Custo total: R${" "}
              {data.salary +
                data.vacation +
                data.deci_3 +
                data.FGTS +
                data.FGTS_prov +
                data.inss_employer +
                data.incra_sesi_senai +
                data.sat +
                data.education_salary}
            </p>
            <p className="line liquid">
              Salário liquido: R${" "}
              {data.salary - (data.inss_in_sheet + data.transport + data.snack)}
            </p>

            {!data._id && (
              <p className="inputSave">
                <input
                  type="text"
                  placeholder="Nome da folha"
                  value={input}
                  onChange={(e) => handleOnChange(e)}
                />
                <button onClick={() => handleSaveSheet()}>Salvar folha</button>
              </p>
            )}
          </div>

          <div className="employer">
            <h2>Pago pelo empregador</h2>
            <ul>
              <p>
                Férias:
                <li className="line">
                  R$ <span>{data.vacation}</span>
                </li>
              </p>

              <p>
                13° Salário:
                <li className="line">
                  R$ <span>{data.deci_3}</span>
                </li>
              </p>

              <p>
                FGTS:
                <li className="line">
                  R$ <span>{data.FGTS}</span>
                </li>
              </p>

              <p>
                {" "}
                FGTS/Provisão de multa para rescisão:
                <li className="line">
                  R$ <span>{data.FGTS_prov}</span>
                </li>
              </p>

              <p>
                INSS sobre folha:
                <li className="line">
                  R$ <span>{data.inss_employer}</span>
                </li>{" "}
              </p>

              <p>
                SAT :
                <li className="line">
                  R$ <span>{data.sat}</span>
                </li>
              </p>

              <p>
                Salário educação:{" "}
                <li className="line">
                  R$ <span>{data.education_salary}</span>
                </li>
              </p>

              <p>
                INCRA/SEST/SEBRAE/SENAT:{" "}
                <li className="line">
                  R$ <span>{data.incra_sesi_senai}</span>
                </li>
              </p>
            </ul>

            <p className="line DescTotal">
              Pago sobre a folha: R$
              {data.vacation +
                data.deci_3 +
                data.FGTS +
                data.FGTS_prov +
                data.inss_employer +
                data.incra_sesi_senai +
                data.sat +
                data.education_salary}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default CalcExhibition;
