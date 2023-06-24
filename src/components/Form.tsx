import { ChangeEvent, FormEvent, useState } from "react";
import "./Form.css";
import instance from "../utils/axios";
import CalcExhibition from "./CalcExhibition";
import Message from "./Message";

const Form = () => {
  const [view, setView] = useState(true);
  const [data, setData] = useState<any>({});

  const [grossSalary, setGrossSalary] = useState(0);
  const [transport, setTransport] = useState(true);
  const [snack, setSnack] = useState(0);
  const [businessRegime, setBussinesRegime] = useState("simple");

  const [msg, setMsg] = useState<string | null>();
  const [type, setType] = useState<string | null>();

  function handleSalary(e: ChangeEvent<HTMLInputElement>) {
    const value = Number(e.target.value);
    setGrossSalary(value);
    setMsg(null);
    setType(null);
  }

  function handleSnack(e: ChangeEvent<HTMLInputElement>) {
    const value = Number(e.target.value);
    setSnack(value);
  }

  function handleTransport(value: boolean) {
    setTransport(value);
  }

  function handleRegime(value: "others" | "simple") {
    setBussinesRegime(value);
  }

  async function handleSubmit(e: FormEvent<HTMLInputElement>) {
    e.preventDefault();

    //refatorar para retornar mensagem do erro
    if (grossSalary < 1300) {
      setMsg("O salário deve ser no minimo R$ 1300!");
      setType("error");

      setTimeout(() => {
        setMsg(null);
        setType(null);
      }, 2500);

      return;
    }

    const snackPercent = snack / 100; //converte a o valor de desconto do vale refeição em decimal

    instance
      .post("/calc", {
        grossSalary,
        transport,
        snack: snackPercent,
        businessRegime,
      })
      .then((res: any) => {
        setData(res.data);
        setView(false);
      });
  }

  return (
    <>
      <Message msg={msg} type={type} />
      <div>
        {view && (
          <form id="Form">
            <label className="label">
              Salário bruto R$:
              <input
                type="number"
                min={1300}
                value={grossSalary}
                onChange={(e) => handleSalary(e)}
                step="0.010"
              />
            </label>

            <label className="label">
              % Vale refeição:
              <input
                type="number"
                max={20}
                min={0}
                value={snack}
                onChange={(e) => handleSnack(e)}
              />
            </label>

            <label className="label">
              Recebe vale transporte?
              <p>
                <input
                  type="radio"
                  name="transport"
                  value="true"
                  onChange={() => handleTransport(true)}
                  defaultChecked
                />
                Sim
              </p>
              <p>
                <input
                  type="radio"
                  name="transport"
                  value="false"
                  onChange={() => handleTransport(false)}
                />
                Não
              </p>
            </label>

            <label className="label">
              Qual o regime da empresa ?
              <p>
                <input
                  type="radio"
                  name="businessRegime"
                  value="simple"
                  onChange={() => handleRegime("simple")}
                  defaultChecked
                />
                Simples nacional
              </p>
              <p>
                <input
                  type="radio"
                  name="businessRegime"
                  value="others"
                  onChange={() => handleRegime("others")}
                />
                Outro
              </p>
            </label>

            <label className="label">
              <input
                type="submit"
                value="Calcular descontos"
                onClick={(e) => handleSubmit(e)}
              />
            </label>
          </form>
        )}

        {!view && ( //criar tabela para exibir os dados
          <CalcExhibition data={data} />
        )}
      </div>
    </>
  );
};

export default Form;
