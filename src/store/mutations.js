// mutations
export default {
  // -----------------------
  // ----------首頁---------
  // -----------------------
  // 後端接到的 150人
  getPeople(state, req) {
    console.log("memberData1", req);
    state.memberData = req.data;
  },

  getPageNum(state, status) {
    // console.log("PageNum", status);
    state.pageNum = status.data;
  },

  getPageNumArr(state, status) {
    // console.log("PageNumArr", status);
    state.pageNumArr = status.data;
  },

  getPageArr(state, status) {
    // console.log("PageArr", status);
    state.pageArr = status.data;
  },

  getThisPageShow(state, status) {
    // console.log("ThisPageShow", status);
    state.thisPageShow = status.data;
  },
  // -----------------------
  // --------會員列表--------
  // -----------------------
  getAdminPageNum(state, status) {
    // console.log("AdminPageNum", status);
    state.adminPageNum = status.data;
  },

  getAadminPageNumArr(state, status) {
    // console.log("AadminPageNumArr", status);
    state.adminPageNumArr = status.data;
  },

  getAdminPageArr(state, status) {
    // console.log("AdminPageArr", status);
    state.adminPageArr = status.data;
  },

  getAdminThisPage(state, status) {
    // console.log("AdminThisPage", status);
    state.adminThisPage = status.data;
  },

  getCountry(state, status) {
    // console.log("Country", status);
    state.countryOption = status.data;
  },

  getFilterPeople(state, status) {
    // console.log("filterPeople", status);
    state.filterPeople = status.data;
  },
  //+++++++++++++++++++++++++++++++++++
  //其他
  //+++++++++++++++++++++++++++++++++++
};
