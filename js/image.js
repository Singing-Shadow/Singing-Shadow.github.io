// 定义 JSON 文件的相对路径
const filePath = "../json/image.json";

// 定义目标路径
const targetPath = "../picture/Arcaea_Kou.jpg";

// 使用 Fetch API 获取 JSON 文件
fetch(filePath)
  .then(response => {
    if (!response.ok) {
      throw new Error("网络响应不正常");
    }
    return response.json();
  })
  .then(pictureFolder => {
    // 遍历JSON数据中的数组
    for (let i = 0; i < pictureFolder.length; i++) {
      // 判断图片文件是否存在
      if (targetPath != pictureFolder[i].href) {
        console.error("图片文件不存在");
        continue;
      }

      // 创建图片链接元素
      const linkElement = document.createElement("a");
      linkElement.href = pictureFolder[i].href;
      linkElement.alt = pictureFolder[i].name;
      linkElement.target = "_blank";

      // 创建图片元素
      const imgElement = document.createElement("img");
      imgElement.src = pictureFolder[i].href;
      imgElement.alt = pictureFolder[i].name;

      // 将图片元素添加到链接元素中
      linkElement.appendChild(imgElement);
      // 将链接元素添加到图片展示区域的容器元素中
      document.getElementById("image").appendChild(linkElement);
    }
  })
  .catch(error => {
    console.error("Error fetching JSON:", error);
  });