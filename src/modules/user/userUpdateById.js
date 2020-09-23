import User from './Model';

export default function userUpdateById(req, res) {
  const userId = req.params.userId;

  delete req.body.password; //for security purposes, so no one can change/update password
  delete req.body.roles; // no one can update regular user to admin without permission

  User.findByIdAndUpdate(userId, req.body)
    .select('-__v')
    .exec()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Could not update user');
    });
}
//Альтернативный вариант updateOne()
// User.updateOne({ _id: userId}, req.body)
//   .select('-__v')
// ..............
// }
