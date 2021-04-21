const db = require("./connection");

exports.createUser = async (data) => {
  return await db("users")
    .insert(data)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
};

exports.readUser = async () => {
  return await db("users")
    .select("*")
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
};

// membuat function bernama deleteUser
exports.deleteUser = async (data) => {
  return await db("users")
    .where(data)
    .del()
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
};

// membuat function bernama editUser
exports.editUser = async (id, data) => {
  return await db("users")
    .where({ id: id })
    .update(data)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
};
