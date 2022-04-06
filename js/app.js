// const { default: Vue } = require("vue");

var vm = new Vue({
  el: "#section01",
  data: {
    message:
      "サロンメニューで行う4ステップのトリートメントメニュー。<br>髪のダメージやお客様のお悩みを解決します",
    threePoints: [
      {
        subtitle: "特許技術",
        subtitle2: "インカラミ",
        text: "毛髪の大部分はタンパク質で構成されており、それらはカラーや加齢などによって薄なわれる。そのタンパク質毛髪内部に再形成できる唯一の技術。",
      },
      {
        subtitle: "毛髪強度回復",
        subtitle2: "140%",
        text: "インカラミの効果によって神の強度回復力は通常のおよそ8倍に。弱った髪を強くし、切れ毛などの悩みを解消します。",
      },
      {
        subtitle: "ノーベル賞受賞成分",
        subtitle2: "フラーレン",
        text: "活性酵素を除去する高い抗酸化力をもち、持続性にも優れた成分。紫外線など日々の避けられないダメージから髪を守ります。",
      },
    ],
    message2: "強く、美しく、しなやかに、髪がよみがえる実感。",
  },
});

var vm = new Vue({
  el: "#section02",
  data: {
    // h2
    text1:
      "サロントリートメントを受けたお客様とサロンの思いは？",
    // h3
    text2: "そんなお客様に美容師・サロンケアから、<br>週2回、ご自宅でのケアで<br>「TOKIOインカラミの効果が最大１ヶ月持続」する<br>TOKIO HOMEのご提案です。",

    // h4
    text3: 'その持続の理由は簡単!!<br>サロンで使用するトリートメントと同じ成分を使用した<br>”業界初の集中ケアマスク”',

    // h5
    text4: "TOKIOインカラミサロントリートメント【4番】と同じ成分",

    // h6
    text5: "週<em>2</em>回、<span>月曜日</span>と<span>木曜日</span>に使うだけで、<br>サロントリートメントあとの<br>質感をずっと楽しめる！",
      // div
    voices: [
      {
        heading: 'お客様の実感',
        body: 'この質感がもっと長く続けばいいのに',
      },
      {
        heading: 'サロンの想い',
        body: 'お客様に最大の満足感を次回も綺麗な状態で',
      },
    ],

    parts: [
      {
        id:1,
        heading: '髪に潤いを与える',
        body: 'セラミド、18MEA,トレハロースなどの保湿成分によって、水分と油分のバランスを整えます',
      },
      {
        id:2,
        heading: '持続を高める',
        body: '毛髪の質感を補うことによって、TOKIOインカラミの効果実感の持続をサポートします。',
      },
      {
        id:3,
        heading: '紫外線から守る',
        body: 'フラーレンの働きによって、活性酸素を除去します。',
      },
      {
        id:4,
        heading: 'ダメージケア',
        body: '髪に栄養を与えながら、バリア機能をもたらしていきます。',
      }

    ]
  }
});


var vm = new Vue({
    el: "#section04",
    data: {
        // steps
        steps: [
        {
            id:1,
            img: 'images/tkh.png',
            body: 'シャンプー後に水分をしっかり切る',
            alt: "シャンプー後に",
        },
        {
            id:2,
            img: 'images/tkh.png',
            body: '手のひらに3センチ程スライム状のHOMEを出してから',
            alt: "TOKIO HOMEを手に",
        },
        {
            id:3,
            img: 'images/tkh.png',
            body: 'クリームになるまで手のひらでしっかり伸ばします',
            alt: "TOKIO HOMEをクリーム状に",
        },
        {
            id:4,
            img: 'images/tkh.png',
            body: '中間から毛先中心に馴染ませて5分ほど放置して流します',
            alt: "TOKIO HOMEを放置",
        },
      ]
    }
});

var vm = new Vue({
  el: "#section05",
  data: {
      topText: 'サロンはこちらから',
      salonType: [
        {
          img: 'images/img-tokio.png',
          link: 'http://tokio.tokyo/',
          text: 'tokio.tokyoサロン掲載サイト',
        },
        {
          img: 'images/img-kamisma.png',
          link: 'https://beauty.kamisma.com/',
          text: 'カミスマビューティーサロン予約サイト',
        }
      ]
     
  }
});

var vm = new Vue({
  el: '#section06',
  data: {
    topText: '更に「イエでインカラミできる毎日」のケアは',
    images: [
      {imgURL: 'images/tokio_bg001.png', alt: 'TOKIO インカラミ'},
      {imgURL: 'images/tokio_bg002.png', alt: 'TOKIO インカラミ HEAD SPA'},
    ]
  }
});
