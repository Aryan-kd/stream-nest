import fs from "fs";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloud = async (path) => {
    try {
        if (!path) return null;

        const response = await cloudinary.v2.uploader.upload(path, {
            resource_type: "auto",
        });

        console.log("File is uploaded on cloundinary");
        return response;
    } catch (error) {
        fs.unlinkSync(path);
        return null;
    }
};

export { uploadOnCloud };
