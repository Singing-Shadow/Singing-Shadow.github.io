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
// 存储图片数据
var JSONFolder;

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

    // 获取相应的图片信息
    JSONFolder = pictureFolder;

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

    // 创建图片设置区域
    const imgsetting = document.createElement("div");
    imgsetting.id = "setting";

    // 创建爱心按钮元素
    const loveButton = document.createElement("div");
    loveButton.classList.toggle("love");
    loveButton.addEventListener("click", () => {
      // 切换爱心按钮的样式
      loveButton.classList.toggle("loved");
    });

    // 创建下载按钮元素
    const downloadButton = document.createElement("div");
    downloadButton.id = "download";
    downloadButton.addEventListener("click", () => {
      // 弹出密码输入框
      const password = prompt("请输入下载密码:");

      // 正确密码
      const correctPassword = "616";
      // 检查密码是否正确
      if (password === correctPassword) {
        // 密码正确，执行下载操作
        const a = document.createElement("a");
        a.href = pictureFolder[i].href;
        a.download = pictureFolder[i].name;
        a.click();
      } else {
        // 密码错误，显示提示信息
        alert("密码错误，无法下载。");
      }
    });

    // 将爱心按钮边框元素添加到图片设置区域中
    imgsetting.appendChild(loveButton);
    // 将下载按钮元素添加到图片设置区域中
    imgsetting.appendChild(downloadButton);

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

    // 将图片设置区域添加到信息展示区域的容器元素中
    infoContainerElement.appendChild(imgsetting);
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
        <div id="imgsetting">
          <button id="loveButton">❤</button>
          <button id="downloadButton">下载</button>
        </div>
        <div id="name"></div>
        <div id="author"></div>
        <div id="label">
          <span></span>
        </div>
      </div>
    </div>
*/

// 读取键盘
document.addEventListener('keydown', (event) => {
  // 获取按下的键码
  const key = event.key;

  // 如果按下的是左箭头键
  if (key === 'ArrowLeft') {
    // 切换到上一张图片
    goToPreviousImage();
    console.log("left");
  }

  // 如果按下的是右箭头键
  if (key === 'ArrowRight') {
    // 切换到下一张图片
    goToNextImage();
    console.log("right");
  }
});

// 切换到上一张图片
function goToPreviousImage() {
  // 获取当前图片的索引
  let currentIndex = getCurrentIndex();

  // 计算上一张图片的索引
  let previousIndex = currentIndex - 1;

  // 如果是第一张图片，则循环到最后一张图片
  if (previousIndex < 0) {
    previousIndex = JSONFolder.length - 1;
  }

  // 切换到上一张图片
  updateImage(previousIndex);
}

// 切换到下一张图片
function goToNextImage() {
  // 获取当前图片的索引
  let currentIndex = getCurrentIndex();

  // 计算下一张图片的索引
  let nextIndex = currentIndex + 1;

  // 如果是最后一张图片，则循环到第一张图片
  if (nextIndex >= JSONFolder.length) {
    nextIndex = 0;
  }

  // 切换到下一张图片
  updateImage(nextIndex);
}

// 获取当前图片的索引
function getCurrentIndex() {
  // 解析URL中的查询参数
  const params = getQueryParams();
  // 并从json文件中找到对应的图片序号
  return params.id - 1;
}

// 更新图片
function updateImage(index) {
  // 获取图片元素
  const imgElement = document.querySelector('#image img');

  // 更新图片的 src 和 alt 属性
  imgElement.src = JSONFolder[index].href;
  imgElement.alt = JSONFolder[index].name;

  // 更新图片名称元素
  const imgNameElement = document.getElementById('name');
  imgNameElement.textContent = JSONFolder[index].name;

  // 更新图片作者元素
  const imgAuthorElement = document.getElementById('author');
  imgAuthorElement.textContent = JSONFolder[index].author;

  // 更新图片标签元素
  const imgLabelElement = document.getElementById('label');
  imgLabelElement.innerHTML = ''; // 清空原有标签
  JSONFolder[index].label.forEach(label => {
    const spanElement = document.createElement('span');
    spanElement.textContent = "#" + label;
    imgLabelElement.appendChild(spanElement);
  });

  // 更新当前图片的索引到 URL 中
  history.replaceState({}, '', `?id=${index + 1}`);
}

// 左右滑动切换图片
document.addEventListener('DOMContentLoaded', (event) => {
  // 初始化触摸事件相关变量
  let startX;
  let startY;
  let endX;
  let endY;

  // 处理触摸开始事件
  function handleTouchStart(evt) {
    const firstTouch = evt.touches[0];
    startX = firstTouch.clientX;
    startY = firstTouch.clientY;
    // 获取触摸开始时间
    startTime = new Date().getTime();
  }

  // 处理触摸移动事件
  function handleTouchMove(evt) {
    if (!startX || !startY) {
      return;
    }
    endX = evt.touches[0].clientX;
    endY = evt.touches[0].clientY;
  }

  // 处理触摸结束事件
  function handleTouchEnd() {
    // 如果触摸开始和结束位置存在
    if (!startX || !startY || !endX || !endY) {
      return;
    }

    // 获取触摸结束时间
    const endTime = new Date().getTime();
    // 计算触摸持续时间
    const elapsedTime = endTime - startTime;

    // 如果触摸持续时间在1秒以内
    if (elapsedTime <= 1000) {


      // 计算触摸移动距离
      const diffX = endX - startX;
      const diffY = endY - startY;

      // 如果水平移动距离大于垂直移动距离的两倍，则判定为左右滑动
      if (Math.abs(diffX) > Math.abs(diffY) * 2) {
        if (diffX > 0) {
          // 右滑动作
          goToPreviousImage();
        } else {
          // 左滑动作
          goToNextImage();
        }
      }
    }

    // 重置触摸事件相关变量
    startX = null;
    startY = null;
    endX = null;
    endY = null;
  }

  // 添加触摸事件监听器
  document.addEventListener('touchstart', handleTouchStart, false);
  document.addEventListener('touchmove', handleTouchMove, false);
  document.addEventListener('touchend', handleTouchEnd, false);
});