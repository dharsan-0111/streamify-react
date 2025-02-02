import React from "react";
import Metrics from "../components/Metrics";
import DataVisualisation from "../components/DataVisualisation";
import StreamsTable from "../components/StreamsTable";
import { WelcomeAnimation } from "../components/WelcomeAnimation";
import Header from "../components/Header";

const DashboardPage: React.FC = (): React.JSX.Element =>
{
    return (
        <div>
            <Header />
            <WelcomeAnimation />
            <Metrics />
            <DataVisualisation />
            <StreamsTable />
        </div>
    )
}

export default DashboardPage;