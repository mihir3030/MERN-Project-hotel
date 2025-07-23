import User from "../models/User.js";
import { Webhook } from "svix";

const clerkWebhooks = async () => {
    try {
        // create svix instance with clerk webhooks
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

        //getting headers
        const headers = {
            'svix-id': req.headers['svix-id'],
            'svix-timestamp': req.headers['svix-timestamp'],
            'svix-signature': req.headers['svix-signature'],
        };

        // verifying headers
        await whook.verify(JSON.stringify(req.body), headers)

        //getting data
        const {data, type} = req.body;

        // store data in mongo schema
        const userData = {
            _id: data.id,
            email: data.email_address[0].email_address,
            username: data.first_name + " " + data.last_name,
            image: data.image_url,
        }

        // switch case for user cration update and delete all stuff
        switch (type) {
            case "user.created":{
                await User.create(userData);
                break;
            }
            case "user.updated":{
                await userData.findByIdAndUpdate(data.id, userData);
                break;
            }
            case "user.deleted":{
                await User.findByIdAndDelete(data.id);
                break;
            }
            default:
                break;
        }

        res.json({success: true, message: "Webhook recived"})

    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message})
    }
}

export default clerkWebhooks