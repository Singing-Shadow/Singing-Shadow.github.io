// 定义 JSON 文件的相对路径
const filePath = "../json/image.json";
// 存储图片数据
var JSONFolder;
// 当前加载到的图片索引
let currentIndex = 0;
// 图片展示区域
const Path = "gallery";
// 每页加载的图片数量
const N = 8;

// 使用 Fetch API 获取 JSON 文件
fetch(filePath)
  .then(response => {
    if (!response.ok) {
      throw new Error("网络响应不正常");
    }
    return response.json();
  })
  .then(pictureFolder => {
    // 获取相应的图片信息
    JSONFolder = pictureFolder;
    loadMoreStuff(Path, N);
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

// 创建图片元素
function createPathElement(picture) {
  // 创建图片信息展示区域的容器元素
  const containerElement = document.createElement("div");
  containerElement.classList.toggle("imageInfo-container");

  // 创建图片展示区域的容器元素
  const imageContainerElement = document.createElement("div");
  imageContainerElement.classList.toggle("image-container");

  // 创建图片元素
  const imgElement = document.createElement("img");
  imgElement.src = picture.href;
  imgElement.alt = picture.name;
  imgElement.addEventListener("click", () => {
    const id = picture.id;
    const url = `imageInfo.html?id=${encodeURIComponent(id)}`;
    window.open(url, '_blank');
  });

  // 创建爱心按钮背景元素
  const loveButtonbackground = document.createElement("div");
  loveButtonbackground.classList.add("love-button-background");

  // 创建爱心按钮元素
  const loveButton = document.createElement("div");
  loveButton.classList.add("love-button");
  loveButton.addEventListener("click", () => {
    // 切换爱心按钮的样式
    loveButton.classList.toggle("loved");
  });

  // 将爱心按钮元素添加到爱心按钮背景元素中
  loveButtonbackground.appendChild(loveButton);

  // 将图片元素添加到图片展示区域的容器元素中
  imageContainerElement.appendChild(imgElement);

  // 将爱心按钮边框元素添加到图片展示区域的容器元素中
  imageContainerElement.appendChild(loveButtonbackground);

  // 创建图片名称元素
  const imgNameElement = document.createElement("p");
  imgNameElement.textContent = picture.name;
  // 字体粗细
  imgNameElement.style.fontWeight = "bold";

  // 创建图片作者元素
  const imgAuthorElement = document.createElement("p");
  imgAuthorElement.textContent = picture.author;

  // 将图片展示区域的容器元素添加到图片信息展示区域的容器元素中
  containerElement.appendChild(imageContainerElement);
  // 将图片名称元素添加到图片信息展示区域的容器元素中
  containerElement.appendChild(imgNameElement);
  // 将图片作者元素添加到图片信息展示区域的容器元素中
  containerElement.appendChild(imgAuthorElement);

  // 返回包含图片信息的容器元素
  return containerElement;
}

// 判断图片是否符合条件
function judgePicture(picture) {
  return false;
}