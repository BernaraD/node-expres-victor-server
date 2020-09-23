export default function home(req, res) {
  res.status(202).json({
    name: 'Bernie',
    company: 'PASV',
    q: true,
  });
}
