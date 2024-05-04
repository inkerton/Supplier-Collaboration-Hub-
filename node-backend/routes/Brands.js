const express = require('express');
import { createBrand, fetchBrands } from "../conroller/Brand";

const router = express.Router();

router.get('/',fetchBrands).post('/', createBrand);

exports.router = router;
