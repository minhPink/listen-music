import Topic from "../../models/topic.model";
import {  Request, Response } from "express";


//[GET] /topics/
export const index = async (req: Request, res: Response) => {
    const topics = await Topic.find({
        deleted: false
    });
    res.render("client/pages/topics/index", {
        pageTitle: "Chu de bai hat",
        topics: topics
    });
}