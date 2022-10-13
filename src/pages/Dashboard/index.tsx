import React, { useState, useEffect } from "react";
import TopBar from "../../components/TopBar";
import { ContentContainer } from "../../styles/global";

function Dashboard() {
  const [data, setData] = useState<string>("");

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <>
      <TopBar />
      <ContentContainer>
        <h1>Exibir dashboard</h1>
      </ContentContainer>
    </>
  );
}

export default Dashboard;
