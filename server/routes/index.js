const express = require('express');
const router = express.Router();
const serviceRequest = require('./../services/index');
const { query, validationResult } = require('express-validator');


router.get('/ping', function (req, res, next) {
  res.status(200).json('Pong');
});

router.get('/api/ip-address', query('ip').isIP().notEmpty().escape(), async (req, res) => {
  let returnJson = {
    msg: "",
    code: "",
    data: {}
  };

  let ipAddress = req.query || "";

  const result = validationResult(req);
  if (!result.isEmpty()) {
    returnJson.msg = result.msg;
    return res.json({ errors: result.array() });
  }

  try {
    let response = await serviceRequest.ipAddressRequest(ipAddress.ip);
    console.log("=> ", response);

    if (response != undefined) {
      returnJson.msg = response.statusText || "";
      returnJson.code = response.status || "";
      returnJson.data = response.data || {};
    }
    else {
      throw new Error(response, 500);
    }

    res.json(returnJson);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
