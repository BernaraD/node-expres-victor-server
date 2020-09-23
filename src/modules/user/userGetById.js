import User from './Model';

export default function userGetById(req, res) {
  const userId = req.params.userId;

  User.findById(userId)
    .select('-__v') // исключает из вывода
    .exec()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('User get all error');
    });
}
