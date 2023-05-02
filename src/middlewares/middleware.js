import SwaggerUI from "swagger-ui-express";
import YAML from "yamljs";

const swaggerMiddleware = () => {
  const options = {
    customCss: ".swagger-ui .topbar { display: none }",
    customSiteTitle: "space",
  };

  const swaggerDocument = YAML.load("./src/database/swager.yaml");
  return [SwaggerUI.serve, SwaggerUI.setup(swaggerDocument, options)];
};

export default swaggerMiddleware;