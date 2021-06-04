export default function apiClock(_req, res) {
  res.status(200).json({ date: new Date() });
}
