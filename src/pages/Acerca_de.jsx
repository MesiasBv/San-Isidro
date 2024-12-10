import React from "react";
import { Button } from "@mui/material";
import { AppBar, Toolbar, Typography, Tabs, Tab, Box, Container, Card, CardContent, Avatar, Grid } from "@mui/material";
import { Box as MuiBox } from "@mui/system";

// Datos del equipo
const teamMembers = [
  {
    name: "Joel Acevedo",
    role: "Análisis de Datos y Documentación",
    description: "Joel se encarga del análisis de datos y la implementación de soluciones de Big Data para mejorar la eficiencia operativa del restaurante.",
    imageUrl: "/joel.jpeg",  // URL de imagen de ejemplo
    skills: ["Análisis de Datos", "Big Data", "Machine Learning"],
    linkedin: "https://www.linkedin.com/in/joel-acevedo-9532a2210/"
  },
  {
    name: "Mesías Barrientos",
    role: "Desarrollador de Dashboard y Visualización",
    description: "Mesías se encarga del desarrollo del dashboard interactivo y la visualización de los datos para facilitar la toma de decisiones.",
    imageUrl: "/mesias.jpeg",
    skills: ["React", "Data Visualization", "Power BI"],
    linkedin: "https://www.linkedin.com/in/mes%C3%ADas-bv-27a6a0241/"
  },
  {
    name: "Jhordy Valdivia",
    role: "Gestión de Datos y Optimización de Procesos",
    description: "Jhordy gestiona la estructura de datos y trabaja en la optimización de procesos mediante el análisis y procesamiento de datos.",
    imageUrl: "/jhordy.jpg",
    skills: ["SQL", "ETL", "Data Management"],
    linkedin: "https://www.linkedin.com/in/jhordy-ismael-valdivia-sanchez-30266133a/"
  }
  
];

const Acerca_de = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom align="center">
        Sobre Nosotros
      </Typography>
      <Typography variant="body1" gutterBottom align="center">
      Somos un equipo multidisciplinario trabajando en el proyecto "ANÁLISIS DE DATOS PARA LA MEJORA DE LA EFICIENCIA OPERATIVA EN EL RESTAURANTE SAN ISIDRO ICA - 2024". Este proyecto tiene como objetivo aprovechar el análisis de datos para optimizar los procesos operativos del Restaurante San Isidro, ubicado en Ica, Perú, mejorando su eficiencia y rendimiento.
      </Typography>
      <Grid container spacing={4}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card>
              <CardContent>
                <Box display="flex" justifyContent="center" mb={2}>
                  <Avatar
                    alt={member.name}
                    src={member.imageUrl}
                    sx={{ width: 100, height: 100 }}
                  />
                </Box>
                <Typography variant="h6" align="center">{member.name}</Typography>
                <Typography variant="body2" align="center" color="textSecondary">{member.role}</Typography>
                <Typography variant="body2" align="center" sx={{ marginTop: 2 }}>
                  {member.description}
                </Typography>

                {/* Sección de habilidades */}
                <Box sx={{ marginTop: 2, textAlign: "center" }}>
                  <Typography variant="body2" color="textSecondary">
                    <strong>Habilidades:</strong> {member.skills.join(", ")}
                  </Typography>
                </Box>

                {/* Enlace a LinkedIn */}
                <Box sx={{ marginTop: 2, textAlign: "center" }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    href={member.linkedin}
                    target="_blank"
                    sx={{ textTransform: "none" }}
                  >
                    Ver LinkedIn
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Acerca_de;
