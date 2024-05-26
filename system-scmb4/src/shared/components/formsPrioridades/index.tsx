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
      {
        category: "Gestão do Solo",
        items: [
          "Protocolos de Seleção do Solo",
          "Criação de Espaços de Flora e Fauna",
          "Gestão de Planos de Erosão e Sedimentação do Solo",
        ],
      },
      {
        category: "Gestão da Água",
        items: [
          "Contabilização do Consumo da Água",
          "Sistemas de Águas Domésticas Residuais",
          "Reutilização da Água",
          "Sistema de Reaproveitamento de Águas Pluviais na Edificação",
        ],
      },
      {
        category: "Gestão de Resíduos Sólidos",
        items: [
          "Sistemas de Recolha e Disposição de Resíduos Sólidos na Edificação",
          "Identificação, Classificação e Separação de Resíduos Sólidos",
          "Reincorporação de Resíduos Sólidos ao Processo Produtivo de um PC",
          "Reutilização de Resíduos Sólidos no Projeto",
        ],
      },
      {
        category: "Gestão de Energia",
        items: [
          "Viabilidade Energética e Orientação Física da Edificação/Moradias",
          "Sistemas de Iluminação LED na Edificação",
          "Produção de Energia Renovável para o Projeto",
          "Produção de Energia Renovável para as Atividades do Projeto",
          "Gerenciamento e Controle das Emissões de CO2 geradas pelo transporte das aquisições",
          "Gerenciamento e Controle das Emissões CO2 no uso de equipamentos e maquinaria",
          "Gerenciamento e Controle das Emissões Co2 na eliminação de resíduos (descomposição dos materiais gera CO2)",
          "Geração do CO2 no uso da edificação (pós-construção)",
        ],
      },
    ],
  },
  {
    title: "Dimensão Social",
    options: [
      {
        category: "Gestão de Comunidades",
        items: [
          "Crescimento Econômico, Social e Ambiental criado pelo Desenvolvimento do Projeto",
          "Gestão de Comunicação e Resolução de Conflitos",
          "Identificação e Gestão de Riscos das Comunidades",
          "Gestão da Seguridade e Saúde das Comunidades",
          "Contratação de Comunidades com Domicílio nas Redondezas do Projeto",
        ],
      },
      {
        category: "Gestão de Funcionários",
        items: [
          "Gerenciamento da Seguridade e Saúde dos Funcionários",
          "Motivação e Recompensa dos Funcionários",
          "Avaliação do Desempenho dos Funcionários",
          "Educação e Treinamento em Sustentabilidade",
          "Contratações de Especialistas em Sustentabilidade",
          "Contratação Inclusiva",
          "Avaliação da Satisfação dos Funcionários",
        ],
      },
      {
        category: "Gestão de PC",
        items: [
          "Avaliação do Desempenho Jurídico e Administrativo",
          "Gestão de Seguridade e Saúde dos Parceiros Comerciais",
          "Contratações de PC Comprometidos com a Sustentabilidade",
          "Integração dos PC aos Programas de Educação e Treinamento Sustentável",
        ],
      },
      {
        category: "Gestão de Usuários",
        items: [
          "Sistemas de Comunicação e Gestão de Conflitos",
          "Avaliação da Satisfação dos Usuários",
          "Integração da Biofilia.",
        ],
      },
    ],
  },
  {
    title: "Dimensão Econômica",
    options: [
      {
        category: "Gestão Econômico-Financeira",
        items: [
          "Geração de Valor Econômico Interno (pós-construção)",
          "Financiamento Sustentável",
          "Viabilidade Econômico-Sustentável",
          "Geração de Valor Econômico Externo (pós-construção)",
        ],
      },
      {
        category: "Gestão de Custos",
        items: [
          "Custos de Tributação",
          "Custos de Materiais e Equipamentos",
          "Custos dos Sistemas de Gestão Organizacional",
          "Custos de Gestão de Resíduos",
          "Custos de Energia",
          "Custos da Água",
          "Custos de Funcionários",
        ],
      },
      {
        category: "Gestão de Benefícios",
        items: ["Benefícios Econômicos de Práticas Sustentáveis"],
      },
      {
        category: "Gestão de Responsabilidade Social Empresarial",
        items: ["Relatórios de Sustentabilidade"],
      },
    ],
  },
  {
    title: "Dimensão Técnica",
    options: [
      {
        category: "Gestão da Informação",
        items: [
          "Guia Técnico da Edificação (pós-construção)",
          "Uso de Ferramentas de Modelagem da Informação em Construção (BIM)",
        ],
      },
      {
        category: "Gestão de Tecnologias",
        items: [
          "Sistemas Construtivos Alternativos",
          "Sistemas de Automação e Controle da Edificação",
        ],
      },
      {
        category: "Gestão de Sistemas de Gestão Organizacional",
        items: [
          "Sistemas de Gestão de Seguridade e Saúde",
          "Sistemas de Gestão de Qualidade",
          "Sistemas de Gestão Ambiental",
        ],
      },
      {
        category: "Gestão de Materiais e Equipamentos",
        items: [
          "Avaliação do Desempenho Térmico e Lumínico",
          "Aquisições de Materiais e Equipamentos Eco-friendly",
        ],
      },
      {
        category: "Gestão de Regulamentos",
        items: ["Gestão dos Regulamentos por Lei"],
      },
    ],
  },
];

type Priority = any;
type Priorities = {
  [categoryIndex: number]: { [itemIndex: number]: Priority };
};
const ProjectPage = () => {
  const [priorities, setPriorities] = useState<Priorities>({});

  const handlePriorityChange = (
    categoryIndex: number,
    itemIndex: number,
    priority: Priority
  ) => {
    setPriorities((prevState) => {
      const updatedPriorities = { ...prevState };
      if (!updatedPriorities[categoryIndex]) {
        updatedPriorities[categoryIndex] = {};
      }
      updatedPriorities[categoryIndex][itemIndex] = priority;
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
        {categories.map((category, categoryIndex) => (
          <Grid item xs={12} key={categoryIndex}>
            <Typography variant="h5" gutterBottom>
              {category.title}
            </Typography>
            {category.options.map((option, optionIndex) => (
              <div key={optionIndex}>
                <Typography variant="subtitle1">{option.category}</Typography>
                {option.items.map((item, itemIndex) => (
                  <FormControl
                    fullWidth
                    key={itemIndex}
                    style={{ marginBottom: "10px" }}
                  >
                    <InputLabel>{item}</InputLabel>
                    <Select
                      value={
                        (priorities[categoryIndex] &&
                          priorities[categoryIndex][optionIndex]) ||
                        ""
                      }
                      onChange={(e) =>
                        handlePriorityChange(
                          categoryIndex,
                          optionIndex,
                          e.target.value
                        )
                      }
                    >
                      <MenuItem value="">Selecione...</MenuItem>
                      <MenuItem value={item}>Alta Prioridade</MenuItem>
                      <MenuItem value={item}>Média Prioridade</MenuItem>
                      <MenuItem value={item}>Baixa Prioridade</MenuItem>
                    </Select>
                  </FormControl>
                ))}
              </div>
            ))}
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
        {Object.entries(priorities).map(
          ([categoryIndex, categoryPriorities]) => (
            <li key={categoryIndex}>
              Category: {categoryIndex}, Priorities:{" "}
              {JSON.stringify(categoryPriorities)}
            </li>
          )
        )}
      </ol>
    </div>
  );
};

export default ProjectPage;
