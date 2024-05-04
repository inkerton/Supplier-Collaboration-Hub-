const express = require('express');
import { fetchCategories } from "../conroller/Category";

const router = express.Router();

router.get('/',fetchCategories).post('/', createCategory);

exports.router = router;
