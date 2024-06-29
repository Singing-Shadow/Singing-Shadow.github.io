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
    JSONFolder = pictureFolder;
    loadMoreStuff(Path, N);
  })
  .catch(error => {
    console.error("Error fetching JSON:", error);
  });

// 创建图片元素
function createPathElement(picture) {
  const containerElement = document.createElement("div");
  containerElement.classList.add("imageInfo-container");

  // 创建图片展示区域的容器元素
  const imageContainerElement = document.createElement("div");
  imageContainerElement.classList.add("image-container");
  const imgElement = document.createElement("img");
  imgElement.src = picture.thumbnailsHref[0];
  imgElement.alt = picture.name;
  imgElement.addEventListener("click", () => {
    const id = picture.id;
    const url = `imageInfo.html?id=${encodeURIComponent(id)}`;
    window.open(url, '_blank');
  });
  imageContainerElement.appendChild(imgElement);
  // 创建爱心按钮元素
  const loveButtonbackground = document.createElement("div");
  loveButtonbackground.classList.add("love-button-container");
  loveButtonbackground.title = "喜欢";
  const loveButton = document.createElement("div");
  loveButton.classList.add("love-button");
  loveButton.title = "喜欢";
  // ❤切换爱心按钮的样式
  loveButton.addEventListener("click", () => {
    loveButton.classList.toggle("loved");
  });
  loveButtonbackground.appendChild(loveButton);
  imageContainerElement.appendChild(loveButtonbackground);

  // 创建图片名称元素
  const imgNameElement = document.createElement("p");
  imgNameElement.textContent = picture.name;
  imgNameElement.style.fontWeight = "bold";
  imgNameElement.addEventListener("click", () => {
    const id = picture.id;
    const url = `imageInfo.html?id=${encodeURIComponent(id)}`;
    window.open(url, '_blank');
  });
  // 创建图片作者元素
  const imgAuthorElement = document.createElement("p");
  imgAuthorElement.textContent = picture.author;

  containerElement.appendChild(imageContainerElement);
  containerElement.appendChild(imgNameElement);
  containerElement.appendChild(imgAuthorElement);

  return containerElement;
}

// 判断图片是否符合条件
function judgePicture(picture) {
  return true;
}