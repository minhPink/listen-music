// import Song from "../../models/song.model";
import {  Request, Response } from "express";


//[GET] /songs/:slugTopic
export const list = async (req: Request, res: Response) => {
    console.log(req.params.slugTopic);
    res.render("client/pages/songs/list", {
        pageTitle: "Danh sach bai hat",
        // songs: songs
    });
}