import { loadMoreStuff, addLazyLoadListener } from './lazyLoad.js';
const Path = 'gallery';

function main() {
  loadMoreStuff(Path, createPathElement, judgePicture);
  addLazyLoadListener(Path, createPathElement, judgePicture);
}
main();

// 创建图片元素
export function createPathElement(picture) {
  const containerElement = document.createElement('div');
  containerElement.classList.add('imageInfo-container');

  // 创建图片展示区域的容器元素
  const imageContainerElement = document.createElement('div');
  imageContainerElement.classList.add('image-container');
  // 创建图片元素
  const imgElement = document.createElement('img');
  imgElement.src = picture.thumbnailsHref[0];
  imgElement.alt = picture.name;
  imgElement.addEventListener('click', () => {
    const id = picture.id;
    const url = `imageInfo.html?id=${encodeURIComponent(id)}`;
    window.open(url, '_blank');
  });
  imageContainerElement.appendChild(imgElement);
  // 创建爱心按钮元素
  const loveButtonbackground = document.createElement('div');
  loveButtonbackground.classList.add('love-button-container');
  loveButtonbackground.title = '喜欢';
  const loveButton = document.createElement('div');
  loveButton.classList.add('love-button');
  loveButton.title = '喜欢';
  // ❤切换爱心按钮的样式
  loveButton.addEventListener('click', () => {
    loveButton.classList.toggle('loved');
  });
  loveButtonbackground.appendChild(loveButton);
  imageContainerElement.appendChild(loveButtonbackground);

  // 创建图片名称元素
  const imgNameElement = document.createElement('p');
  imgNameElement.textContent = picture.name;
  imgNameElement.style.fontWeight = 'bold';
  imgNameElement.onclick = () => {
    const id = picture.id;
    const url = `imageInfo.html?id=${encodeURIComponent(id)}`;
    window.open(url, '_blank');
  };
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
export function judgePicture(picture) {
  return true;
}