import React, { useState } from "react";
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
type PriorityState = Record<string, number>;

const ProjectPage = () => {
  const [priorities, setPriorities] = useState<PriorityState>({});

  const handlePriorityChange = (category: string, priority: number) => {
    setPriorities((prevState) => {
      const updatedPriorities = { ...prevState };
      updatedPriorities[category] = priority;
      return updatedPriorities;
    });
  };

  const handleSubmit = () => {
    // Handle submission of priorities
    console.log("Priorities:", priorities);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Organize em ordem de importância os atributos importantes para ESTE
        projeto
      </Typography>
      <Grid container spacing={2}>
        {categories.map((category, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <FormControl fullWidth>
              <InputLabel>{category.title}</InputLabel>
              <Select
                value={priorities[category.title] || ""}
                onChange={(e) =>
                  handlePriorityChange(category.title, Number(e.target.value))
                }
              >
                <MenuItem value="">Selecione...</MenuItem>
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
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Enviar Prioridades
      </Button>
      <Typography
        variant="subtitle1"
        gutterBottom
        style={{ marginTop: "20px" }}
      >
        Ranking de Prioridades:
      </Typography>
      <ol>
        {Object.values(priorities).map((priority, index) => (
          <li key={index}>{priority}</li>
        ))}
      </ol>
    </div>
  );
};

export default ProjectPage;
