import React from "react";
import Typography from "@mui/material/Typography";

interface Props {
  priorities: string[];
}

const RankingPage: React.FC<Props> = ({ priorities }) => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Ranking de prioridades
      </Typography>
      <ol>
        {priorities.map((priority, index) => (
          <li key={index}>{priority}</li>
        ))}
      </ol>
    </div>
  );
};

export default RankingPage;
