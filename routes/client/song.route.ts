import { Router } from "express";
const router: Router = Router();
import * as controller from "../../controller/client/song.controller";

router.get("/:slugTopic", controller.list);

export const songRouter: Router = router;
