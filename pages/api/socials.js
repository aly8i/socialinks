import dbConnect from "../../util/mongo";
import Social from "../../models/Social";
// import AuthorizedPost from "../../../middlewares/AuthorizedPost";
export default 
// AuthorizedPost( 
    async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  if (method === "GET") {
    try {
      const socials = await Social.find();
      res.status(200).json(socials);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "POST") {
    try {
        const social = await Social.create(req.body);
        res.status(201).json(social);
      } catch (err) {
        res.status(900).json(err);
      }
  }
}
// )
;
