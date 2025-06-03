import database from "../../../../infra/database.js";

async function status(request, response) {
  const result = await database.query("Select 1 +1 as soma");
  console.log(result.rows);
  response.status(200).json({ retorno: "OK do João" });
}

export default status;
