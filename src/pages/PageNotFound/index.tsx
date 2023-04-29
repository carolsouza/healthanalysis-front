import React, { useState, useEffect } from "react";
import TopBar from "../../components/TopBar";
import { ContentContainer } from "../../styles/global";

function PageNotFound() {
  const [data, setData] = useState<string>("");

  useEffect(() => {
    console.log('a');
  }, []);

  return (
    <>
      <TopBar />
      <ContentContainer>
        <h1>404 Page Not Found</h1>
      </ContentContainer>
    </>
  );
}

export default PageNotFound;
