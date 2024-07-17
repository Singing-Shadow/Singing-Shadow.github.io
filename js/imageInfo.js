import { JSONconfig } from './constants.js'
import { addChangeImageListener } from './switch.js'
// 存储图片数据
let JSONFolder;
// 当前图片的序号
export let index;

async function main() {
  JSONFolder = await JSONconfig.JSONFolder;
  const params = getQueryParams();
  // 并从json文件中找到对应的图片序号
  index = params.id - 1;
  updateImage();
  addClickListener();
  addChangeImageListener();
}
main();

// 解析URL中的查询参数
export function getQueryParams() {
  // 获取URL中的查询字符串，并去掉开头的 ? 字符
  const queryString = window.location.search.substring(1);
  // 存储解析出来的查询参数
  const params = {};
  // 获取查询参数的键值对
  // 将 id 转换为整数
  if (queryString) {
    params.id = parseInt(decodeURIComponent(queryString.split('=')[1]), 10);
  }
  return params;
}

// 添加点击事件监听器
function addClickListener() {
  const loveButton = document.getElementsByClassName("love")[0];
  // 添加切换爱心按钮样式的点击事件监听器
  loveButton.addEventListener("click", () => {
    loveButton.classList.toggle("loved");
  });

  const downloadButton = document.getElementById("download");
  // 添加下载按钮的点击事件监听器
  downloadButton.addEventListener("click", () => {
    // 弹出密码输入框
    const password = prompt("请输入下载密码:");
    // 正确密码
    const correctPassword = "616";
    // 检查密码是否正确
    if (password === correctPassword) {
      // 解析URL中的查询参数、并从json文件中找到对应的图片序号
      const i = getQueryParams().id - 1;
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

  // 添加跳转作者页面的点击事件监听器
  const imgAuthor = document.getElementById("author");
  imgAuthor.onclick = () => {
    const author = JSONFolder[index].author;
    window.location.href = `search.html?name=${encodeURIComponent(author)}`;
  };
}

// 更新当前图片的索引
export function changeIndex(newIndex) {
  index = newIndex;
}

// 更新图片
export function updateImage() {
  const imageContainerElement = document.getElementById("image");
  imageContainerElement.innerHTML = "";
  // 更新图片
  for (let i = 0; i < JSONFolder[index].href.length; i++) {
    const imgElement = document.createElement("img");
    imgElement.src = JSONFolder[index].href[i];
    imgElement.alt = JSONFolder[index].name;
    imageContainerElement.appendChild(imgElement);
  }

  // 更新名称
  const imgNameElement = document.getElementById("name");
  imgNameElement.textContent = JSONFolder[index].name;
  // 更新作者
  const imgAuthorElement = document.getElementById("author");
  imgAuthorElement.textContent = JSONFolder[index].author;
  // 更新标签
  const imgLabelElement = document.getElementById("label");
  imgLabelElement.innerHTML = "";
  JSONFolder[index].label.forEach(label => {
    const spanElement = document.createElement('span');
    spanElement.textContent = "#" + label;
    imgLabelElement.appendChild(spanElement);
  });

  // 更新当前图片的索引到 URL 中
  history.replaceState({}, '', `?id=${index + 1}`);
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
