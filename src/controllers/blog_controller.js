const blogMoodel = require("../models/blog_model");

const getAllBlog = async (req, res) => {
  try {
    const [data] = await blogMoodel.getAllBlog();
    res.status(200).json({
      message: "Get all blog success",
      data,
    });
  } catch (err) {
    res.status(500).json({
      message: "Get all blog failed",
      error: err.message,
    });
  }
};

const createBlog = async (req, res) => {
  try {
    const { body, file } = req;
    const filename = file.filename;

    await blogMoodel.createBlog(body, filename);
    res.status(201).json({
      message: "Create blog success",
      data: body,
    });
  } catch (err) {
    res.status(500).json({
      message: "Create blog failed",
      error: err.message,
    });
  }
};

const updateBlog = async (req, res) => {
  try {
    await blogMoodel.updateBlog(req.params.id, req.body);
    res.status(201).json({
      message: "Update blog success",
      data: req.body,
    });
  } catch (err) {
    res.status(500).json({
      message: "Update blog failed",
      error: err.message,
    });
  }
};

const deleteblog = async (req, res) => {
  try {
    await blogMoodel.deleteblog(req.params.id);
    res.status(200).json({
      message: "Delete blog success",
    });
  } catch (err) {
    res.status(500).json({
      message: "Delete blog failed",
    });
  }
};

const getDetail = async (req, res) => {
  try {
    const [data] = await blogMoodel.getDetail(req.params.id);
    res.status(200).json({
      message: "Get data success",
      data,
    });
  } catch (err) {
    res.status(500).json({
      message: "Get data failed",
      error: err.message,
    });
  }
};

module.exports = {
  getAllBlog,
  createBlog,
  updateBlog,
  deleteblog,
  getDetail,
};
