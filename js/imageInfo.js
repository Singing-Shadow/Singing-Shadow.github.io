// 定义 JSON 文件的相对路径
const filePath = "../json/image.json";
// 存储图片数据
export var JSONFolder;

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
    const params = getQueryParams();
    // 并从json文件中找到对应的图片序号
    let i = params.id - 1;

    // 初始化加载
    const containerElement = loading(pictureFolder[i]);
    // 将容器元素添加到图片展示区域中
    document.getElementById("imageInfo").appendChild(containerElement);
  })
  .catch(error => {
    console.error("Error fetching JSON:", error);
  });

// 定义一个函数，用于解析URL中的查询参数
export function getQueryParams() {
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

// 创建图片元素
function loading(picture) {
  // 创建图片信息展示区域的容器元素
  const containerElement = document.createElement("div");

  // 创建图片展示区域的容器元素
  const imageContainerElement = document.createElement("div");
  imageContainerElement.id = "image";

  for (let i = 0; i < picture.href.length; i++) {
    // 创建图片元素
    const imgElement = document.createElement("img");
    imgElement.src = picture.href[i];
    imgElement.alt = picture.name;

    // 将图片元素添加到链接元素中
    imageContainerElement.appendChild(imgElement);
  }

  // 创建信息展示区域的容器元素
  const infoContainerElement = document.createElement("div");
  infoContainerElement.id = "info";

  // 创建图片设置区域
  const imgsetting = document.createElement("div");
  imgsetting.id = "setting";

  // 创建爱心按钮元素
  const loveButton = document.createElement("div");
  loveButton.classList.toggle("love");
  loveButton.title = "喜欢";
  loveButton.addEventListener("click", () => {
    // 切换爱心按钮的样式
    loveButton.classList.toggle("loved");
  });

  // 创建下载按钮元素
  const downloadButton = document.createElement("div");
  downloadButton.id = "download";
  downloadButton.title = "下载";
  downloadButton.addEventListener("click", () => {
    // 弹出密码输入框
    const password = prompt("请输入下载密码:");
    // 正确密码
    const correctPassword = "616";
    // 检查密码是否正确
    if (password === correctPassword) {
      // 解析URL中的查询参数、并从json文件中找到对应的图片序号
      const i = getQueryParams().id - 1;
      // 密码正确，执行下载操作
      if (JSONFolder[i].href.length === 1) {
        const a = document.createElement("a");
        a.href = JSONFolder[i].href[0];
        a.download = JSONFolder[i].name;
        a.click();
      }
      else {
        downloadPicturesAsZip(JSONFolder[i]);
      }
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
  imgNameElement.style.fontSize = "1.2rem";
  imgNameElement.style.fontWeight = "bold";
  imgNameElement.textContent = picture.name;

  // 创建图片作者元素
  const imgAuthorElement = document.createElement("div");
  imgAuthorElement.id = "author";
  imgAuthorElement.style.fontWeight = "bold";
  imgAuthorElement.textContent = picture.author;

  // 创建图片标签元素
  const imgLabelElement = document.createElement("div");
  imgLabelElement.id = "label";
  imgLabelElement.style.fontSize = "0.9rem";
  picture.label.forEach(label => {
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

  // 返回包含图片信息的容器元素
  return containerElement;
}

// 下载图片并创建zip文件
function addImagesToZip(zip, picture) {
  return new Promise((resolve, reject) => {
    let count = 0;
    picture.href.forEach((url, i) => {
      JSZipUtils.getBinaryContent(url, function (err, data) {
        if (err) {
          reject(err);
        } else {
          const ext = url.split('.').pop().split('?')[0];
          zip.file(`${picture.name}_${i + 1}.${ext}`, data, { binary: true });
          count++;
          if (count === picture.href.length) {
            resolve(zip);
          }
        }
      });
    });
  });
}

// 下载zip文件
function downloadZip(zip, name) {
  zip.generateAsync({ type: "blob" })
    .then(function (content) {
      saveAs(content, `${name}.zip`);
    });
}

// 创建、下载zip压缩包
async function downloadPicturesAsZip(picture) {
  try {
    const zip = new JSZip();
    await addImagesToZip(zip, picture);
    downloadZip(zip, picture.name);
  } catch (error) {
    console.error("压缩文件创建失败：", error);
  }
}
