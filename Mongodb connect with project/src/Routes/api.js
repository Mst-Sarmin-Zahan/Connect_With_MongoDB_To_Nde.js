let express = require("express");
let router = express.Router();

let controller1 = require("../Controllers/adminController");
let controller2 = require("../Controllers/postController");
let controller3 = require("../Controllers/userController");
let controller4 = require("../Controllers/subAdminController");




router.get("path1",controller1.create1);
router.get("path2",controller1.read1);
router.get("path3",controller1.delete1);
router.get("path4",controller1.update1);

router.get("path5",controller2.create2);
router.get("path6",controller2.read2);
router.get("path7",controller2.delete2);
router.get("path8",controller2.update2);

router.get("path9",controller3.create4);
router.get("path10",controller3.read4);
router.get("path11",controller3.delete4);
router.get("path12",controller3.update4);

router.get("path13",controller4.create3);
router.get("path14",controller4.read3);
router.get("path15",controller4.delete3);
router.get("path16",controller4.update3);

module.exports = router;
