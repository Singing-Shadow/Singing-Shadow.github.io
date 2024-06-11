// 定义 JSON 文件的相对路径
const filePath = "../json/image.json";
// 存储图片数据
var JSONFolder;
// 当前加载到的图片索引
let currentIndex = 0;

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

    // 初始化加载一些图片
    loadMoreImages();
  })
  .catch(error => {
    console.error("Error fetching JSON:", error);
  });

// 创建图片展示区域
/*
  <div>
    <div id="setting">
      <form>
        <input id="" type="text" placeholder="MiyU">
        <input id="" type="submit" value="搜索">
        </form>
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
function createImageElement(picture) {
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

// 加载更多图片
function loadMoreImages() {
  const gallery = document.getElementById("gallery");

  // 加载接下来的 12 张图片
  for (let i = 0; i < 12 && currentIndex < JSONFolder.length; currentIndex++) {
    console.log("loading");
    const picture = JSONFolder[currentIndex];
    // 创建图片元素并添加到画廊中
    const imgElement = createImageElement(picture);
    gallery.appendChild(imgElement);
    // 更新当前索引
    i++;
  }
}

// 处理滚动事件
function handleScroll() {
  const footer = document.getElementById("footer");
  const rect = footer.getBoundingClientRect();
  // 检查页脚是否可见
  const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

  // 如果页脚可见，则加载更多图片
  if (isVisible) {
    loadMoreImages();
  }
}

// 懒加载：添加滚动事件监听器，当页面滚动时调用 handleScroll 函数
document.addEventListener('scroll', () => {
  const footer = document.getElementById("footer");
  const rect = footer.getBoundingClientRect();
  // 检查页脚是否可见
  const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

  // 如果页脚可见，则加载更多图片
  if (isVisible) {
    loadMoreImages();
  }
});