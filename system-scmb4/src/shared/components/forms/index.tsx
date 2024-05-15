import React, { useState, ChangeEvent, FormEvent } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { PlanoDeFundo } from "../../../assets";
import Image from "next/image";

interface FormInputs {
  projeto: string;
  endereco: string;
  tipoEdificacao: string;
  areaProjeto: string;
  etapaProjeto: string;
  objetivoProjeto: string;
}

const Formulario: React.FC = () => {
  const [inputs, setInputs] = useState<FormInputs>({
    projeto: "",
    endereco: "",
    tipoEdificacao: "",
    areaProjeto: "",
    etapaProjeto: "",
    objetivoProjeto: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "70%",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            fontFamily: "serif",
            color: "#4d4b4b",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Identificações do Projeto a ser Avaliado:
        </h1>

        <TextField
          fullWidth
          label="Nome do projeto:"
          name="projeto"
          value={inputs.projeto}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Endereço do projeto:"
          name="endereco"
          value={inputs.endereco}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Tipo de edificação:"
          name="tipoEdificacao"
          value={inputs.tipoEdificacao}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Area do projeto (m3)"
          name="areaProjeto"
          value={inputs.areaProjeto}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Etapa atual do projeto"
          name="etapaProjeto"
          value={inputs.etapaProjeto}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Objetivos do Projeto:"
          name="objetivoProjeto"
          value={inputs.objetivoProjeto}
          onChange={handleChange}
          sx={{}}
        />
        <Button type="submit" variant="contained" color="primary">
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default Formulario;
