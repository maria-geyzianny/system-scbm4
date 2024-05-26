import React, { useState, ChangeEvent, FormEvent } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { PlanoDeFundo } from "../../../assets";
import { SelectChangeEvent } from "@mui/material/Select";
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

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>
  ) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name as string]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputs);
  };

  const handleSelectChange = (event: SelectChangeEvent) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name as string]: value,
    }));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url(${PlanoDeFundo})`, // Defina a imagem de plano de fundo aqui
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "70%",
          backgroundColor: "rgba(255, 255, 255, 0.8)", // Adicione um fundo semi-transparente para melhor legibilidade do formulário
          padding: "2rem", // Adicione preenchimento para espaçamento interno
          borderRadius: "8px", // Adicione bordas arredondadas ao formulário
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            fontFamily: "serif",
            color: "#4d4b4b",
            display: "flex",
            justifyContent: "center",
            textAlign: "center", // Centralize o título
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
          label="Área do projeto (m²)"
          name="areaProjeto"
          value={inputs.areaProjeto}
          onChange={handleChange}
        />
        <FormControl fullWidth>
          <InputLabel>Etapa atual do projeto</InputLabel>
          <Select
            name="etapaProjeto"
            value={inputs.etapaProjeto}
            onChange={handleSelectChange}
          >
            <MenuItem value="Design e Planejamento">
              Design e Planejamento
            </MenuItem>
            <MenuItem value="Construção">Construção</MenuItem>
            <MenuItem value="Pós-construção">Pós-construção</MenuItem>
          </Select>
        </FormControl>
        <TextField
          fullWidth
          label="Objetivos do Projeto:"
          name="objetivoProjeto"
          value={inputs.objetivoProjeto}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary">
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default Formulario;
