// 定义 JSON 文件的相对路径
const filePath = '../json/image.json';
// 存储图片数据
let JSONFolder;
// 当前加载到的图片索引
let currentIndex = 0;
// 图片展示区域
const Path = 'gallery';
// 每页加载的图片数量
const N = 8;
// 判断条件
let flag = "MiyU";
// 符合条件图片数目
let count = 0;

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
    // 解析URL中的查询参数
    flag = getQueryParams().name;
    // 初始化加载一些图片
    loadMoreStuff(Path, N);
    document.getElementById("search-QueryParams").innerHTML = `search: ${flag}`;
  })
  .catch(error => {
    console.error("Error fetching JSON:", error);
  });

// 定义一个函数，用于解析URL中的查询参数
function getQueryParams() {
  // 获取URL中的查询字符串，并去掉开头的 ? 字符
  const queryString = window.location.search.substring(1);
  // 存储解析出来的查询参数
  const params = {};
  // 获取查询参数的键值对
  // 得到最终值
  if (queryString) {
    params.name = decodeURIComponent(queryString.split('=')[1]);
  }
  // 返回 params 对象
  return params;
}

// 创建图片元素
function createPathElement(picture) {
  // 创建图片信息展示区域的容器元素
  const containerElement = document.createElement("div");
  containerElement.className = "imageInfo-container";

  // 创建图片展示区域的容器元素
  const imageContainerElement = document.createElement("div");
  imageContainerElement.className = "image-container";
  // 创建图片元素
  const imgElement = document.createElement("img");
  imgElement.src = picture.thumbnailsHref[0];
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
  imgNameElement.addEventListener("click", () => {
    const id = picture.id;
    const url = `imageInfo.html?id=${encodeURIComponent(id)}`;
    window.open(url, '_blank');
  });
  // 创建图片作者元素
  const imgAuthorElement = document.createElement("p");
  imgAuthorElement.textContent = picture.author;
  imgAuthorElement.onclick = () => {
    const author = picture.author;
    const url = `search.html?name=${encodeURIComponent(author)}`;
    window.open(url, '_blank');
  }

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
  const pictureAuthor = picture.author.toLowerCase();
  const pictureName = picture.name.toLowerCase();
  const searchFlag = flag.toLowerCase();

  // 判断图片作者是否包含关键词
  return pictureAuthor.includes(searchFlag) || pictureName.includes(searchFlag);
}

// // 突显关键词
// document.addEventListener("DOMContentLoaded", () => {
//   // 获取所有带有 id="gallery" 下的 p 元素
//   const elements = document.querySelectorAll('#gallery p');

//   // 使用正则表达式生成一个全局不区分大小写的匹配模式
//   const regex = new RegExp(flag, 'gi');

//   // 遍历每个元素
//   elements.forEach(element => {
//     // 获取元素的 HTML 内容
//     let text = element.innerHTML;

//     // 使用正则表达式匹配并替换文本中的特定字符
//     text = text.replace(regex, `<span style="color: red;">${flag}</span>`);

//     // 重新设置元素的 HTML 内容，包含样式
//     element.innerHTML = text;
//   });
// });
