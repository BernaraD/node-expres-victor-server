import User from './Model';

export default function userGetAll(req, res) {
  User.find() //сюда мы передаем объект для фильтрации
    .select('-__v') // исключает из вывода
    // .limit(3) пагинация лимиторованно показывать по три 3 user at the time
    .exec()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('User get all error');
    });
}
