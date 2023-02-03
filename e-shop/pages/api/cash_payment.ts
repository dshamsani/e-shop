export default function handler(req, res) {
  const requestMethod = req.method;
  switch (requestMethod) {
    case "GET":
      res.status(200).json({ result: true });
      break;
    default:
      res.status(200).json({ message: "Welcome to the API" });
  }
}
