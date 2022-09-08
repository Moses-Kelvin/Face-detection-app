import React, { useState } from "react";

import UrlContext from "./url-context";


const UrlContextProvider = ({ children }) => {

    const [ImgUrl, setImgUrl] = useState('');

    const [box, setBox] = useState([]);

    let arr = [];

    const USER_ID = 'owtgh2fb202w';
    const PAT = '699fd7ec067344c1811e075559957d9c';
    const APP_ID = '2323';
    const MODEL_ID = 'face-detection';
    const MODEL_VERSION_ID = '45fb9a671625463fa646c3523a3087d5'

    const fetchData = async (url) => {
        setImgUrl(url);
        const raw = JSON.stringify({
            "user_app_id": {
                "user_id": USER_ID,
                "app_id": APP_ID
            },
            "inputs": [
                {
                    "data": {
                        "image": {
                            "url": url
                        }
                    }
                }
            ]
        });

        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Key ' + PAT
            },
            body: raw
        };

        try {
            const response = await fetch(
                "https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs",
                requestOptions);
            const result = await response.json();
            const positions = result.outputs[0].data.regions;
            positions.forEach(el => arr.push(el.region_info.bounding_box));
            setBox(arr);
            console.log(result);
        } catch (err) {
            console.log(err)
        }

    };

    const Values = {
        fetchData,
        ImgUrl,
        box
    };


    return (
        <UrlContext.Provider value={Values}>
            {children}
        </UrlContext.Provider>
    )
};

export default UrlContextProvider;