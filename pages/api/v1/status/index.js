function status(request, response) {
  response.status(200).json({ retorno: "OK do João" });
}

export default status;
