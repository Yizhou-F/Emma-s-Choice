document.addEventListener("DOMContentLoaded", () => {
  const teaData = {
    tea: [
      {
        type: "Black Tea",
        chineseName: "红茶",
        items: ["宜兴红茶", "滇红", "肯尼亚红茶", "正山小种", "金骏眉"],
      },
      {
        type: "Green Tea",
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
        type: "Dark Tea",
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
        type: "White Tea",
        chineseName: "白茶",
        items: ["寿眉", "金花寿眉", "白牡丹", "白毫银针"],
      },
      {
        type: "Oolong Tea",
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

  // Flatten all items into a single array
  const allItems = teaData.tea.flatMap((teaType) => teaType.items);
  // Pick a random item
  const randomItem = allItems[Math.floor(Math.random() * allItems.length)];

  // Update the result
  const resultHeading = document.getElementById("teaOfTheDay");
  resultHeading.textContent = randomItem;
});
