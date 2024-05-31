// 定义 JSON 文件的相对路径
const filePath = "../json/image.json";

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
      // 创建图片展示区域的容器元素
      const containerElement = document.createElement("div");

      // 创建图片链接元素
      const linkElement = document.createElement("a");
      linkElement.href = pictureFolder[i].href;
      linkElement.target = "_blank";

      // 创建图片元素
      const imgElement = document.createElement("img");
      imgElement.src = pictureFolder[i].href;
      imgElement.alt = pictureFolder[i].name;

      // 创建图片名称
      const imgNameElement = document.createElement("p");
      imgNameElement.textContent = pictureFolder[i].name;
      // 字体粗细
      imgNameElement.style.fontWeight = "bold";

      // 创建图片作者
      const imgAuthorElement = document.createElement("p");
      imgAuthorElement.textContent = pictureFolder[i].author;

      // 将图片元素添加到链接元素中
      linkElement.appendChild(imgElement);

      // 将链接元素添加到图片展示区域的容器元素中
      containerElement.appendChild(linkElement);
      // 将图片名称元素添加到图片展示区域的容器元素中
      containerElement.appendChild(imgNameElement);
      // 将图片作者元素添加到图片展示区域的容器元素中
      containerElement.appendChild(imgAuthorElement);

      // 将容器元素添加到图片展示区域中
      document.getElementById("image").appendChild(containerElement);

    }
  })
  .catch(error => {
    console.error("Error fetching JSON:", error);
  });


// 创建图片展示区域
/*
  <div>
    <a href="" target="">
      <img src="" alt="">
    </a>
    <p style="bold">
      textContent
    </p>
    <p>
      textContent
    </p>
  </div>
*/