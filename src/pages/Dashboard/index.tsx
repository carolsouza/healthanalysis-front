import React, { useState, useEffect } from "react";
import TopBar from "../../components/TopBar";
import { ContentContainer } from "../../styles/global";
import MetabaseDashboard from "../../components/Metabase";
import { MetabaseContent } from "./styles";

function Dashboard() {
  const [data, setData] = useState<string>("");

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <>
      <TopBar isLogged={false} page="dashboard" />
      <ContentContainer>
        <MetabaseContent>
          <MetabaseDashboard></MetabaseDashboard>
        </MetabaseContent>
      </ContentContainer>
    </>
  );
}

export default Dashboard;
