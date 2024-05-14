import React, { useState, ChangeEvent, FormEvent } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { PlanoDeFundo } from "../../../assets";
import Image from "next/image";

interface FormInputs {
  nome: string;
  sobrenome: string;
  email: string;
  senha: string;
  endereco: string;
  telefone: string;
}

const Formulario: React.FC = () => {
  const [inputs, setInputs] = useState<FormInputs>({
    nome: "",
    sobrenome: "",
    email: "",
    senha: "",
    endereco: "",
    telefone: "",
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
    // Faça o que quiser com os dados do formulário
    console.log(inputs);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          width: "80%",
        }}
      >
        <TextField
          fullWidth
          label="Nome"
          name="nome"
          value={inputs.nome}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Sobrenome"
          name="sobrenome"
          value={inputs.sobrenome}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={inputs.email}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Senha"
          name="senha"
          type="password"
          value={inputs.senha}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Endereço"
          name="endereco"
          value={inputs.endereco}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Telefone"
          name="telefone"
          type="tel"
          value={inputs.telefone}
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
