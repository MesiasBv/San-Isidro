import React, { useState } from "react";
import { Button } from "@mui/material";
import { AppBar, Toolbar, Typography, Tabs, Tab, Box, Container, Card, CardContent } from "@mui/material";

const DashboardPage = () => {
  const [activeApi, setActiveApi] = useState(0);

  // Estados para manejar la visibilidad de los resúmenes y recomendaciones
  const [showSummary, setShowSummary] = useState([false, false, false, false]);
  const [showRecommendations, setShowRecommendations] = useState([false, false, false, false]);

  // Resúmenes específicos por API
  const [apiSummaries, setApiSummaries] = useState([
    `<br />- El proveedor B representa el 42.27% del costo total, seguido por el proveedor A con un 31.7%. <br />- El consumo presenta picos en los días 10 y 25, alcanzando máximos de 729 y 682 unidades respectivamente.`,
    `<br />- El proveedor A tiene una participación del 30% en el costo total. <br />- El consumo se concentra en los días 5, 15 y 25.`,
    `<br />- Los tiempos promedio por mes (enero, febrero, marzo) son consistentes, con un promedio cercano a 29 minutos, lo que indica estabilidad operativa. <br />- Las horas cercanas a las 7:00 p.m. y 8:00 p.m. tienen tiempos de atención más altos, posiblemente por mayor demanda.`,
    `<br />- El turno de tarde tiene la mayor carga de trabajo, alcanzando su pico en marzo con 457 horas trabajadas. <br />- En febrero hay una caída en clientes atendidos (536) respecto a enero y marzo.`,
  ]);

  // Recomendaciones específicas por API
  const [apiRecommendations, setApiRecommendations] = useState([
    [
      "Establecer niveles mínimos de inventario para los productos más consumidos con el fin de evitar desabastecimientos durante picos de demanda.",
      "Analizar los picos de demanda y ajustar el personal o las promociones para optimizar la operación en esos días específicos.",
    ],
    [
      "- Negociar mejores precios con Proveedor A.",
      "- Analizar la variabilidad en los picos de consumo.",
    ],
    [
      "- Incrementar el personal en horarios críticos (7:00 p.m. y 8:00 p.m.) para reducir los tiempos de atención.",
      "- Establecer notificaciones cuando los tiempos superen los 30 minutos para tomar medidas inmediatas.",
    ],
    [
      "- Reforzar el turno de tarde mediante redistribución del personal o nuevas contrataciones.",
      "- Investigar la baja demanda en febrero y tomar medidas para evitar caídas similares.",
    ],
  ]);

  // Función para generar el resumen analítico por API
  const handleGenerateReport = (apiIndex) => {
    const newShowSummary = [...showSummary];
    newShowSummary[apiIndex] = true; // Establece que el resumen se muestre
    setShowSummary(newShowSummary);
  };

  // Función para generar recomendaciones específicas por API
  const handleGenerateRecommendations = (apiIndex) => {
    const newShowRecommendations = [...showRecommendations];
    newShowRecommendations[apiIndex] = true; // Establece que las recomendaciones se muestren
    setShowRecommendations(newShowRecommendations);
  };

  return (
    <Box>
      {/* Encabezado */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            San Isidro, Ica
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Navegación entre APIs */}
      <Tabs
        value={activeApi}
        onChange={(e, newValue) => setActiveApi(newValue)}
        centered
        textColor="primary"
        indicatorColor="primary"
        sx={{ marginTop: 2 }}
      >
        <Tab label="INVENTARIOS" />
        <Tab label="VENTAS" />
        <Tab label="ATENCIÓN AL CLIENTE" />
        <Tab label="PERSONAL" />
      </Tabs>

      {/* Contenedor de los Iframes */}
      <Container maxWidth="lg" sx={{ marginTop: 4, textAlign: "center" }}>
        {/* Mostrar gráficos según la API seleccionada */}
        <Box sx={{ display: activeApi === 0 ? "block" : "none" }}>
          <iframe
            title="Reporte API 1"
            width="100%"
            height="500px"
            src="https://app.powerbi.com/view?r=eyJrIjoiMWEwZTVhMDctN2E2MC00ZDNjLWJlNjgtZGU2YThiODhkY2ZjIiwidCI6IjEzODQxZDVmLTk2OGQtNDYyNC1hN2RhLWQ2OGE2MDA2YTg0YSIsImMiOjR9"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </Box>

        <Box sx={{ display: activeApi === 1 ? "block" : "none" }}>
          <iframe
            title="Reporte API 2"
            width="100%"
            height="500px"
            src="https://app.powerbi.com/view?r=eyJrIjoiMzFjYzc4ZjYtMTM4OC00YTYzLTlkMzgtMWE5M2Y0YThlOTkwIiwidCI6IjEzODQxZDVmLTk2OGQtNDYyNC1hN2RhLWQ2OGE2MDA2YTg0YSIsImMiOjR9"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </Box>

        <Box sx={{ display: activeApi === 2 ? "block" : "none" }}>
          <iframe
            title="Reporte API 3"
            width="100%"
            height="500px"
            src="https://app.powerbi.com/view?r=eyJrIjoiYmI3OTdjNjAtYjk0OS00OGJmLTlhMDQtYjQ0MWRiZTYyYWYxIiwidCI6IjEzODQxZDVmLTk2OGQtNDYyNC1hN2RhLWQ2OGE2MDA2YTg0YSIsImMiOjR9"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </Box>

        <Box sx={{ display: activeApi === 3 ? "block" : "none" }}>
          <iframe
            title="Reporte API 4"
            width="100%"
            height="500px"
            src="https://app.powerbi.com/view?r=eyJrIjoiZDU1YjNlMDYtZThkMC00ZmQ2LTljZGEtYWNhNjRlNThkZWFhIiwidCI6IjEzODQxZDVmLTk2OGQtNDYyNC1hN2RhLWQ2OGE2MDA2YTg0YSIsImMiOjR9"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </Box>

        {/* Sección de Análisis y Decisiones */}
        <Box sx={{ marginTop: 4 }}>
          <Typography variant="h5" gutterBottom>
            Análisis y Decisiones para la mejora de la Eficiencia Operativa en la empresa
          </Typography>

          {/* Tarjetas para Resumen y Recomendaciones */}
          <Box sx={{ display: "flex", justifyContent: "space-around", marginTop: 4 }}>
            {/* Tarjeta de Resumen */}
            <Card sx={{ width: "45%" }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Resumen Analítico
                </Typography>
                {/* Mostrar solo si se ha clickeado el botón */}
                {showSummary[activeApi] ? (
                  <Typography
                    variant="body1"
                    dangerouslySetInnerHTML={{
                      __html: apiSummaries[activeApi],  // Esto permite interpretar los saltos de línea
                    }}
                  />
                ) : (
                  <Typography>Haz clic para generar el resumen analítico de este dashboard.</Typography>
                )}
                <Box sx={{ textAlign: "center", marginTop: 2 }}>
                  <Button
                    variant="contained"
                    onClick={() => handleGenerateReport(activeApi)}
                  >
                    Generar Resumen
                  </Button>
                </Box>
              </CardContent>
            </Card>

            {/* Tarjeta de Recomendaciones */}
            <Card sx={{ width: "45%" }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Recomendaciones
                </Typography>
                {/* Mostrar solo si se ha clickeado el botón */}
                {showRecommendations[activeApi] ? (
                  apiRecommendations[activeApi].map((rec, index) => (
                    <Typography key={index} gutterBottom>
                      {rec}
                    </Typography>
                  ))
                ) : (
                  <Typography>Haz clic para generar las recomendaciones de este dashboard.</Typography>
                )}
                <Box sx={{ textAlign: "center", marginTop: 2 }}>
                  <Button
                    variant="contained"
                    onClick={() => handleGenerateRecommendations(activeApi)}
                  >
                    Generar Recomendaciones
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default DashboardPage;
