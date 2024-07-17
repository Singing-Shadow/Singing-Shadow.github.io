import { changeCurrentIndex, changeN, loadMoreStuff, addLazyLoadListener } from './lazyLoad.js';
// 搜索框输入值
let searchContest = ``;
const Path = 'imageList';

function main() {
  changeN(30);
  // 初始化加载列表
  createElement();
  loadMoreStuff(Path, createPathElement, judgePicture);
  addLazyLoadListener(Path, createPathElement, judgePicture);
}
main();

// 创建列表展示区域
function createElement() {
  // 创建图片信息列表区域
  const imgList = document.getElementById('imageList');
  createTableHeader(imgList);

  const searchText = document.getElementById('text');
  // 添加输入框按键监听器
  searchText.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      // 触发搜索按钮的点击事件处理函数
      searchButton.onclick(event);
    }
  });

  const searchButton = document.getElementById('button');
  // 添加搜索按钮点击后的事件处理函数
  searchButton.onclick = (event) => {
    event.preventDefault();
    searchContest = searchText.value.toLowerCase();
    changeCurrentIndex(0);
    createTableHeader(imgList);
    loadMoreStuff(Path, createPathElement, judgePicture);
  }

}

// 创建列表展示区域表头
function createTableHeader(imgList) {
  imgList.innerHTML = `
    <div id="item">
      <div class="name">插画名</div>
      <div class="author">插画作者</div>
      <div class="category">插画分类</div>
      <div class="label">标签 1</div>
      <div class="label">标签 2</div>
      <div class="label">标签 3</div>
    </div>
  `;
}

// 创建条目元素
function createPathElement(Item) {
  // 创建条目元素
  const listElement = document.createElement('p');
  listElement.classList.toggle('item');

  // 创建图片名称元素
  const nameElement = document.createElement('a');
  nameElement.classList.toggle('name');
  nameElement.href = 'imageInfo.html?id=' + Item.id;
  nameElement.textContent = Item.name;
  nameElement.target = '_blank';
  nameElement.style.fontWeight = 'bold';
  // 创建图片作者元素
  const authorElement = document.createElement('a');
  authorElement.classList.toggle('author');
  authorElement.href = 'search.html?author=' + Item.author;
  authorElement.textContent = Item.author;
  // 创建图片分类元素
  const categoryElement = document.createElement('a');
  categoryElement.classList.toggle('category');
  categoryElement.href = '#';
  categoryElement.textContent = Item.category;

  // 将图片名称、图片作者、图片分类元素添加到条目元素中
  listElement.appendChild(nameElement);
  listElement.appendChild(authorElement);
  listElement.appendChild(categoryElement);

  // 创建图片标签元素
  for (let i = 0; i < 3 && i < Item.label.length; i++) {
    const labelElement = document.createElement('a');
    labelElement.classList.toggle('label');
    labelElement.href = '#';
    labelElement.textContent = Item.label[i];
    listElement.appendChild(labelElement);
  }

  // 返回条目元素
  return listElement;
}

// 判断条目是否符合条件
function judgePicture(picture) {
  let judgement = false;
  if (searchContest === '') {
    return true;
  }

  // 根据搜索条件过滤并遍历对象的特定属性：name、category、author、label
  ['name', 'category', 'author', 'label'].forEach(key => {
    // 获取当前属性的值
    const value = picture[key];
    // 如果属性值是数组，则进一步遍历数组
    if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        let subValue = value[i];
        if (subValue.toLowerCase().includes(searchContest)) {
          judgement = true;
          break;
        }
      }
    }
    else if (value.toLowerCase().includes(searchContest)) {
      judgement = true;
    }
    return;
  });
  return judgement;
}