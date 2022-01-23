import React, { useState } from "react";

import { Tab, Tabs } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTabs = ({ tabOne, tabTwo, tabOneLabel, tabTwoLabel }) => {
  const [value, setValue] = useState(0);
  const handleTabs = (e, val) => {
    setValue(val);
  };

  const TabPanel = ({ children, value, index }) => (
    <div>{value === index && children}</div>
  );

  const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      textTransform: "none",
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: "20px",
      marginRight: theme.spacing(1),
      color: "rgba(164, 115, 193, 0.49)",
      "&.Mui-selected": {
        color: "#fff",
      },
      "&.Mui-focusVisible": {
        backgroundColor: "rgba(100, 95, 228, 0.32)",
      },
    })
  );

  const StyledTabs = styled((props) => (
    <Tabs
      {...props}
      TabIndicatorProps={{
        children: <span className="MuiTabs-indicatorSpan" />,
      }}
    />
  ))({
    "& .MuiTabs-indicator": {
      backgroundColor: "transparent",
    },
    "& .MuiTabs-indicatorSpan": {
      backgroundColor: "#transparent",
    },
  });

  return (
    <>
      <StyledTabs
        value={value}
        textColor="primary"
        // indicatorColor="none"
        onChange={handleTabs}
      >
        <StyledTab label={tabOneLabel} />
        <StyledTab label={tabTwoLabel} />
      </StyledTabs>

      <TabPanel value={value} index={0}>
        {tabOne}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {tabTwo}
      </TabPanel>
    </>
  );
};

export default StyledTabs;
