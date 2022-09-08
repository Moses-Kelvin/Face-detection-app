import React, { useContext, useLayoutEffect, useRef, useState } from "react";

import UrlContext from "./store/url-context";

import classes from "../styles/Image.module.css";


const Image = () => {

    const ref = useRef();

    const { box, ImgUrl } = useContext(UrlContext);

    const [imgRef, setImgRef] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        setImgRef({ width: ref.current.offsetWidth, height: ref.current.offsetHeight })
    }, [box]);



    return (
        <div className={classes['detect-face']}>
            <img id="inputImg" alt="" src={ImgUrl} ref={ref} />
            {box.map((el, index) => (
                <div className={classes.box} key={index}
                    style={{
                        left: el.left_col * imgRef.width,
                        top: el.top_row * imgRef.height,
                        right: imgRef.width - el.right_col * imgRef.width,
                        bottom: imgRef.height - el.bottom_row * imgRef.height,
                    }}
                />
            ))}
        </div>
    )
}

export default Image;