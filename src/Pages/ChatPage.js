import { Box } from "@chakra-ui/layout";
import { useState, useEffect } from "react";
import Chatbox from "../components/miscellaneous/ChatBox";
import MyChats from "../components/miscellaneous/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";
import { useHistory } from "react-router-dom";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user, setUser } = ChatState();

  const history = useHistory();
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (userInfo) {
      setUser(userInfo);
    }
  }, [history]);

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Chatpage;
