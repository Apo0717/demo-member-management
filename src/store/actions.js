import startServices from "../services/startServices";
// actions
export default {
  //首頁------------------------
  //拿取後端資料的內容
  handPeople({ commit, dispatch }) {
    let handleArr = [];
    startServices.callPeople().then((res) => {
      console.log(res.results, "get");
      //處理簡化資料
      handleArr = res.results.map((e) => {
        return {
          ...e,
          showName: e.name.first + " " + e.name.last,
          imgL: e.picture.large,
          imgM: e.picture.medium,
          imgS: e.picture.thumbnail,
          showCountry: e.location.country,
          showCity: e.location.city,
        };
      });
      commit("getPeople", { data: handleArr });
      commit("getFilterPeople", { data: handleArr });

      //接下來要做的事 👇
      dispatch("cutForHome");
      dispatch("cutForAdmin");
      dispatch("countryOption");
    });
  },

  cutForHome({ commit, state }) {
    let handleArr = state.memberData;
    //首頁 每頁20筆
    let per = 20;
    let page = Math.ceil(handleArr.length / per); //幾頁
    commit("getPageNum", { data: page });

    let pageNumArr = []; //總頁碼
    for (let i = 1; i <= page; i++) {
      pageNumArr.push(i + " ");
    }
    commit("getPageNumArr", { data: pageNumArr });

    //分頁顯示
    let PageShow = [];
    for (let i = 0; i < page; i++) {
      PageShow[i] = [];
      PageShow[i].push(handleArr.slice(per * i, per * (i + 1)));
    }

    commit("getPageArr", { data: PageShow });
    commit("getThisPageShow", { data: PageShow[0][0] });
  },

  cutForAdmin({ commit, state }) {
    let memberData = state.filterPeople;
    //首頁 每頁10筆
    let per = 10;
    let page = Math.ceil(memberData.length / per); //幾頁
    commit("getAdminPageNum", { data: page });

    let pageNumArr = []; //總頁碼
    for (let i = 1; i <= page; i++) {
      pageNumArr.push(i + " ");
    }
    commit("getAadminPageNumArr", { data: pageNumArr });

    //分頁顯示
    let PageShow = [];
    for (let i = 0; i < page; i++) {
      PageShow[i] = [];
      PageShow[i].push(memberData.slice(per * i, per * (i + 1)));
    }

    commit("getAdminPageArr", { data: PageShow });
    commit("getAdminThisPage", { data: PageShow[0][0] });
  },

  countryOption({ commit, state }) {
    let memberData = state.memberData;
    let options = [];
    options = memberData.map((e) => {
      return e.showCountry;
    });
    // console.log(options, "選出啥");
    //不重複國籍且排序
    options = options.filter((element, index, arr) => {
      return arr.indexOf(element) === index;
    });
    options = options.sort();
    commit("getCountry", { data: options });
    console.log(options, "不重複");
  },
  //+++++++++++++++++++++++++++++++++++
  //其他
  //+++++++++++++++++++++++++++++++++++
};
