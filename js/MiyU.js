import { loadMoreStuff, addLazyLoadListener } from './lazyLoad.js';
const Path = 'gallery';

document.addEventListener('DOMContentLoaded', () => {
  main();
});
function main() {
  loadMoreStuff(Path, createPathElement, judgePicture);
  addLazyLoadListener(Path, createPathElement, judgePicture);
}

// 创建图片元素
export function createPathElement(picture) {
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
  // 创建爱心按钮背景元素
  const loveButtonbackground = document.createElement('div');
  loveButtonbackground.classList.add('love-button-background');
  // 创建爱心按钮元素
  const loveButton = document.createElement('div');
  loveButton.classList.add('love-button');
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

  containerElement.appendChild(imageContainerElement);
  containerElement.appendChild(imgNameElement);

  return containerElement;
}

// 判断图片是否符合条件
export function judgePicture(picture) {
  return picture.author === 'MiyU';
}