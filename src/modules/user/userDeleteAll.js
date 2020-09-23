import User from './Model';

export default function userDeleteAll(req, res) {
  User.deleteMany()
    .select('-__v') // исключает из вывода
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Can not delete all users');
    });
}
