// 获取图片文件夹路径
const pictureFolder = [
    "picture/Arcaea_光.jpg"
  , "picture/Arcaea_光2.jpg"
  , "picture/Arcaea_光和对立.jpg"
  , "/picture/JK 光＆对立.jpg"
  , "picture/Kou (Arcaea).jpg"
  , "picture/Kou.jpg"
  , "picture/pixivFANBOX.png"
  , "picture/Pokémon盖欧卡.jpg"
  , "picture/rkgk.png"
  , "picture/SHE - BLACK RAT 米山舞.jpg"
  , "picture/カノンとラティアス.png"
  , "picture/バニー紅ちゃん.jpg"
  , "picture/ポケモン25周年.jpg"
  , "picture/ラティアス & ラティオス.png"
  , "picture/或る神話の消えた日.jpg"
  , "picture/花对立.jpg"
];

for (let i = 0; i < pictureFolder.length; i++) {
  // 创建图片链接元素
  const linkElement = document.createElement("a");
  linkElement.href = pictureFolder[i];
  linkElement.alt = "图片" + (i + 1);
  linkElement.target = "_blank";

  // 创建图片元素
  const imgElement = document.createElement("img");
  imgElement.src = pictureFolder[i];
  imgElement.alt = "图片" + (i + 1);

  // 将图片元素添加到链接元素中
  linkElement.appendChild(imgElement);

  // 将链接元素添加到图片展示区域的容器元素中
  document.getElementById("image").appendChild(linkElement).appendChild(imgElement);
}