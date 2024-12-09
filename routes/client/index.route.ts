import { Express } from "express";
import { topicRouter } from "./topic.route";
import { songRouter } from "./song.route";


const ClientRoutes = (app: Express): void => {

    app.use("/topics", topicRouter);

    app.use("/songs", songRouter);
}

export default ClientRoutes;