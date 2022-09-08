import React from "react";

const UrlContext = React.createContext({
    ImgUrl: '',
    fetchData: () => {},
    box: []
  
});

export default UrlContext;