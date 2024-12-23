import React, { useState } from "react";
import { PlanoDeFundo } from "../../../assets";
import {
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

const categories = [
  {
    title: "Dimensão Ambiental",
    options: [
      "Gestão do Solo",
      "Gestão da Água",
      "Gestão de Resíduos Sólidos",
      "Gestão de Energia",
      "Gerenciamento de Emissões de CO2",
    ],
  },
  {
    title: "Dimensão Social",
    options: [
      "Gestão de Comunidades",
      "Gestão de Funcionários",
      "Gestão de PC",
      "Gestão de Usuários",
    ],
  },
  {
    title: "Dimensão Econômica",
    options: [
      "Gestão Econômico-Financeira",
      "Gestão de Custos",
      "Gestão de Benefícios",
      "Gestão de Responsabilidade Social Empresarial",
    ],
  },
  {
    title: "Dimensão Técnica",
    options: [
      "Gestão Técnica",
      "Gestão de Tecnologias",
      "Gestão de Sistemas de Gestão Organizacional",
      "Gestão de Materiais e Equipamentos",
      "Gestão de Regulamentos",
    ],
  },
];

type PriorityState = Record<string, string[]>;

const ProjectPage = () => {
  const [priorities, setPriorities] = useState<PriorityState>({});

  const handlePriorityChange = (
    category: string,
    selectedOptions: string[]
  ) => {
    setPriorities((prevState) => ({
      ...prevState,
      [category]: selectedOptions,
    }));
  };

  const handleSubmit = () => {
    console.log("Priorities:", priorities);
  };

  const handleClearPriorities = () => {
    setPriorities({});
  };

  const renderRanking = () => {
    const selectedItems = Object.values(priorities).flat();
    return selectedItems.map((item, index) => <li key={index}>{item}</li>);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        backgroundImage: `url(${PlanoDeFundo})`, // Defina a imagem de plano de fundo aqui
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.8)", // Adicione um fundo semi-transparente para melhor legibilidade do formulário
          padding: "2rem", // Adicione preenchimento para espaçamento interno
          borderRadius: "8px", // Adicione bordas arredondadas ao formulário
        }}
      >
        <Typography
          style={{
            fontSize: "2rem",
            fontFamily: "serif",
            color: "#4d4b4b",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          Organize em ordem de importância os atributos importantes para o
          projeto
        </Typography>

        <Grid
          container
          spacing={2}
          style={{
            gap: "1rem",
            width: "70%",
          }}
        >
          {categories.map((category, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <FormControl fullWidth>
                <InputLabel>{category.title}</InputLabel>
                <Select
                  multiple
                  value={priorities[category.title] || []}
                  onChange={(e) =>
                    handlePriorityChange(
                      category.title,
                      e.target.value as string[]
                    )
                  }
                >
                  {category.options.map((option, optionIndex) => (
                    <MenuItem key={optionIndex} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          ))}
        </Grid>

        <div
          style={{
            width: "70%",
            marginBottom: "20px",
          }}
        >
          <Typography variant="subtitle1" gutterBottom align="left">
            Este é o seu Ranking de Prioridades:
          </Typography>

          <ol>{renderRanking()}</ol>
        </div>
        {/* addicionar footer */}
      </div>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        style={{ marginBottom: "20px" }}
      >
        <Grid item>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Enviar Prioridades
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleClearPriorities}
          >
            Limpar Prioridades
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProjectPage;
