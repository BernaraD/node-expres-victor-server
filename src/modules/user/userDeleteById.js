import User from './Model';

export default function userDeleteById(req, res) {
  const userId = req.params.userId;

  User.deleteOne({ _id: userId })
    .select('-__v') // исключает из вывода
    // .exec() в случае с  deleteOne exec() не нужен
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Can not delete user');
    });
}
