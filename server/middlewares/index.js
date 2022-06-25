import { expressjwt } from "express-jwt";
import Hotel from '../models/hotel'


// req.user
export const requireSignin = expressjwt({
     secret: process.env.JWT_SECRET, 
     algorithms: ["HS256"],
     credentialsRequired: false,
     ignoreExpiration: true
    });


export const hotelOwner = async (req, res, next) => {
     let hotel = await Hotel.findById(req.params.hotelId).exec()
     let owner = hotel.postedBy._id.toString() === req.auth._id.toString();
     if (!owner) {
          return res.status(403).send('Unautorized');

     }
     next();
}



