import { pictureconfig } from './constants.js';
import { loadMoreStuff, addLazyLoadListener } from './lazyLoad.js';
const Path = 'gallery';

document.addEventListener('DOMContentLoaded', () => {
  main();
});
function main() {
  // 解析URL中的查询参数
  pictureconfig.flag = getQueryParams().name;
  document.getElementById('search-QueryParams').innerHTML = `search: ${pictureconfig.flag}`;
  loadMoreStuff(Path, createPathElement, judgePicture);
  addLazyLoadListener(Path, createPathElement, judgePicture);
}

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
  const containerElement = document.createElement('div');
  containerElement.className = 'imageInfo-container';

  // 创建图片展示区域的容器元素
  const imageContainerElement = document.createElement('div');
  imageContainerElement.className = 'image-container';
  // 创建图片元素
  const imgElement = document.createElement('img');
  imgElement.src = picture.thumbnailsHref[0];
  imgElement.alt = picture.name;
  imgElement.addEventListener('click', () => {
    const id = picture.id;
    const url = `imageInfo.html?id=${encodeURIComponent(id)}`;
    window.open(url, '_blank');
  });
  // 创建爱心按钮元素
  const loveButtonbackground = document.createElement('div');
  loveButtonbackground.classList.add('love-button-background');
  const loveButton = document.createElement('div');
  loveButton.classList.add('love-button');
  // ❤切换爱心按钮的样式
  loveButton.addEventListener('click', () => {
    // 切换爱心按钮的样式
    loveButton.classList.toggle('loved');
  });
  loveButtonbackground.appendChild(loveButton);
  imageContainerElement.appendChild(imgElement);
  imageContainerElement.appendChild(loveButtonbackground);

  // 创建图片名称元素
  const imgNameElement = document.createElement('p');
  imgNameElement.textContent = picture.name;
  imgNameElement.style.fontWeight = 'bold';
  imgNameElement.addEventListener('click', () => {
    const id = picture.id;
    const url = `imageInfo.html?id=${encodeURIComponent(id)}`;
    window.open(url, '_blank');
  });
  // 创建图片作者元素
  const imgAuthorElement = document.createElement('p');
  imgAuthorElement.textContent = picture.author;
  imgAuthorElement.onclick = () => {
    const author = picture.author;
    const url = `search.html?name=${encodeURIComponent(author)}`;
    window.open(url, '_blank');
  }

  containerElement.appendChild(imageContainerElement);
  containerElement.appendChild(imgNameElement);
  containerElement.appendChild(imgAuthorElement);

  return containerElement;
}

// 判断图片是否符合条件
function judgePicture(picture) {
  const pictureAuthor = picture.author.toLowerCase();
  const pictureName = picture.name.toLowerCase();
  const searchFlag = pictureconfig.flag.toLowerCase();

  // 判断图片作者是否包含关键词
  return pictureAuthor.includes(searchFlag) || pictureName.includes(searchFlag);
}

// // 突显关键词
// document.addEventListener('DOMContentLoaded', () => {
//   // 获取所有带有 id='gallery' 下的 p 元素
//   const elements = document.querySelectorAll('#gallery p');

//   // 使用正则表达式生成一个全局不区分大小写的匹配模式
//   const regex = new RegExp(pictureconfig.flag, 'gi');

//   // 遍历每个元素
//   elements.forEach(element => {
//     // 获取元素的 HTML 内容
//     let text = element.innerHTML;

//     // 使用正则表达式匹配并替换文本中的特定字符
//     text = text.replace(regex, `<span style='color: red;'>${pictureconfig.flag}</span>`);

//     // 重新设置元素的 HTML 内容，包含样式
//     element.innerHTML = text;
//   });
// });
