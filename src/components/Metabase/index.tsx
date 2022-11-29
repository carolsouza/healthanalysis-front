import { useEffect, useState } from "react";
import api from "../../services/api";

const MetabaseDashboard = () => {
  const [iframeUrl, setIframeUrl] = useState("");

  useEffect(() => {
    api.get("/metabase").then((res) => {
      console.log(res);
      setIframeUrl(res.data);
    });
  }, []);

  return (
    <iframe src={iframeUrl} frameBorder="0" width="1000" height="600"></iframe>
  );
};

export default MetabaseDashboard;
