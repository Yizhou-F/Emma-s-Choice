document.addEventListener("DOMContentLoaded", () => {
  const teaData = {
    tea: [
      {
        type: "Black",
        chineseName: "红茶",
        items: ["宜兴红茶", "滇红", "肯尼亚红茶", "正山小种", "金骏眉"],
      },
      {
        type: "Green",
        chineseName: "绿茶",
        items: [
          "六安瓜片",
          "信阳毛尖",
          "藤茶",
          "茉莉针王",
          "大雪山生普",
          "茉莉毛尖",
          "都匀毛尖",
          "安吉白茶",
          "龙井",
        ],
      },
      {
        type: "Dark",
        chineseName: "黑茶",
        items: [
          "97茯茶",
          "98茯茶",
          "黑砖",
          "普尔饼",
          "陕西金花黑砖",
          "梗砖",
          "小青柑",
          "高山荒野天尖",
          "百福",
        ],
      },
      {
        type: "White",
        chineseName: "白茶",
        items: ["寿眉", "金花寿眉", "白牡丹", "白毫银针"],
      },
      {
        type: "Oolong",
        chineseName: "乌龙茶",
        items: [
          "老枞水仙",
          "桂花乌龙",
          "白芽奇兰",
          "大红袍",
          "铁观音",
          "小龙蛋",
          "鸭屎香",
        ],
      },
    ],
  };

  const urlParams = new URLSearchParams(window.location.search);
  const typeParam = urlParams.get("teatype");

  const allItems = teaData.tea.flatMap((t) => t.items);

  let selectionPool = allItems;
  if (typeParam) {
    const foundTea = teaData.tea.find(
      (teaObj) => teaObj.type.toLowerCase() === typeParam.toLowerCase()
    );
    if (foundTea) {
      selectionPool = foundTea.items;
    }
  }

  const randomItem =
    selectionPool[Math.floor(Math.random() * selectionPool.length)];

  const resultHeading = document.getElementById("teaOfTheDay");
  resultHeading.textContent = randomItem;
});
