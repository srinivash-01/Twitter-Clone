import React , {useState, SyntheticEvent} from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TweetsForyouTemplate from "./TweetsForyou";
import TabPanel from "@mui/lab/TabPanel";
import Tabs from "@mui/material/Tabs";
import "../styles/tabs.css";
import foryouData from "../Datas/foryou";
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
          >
            <Tab label="For you" value="1" style={{ fontSize: "12px" }} />
            <Tab label="COVID-19" value="2" style={{ fontSize: "12px" }} />
            <Tab label="Treanding" value="3" style={{ fontSize: "12px" }} />
            <Tab label="News" value="4" style={{ fontSize: "12px" }} />
            <Tab label="Sports" value="5" style={{ fontSize: "12px" }} />
            <Tab label="Entertainment" value="6" style={{ fontSize: "12px" }} />
          </Tabs>
        </Box>
        <TabPanel value="1" style={!foryouData?{textAlign: "center"}: {}}>
        {!foryouData? <CircularProgress  />: <TweetsForyouTemplate datas={foryouData}/>}
        
        </TabPanel>
        <TabPanel value="2">
        <TweetsForyouTemplate datas={Covid19}/>
        </TabPanel>
        <TabPanel value="3">
        <TweetsForyouTemplate datas={TabTrending}/>
        </TabPanel>
        <TabPanel value="4">
        <TweetsForyouTemplate datas={News}/>
        </TabPanel>
        <TabPanel value="5">
        <TweetsForyouTemplate datas={Covid19}/>
        </TabPanel>
        <TabPanel value="6">
        <TweetsForyouTemplate datas={foryouData}/>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
