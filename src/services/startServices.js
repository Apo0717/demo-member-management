import apiHelper from "../utils/apiHelper";

//召喚********************
const callPeople = () => {
  return apiHelper.get(apiHelper.apiServers.url, "?results=150");
};

export default {
  callPeople,
};
