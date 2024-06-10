// 定义一个函数，用于解析URL中的查询参数
function getQueryParams() {
  // 获取URL中的查询字符串，并去掉开头的 ? 字符
  const queryString = window.location.search.substring(1);
  // 存储解析出来的查询参数
  const params = {};
  // 获取查询参数的键值对
  // 将 id 转换为整数
  // 得到最终值
  if (queryString) {
    params.id = parseInt(decodeURIComponent(queryString.split('=')[1]), 10);
  }
  // 返回 params 对象
  return params;
}

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
    // 解析URL中的查询参数
    const params = getQueryParams();
    // 并从json文件中找到对应的图片序号
    let i = params.id - 1;
    // 创建图片信息展示区域的容器元素
    const containerElement = document.createElement("div");

    // 创建图片展示区域的容器元素
    const imageContainerElement = document.createElement("div");
    imageContainerElement.id = "image";

    // 创建图片元素
    const imgElement = document.createElement("img");
    imgElement.src = pictureFolder[i].href;
    imgElement.alt = pictureFolder[i].name;

    // 将图片元素添加到链接元素中
    imageContainerElement.appendChild(imgElement);

    // 创建信息展示区域的容器元素
    const infoContainerElement = document.createElement("div");
    infoContainerElement.id = "info";

    // 创建图片名称元素
    const imgNameElement = document.createElement("div");
    imgNameElement.id = "name";
    imgNameElement.style.fontSize = "120%";
    imgNameElement.style.fontWeight = "bold";
    imgNameElement.textContent = pictureFolder[i].name;

    // 创建图片作者元素
    const imgAuthorElement = document.createElement("div");
    imgAuthorElement.id = "author";
    imgAuthorElement.style.fontWeight = "bold";
    imgAuthorElement.textContent = pictureFolder[i].author;

    // 创建图片标签元素
    const imgLabelElement = document.createElement("div");
    imgLabelElement.id = "label";
    imgLabelElement.style.fontSize = "90%";
    pictureFolder[i].label.forEach(label => {
      const spanElement = document.createElement('span');
      spanElement.textContent = "#" + label;
      imgLabelElement.appendChild(spanElement);
    });

    // 将图片名称元素添加到信息展示区域的容器元素中
    infoContainerElement.appendChild(imgNameElement);
    // 将图片作者元素添加到信息展示区域的容器元素中
    infoContainerElement.appendChild(imgAuthorElement);
    // 将链接元素元素添加到信息展示区域的容器元素中
    infoContainerElement.appendChild(imgLabelElement);

    // 将图片展示区域添加到容器元素中
    containerElement.appendChild(imageContainerElement);
    // 将信息展示区域添加到容器元素中
    containerElement.appendChild(infoContainerElement);

    // 将容器元素添加到图片展示区域中
    document.getElementById("imageInfo").appendChild(containerElement);

  })
  .catch(error => {
    console.error("Error fetching JSON:", error);
  });


// 创建区域
/*
    <div>
        <div id="image">
            <img src="" alt="">
        </div>
        <div id="info">
            <div id="name"></div>
            <div id="author"></div>
            <div id="label">
                <span></span>
            </div>
        </div>
    </div>
*/