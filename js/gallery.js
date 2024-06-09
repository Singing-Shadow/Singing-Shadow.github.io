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
      // 创建图片信息展示区域的容器元素
      const containerElement = document.createElement("div");
      containerElement.className = "imageInfo-container";

      // 创建图片展示区域的容器元素
      const imageContainerElement = document.createElement("div");
      imageContainerElement.className = "image-container";

      // 创建图片元素
      const imgElement = document.createElement("img");
      imgElement.src = pictureFolder[i].href;
      imgElement.alt = pictureFolder[i].name;
      imgElement.addEventListener("click", () => {
        const id = pictureFolder[i].id;
        const url = `imageInfo.html?id=${encodeURIComponent(id)}`;
        window.open(url, '_blank');
      });

      // 将图片元素添加到图片展示区域的容器元素中
      imageContainerElement.appendChild(imgElement);

      // 创建图片名称元素
      const imgNameElement = document.createElement("p");
      imgNameElement.textContent = pictureFolder[i].name;
      // 字体粗细
      imgNameElement.style.fontWeight = "bold";

      // 创建图片作者元素
      const imgAuthorElement = document.createElement("p");
      imgAuthorElement.textContent = pictureFolder[i].author;

      // 将图片展示区域的容器元素添加到图片信息展示区域的容器元素中
      containerElement.appendChild(imageContainerElement);
      // 将图片名称元素添加到图片信息展示区域的容器元素中
      containerElement.appendChild(imgNameElement);
      // 将图片作者元素添加到图片信息展示区域的容器元素中
      containerElement.appendChild(imgAuthorElement);

      // 将容器元素添加到图片展示区域中
      document.getElementById("gallery").appendChild(containerElement);

    }
  })
  .catch(error => {
    console.error("Error fetching JSON:", error);
  });


// 创建图片展示区域
/*
  <div>
    <div>
      <img src="" alt="">
    </div>
    <p style="bold">
      textContent
    </p>
    <p>
      textContent
    </p>
  </div>
*/