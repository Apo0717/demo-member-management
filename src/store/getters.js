// getters
export default {
  // --------首頁--------
  memberData: (state) => state.memberData,
  pageNum: (state) => state.pageNum,
  pageNumArr: (state) => state.pageNumArr,
  pageArr: (state) => state.pageArr,
  thisPageShow: (state) => state.thisPageShow,

  // --------會員列表--------

  adminPageNum: (state) => state.adminPageNum,
  adminPageNumArr: (state) => state.adminPageNumArr,
  adminPageArr: (state) => state.adminPageArr,
  adminThisPage: (state) => state.adminThisPage,

  countryOption: (state) => state.countryOption,
  filterPeople: (state) => state.filterPeople,

  // --------自選清單--------
};
