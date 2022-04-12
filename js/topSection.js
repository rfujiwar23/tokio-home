// const { default: Vue } = require("vue");



var vm = new Vue({
  el: "#topSection",
  data: {
    mainPoints: [
      {
        ptNum: "Point 1",
        body: "サロンメニューと<span>同じ</span>成分",
        img: "images/sect01_002.png",
        evenOdd: 'odd',
      },
      {
        ptNum: "Point 2",
        body: "週<span>2</span>回<span>月</span>曜と<span>木</span>曜日",
        img: "images/sect01_001.png",
        evenOdd: 'even',
      },
      {
        ptNum: "Point 3",
        body: "インカラミ効果を<span>最大持続</span>",
        img: "images/sect01_003.png",
        evenOdd: 'odd',
      },
    ],
  },
});

