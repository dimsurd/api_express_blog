const dbPool = require("../config/database");

const getAllBlog = () => {
  const sqlQuery = "SELECT * FROM blog_post";
  return dbPool.execute(sqlQuery);
};

const getDetail = (id) => {
  const sqlQuery = "SELECT * FROM blog_post WHERE id = ? LIMIT 1";
  return dbPool.execute(sqlQuery, [id]);
};

const createBlog = (body, filename) => {
  const { title, description } = body;

  const sqlQuery =
    "INSERT INTO blog_post (title,description,img_path) VALUE(?,?,?)";
  return dbPool.execute(sqlQuery, [title, description, filename]);
};

const updateBlog = (id, body) => {
  const { title, description } = body;

  const sqlQuery = "UPDATE blog_post set title=?,description=? WHERE id=?";
  return dbPool.execute(sqlQuery, [title, description, id]);
};

const deleteblog = (id) => {
  const sqlQuery = "DELETE FROM blog_post WHERE id=?";
  return dbPool.execute(sqlQuery, [id]);
};

module.exports = { getAllBlog, createBlog, updateBlog, deleteblog, getDetail };
