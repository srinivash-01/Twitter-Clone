import React , {useState, SyntheticEvent} from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TweetsForyouTemplate from "./NotificationTweets";
import TabPanel from "@mui/lab/TabPanel";
import Tabs from "@mui/material/Tabs";
import "../styles/tabs.css";
import foryouData from "../Datas/Notification";
import "../styles/NotificationTab.css";
import Covid19 from "../Datas/COVID19";
import CircularProgress from '@mui/material/CircularProgress';
import TabTrending from "../Datas/TabTrending";
import News from "../Datas/News";
export default function LabTabs() {
  const [value, setValue] = useState("1");

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
 

  return (
    <Box sx={{ width: "100%", typography: "body1" }} >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons={false}
            aria-label="scrollable prevent tabs example"
            id="Notification"
          >
            <Tab label="All" value="1" style={{ fontSize: "12px" }}/>
            <Tab label="Mentions" value="2" style={{ fontSize: "12px" }}/>
          </Tabs>
        </Box>
        <TabPanel value="1" style={!foryouData?{textAlign: "center"}: {}}>
        {!foryouData? <CircularProgress  />: <TweetsForyouTemplate datas={foryouData}/>}
        </TabPanel>
        <TabPanel value="2">
        <TweetsForyouTemplate datas={foryouData}/>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
