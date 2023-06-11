import {Router} from "express"
const router = Router();
import * as controller from "../Controllers/appController.js"
// import controller from "../Controllers/appController.js"

router.route('/register').post(controller.register)
// router.route('/register').post((req, res)=> res.json('register route'))
router.route('/registerMail').post()
router.route('/authenticate').post();
// router.route('/authenticate').post((req, res)=> res.end());
router.route('/login').post();
// router.route('/login').post(controller.login);

router.route('/user/:username').get();
// router.route('/user/:username').get(controller.getUser);
router.route('/createResetSession').get();
// router.route('/createResetSession').get(controller.createResetSession);

export default router;
// module.exports = router;