import React, { useState, useEffect } from "react";
import TopBar from "../../components/TopBar";
import { ContentContainer } from "../../styles/global";

function Home() {
  const [user, setUser] = useState<string>("");

  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <>
      <TopBar />
      <ContentContainer>
        <h1>Exibir triagens</h1>
      </ContentContainer>
    </>
  );
}

export default Home;
