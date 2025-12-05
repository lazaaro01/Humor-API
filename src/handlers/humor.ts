import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { gerarHumor } from "../utils/humorGenerator";

export const humorHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  
  const nome = event.queryStringParameters?.nome || "Visitante";

  const humor = gerarHumor();

  return {
    statusCode: 200,
    body: JSON.stringify({
      nome,
      humor
    })
  };
};