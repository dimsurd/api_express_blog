const express = require("express");
const router = express.Router();
const {
  getAllBlog,
  createBlog,
  updateBlog,
  deleteblog,
  getDetail,
} = require("../controllers/blog_controller");
const upload = require("../middleware/multer");

router.get("/", getAllBlog);
router.get("/:id", getDetail);
router.post("/", upload.single("photo"), createBlog);
router.put("/:id", updateBlog);
router.delete("/:id", deleteblog);

module.exports = router;
