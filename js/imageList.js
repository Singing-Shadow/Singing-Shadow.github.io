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

    // 初始化加载列表
    createElement();
    loadMoreLists();
  })
  .catch(error => {
    console.error("Error fetching JSON:", error);
  });

// 创建列表展示区域
/*
  <div id="imageList-container">
    <div id="setting">
      <form id="search">
        <input id="text" type="text" placeholder="MiyU">
        <input id="button" type="submit" value="搜索">
      </form>
      <div>
        <select id="sort" name="sort">
          <option value="0"></option>
          <option value="1"></option>
          <option value="2"></option>
          <option value="3"></option>
          <option value="4"></option>
        <\select>
      </div>
    </div>
    <div id="imageList">
      <p class="item">
        <a class="name" href="#" style="display: inline-block;"></a>
        <a class="author" href="#" style="display: inline-block;"></a>
        <a class="category" href="#" style="display: inline-block;"></a>
        <a class="label" href="#" style="display: inline-block;"></a>
        <a class="label" href="#" style="display: inline-block;"></a>
        <a class="label" href="#" style="display: inline-block;"></a>
        </p>
    </div>
  </div>
*/

// 创建列表展示区域
function createElement() {
  // 创建图片列表展示区域的容器元素
  const containerElement = document.createElement("div");
  containerElement.id = "imageList-container";

  // 创建列表设置区域
  const imgsetting = document.createElement("div");
  imgsetting.id = "setting";

  // 创建搜索栏
  const searchInput = document.createElement("form");
  searchInput.id = "search";
  searchInput.style.onsubmit = "return false;";

  // 创建搜索框
  const searchText = document.createElement("input");
  searchText.id = "text";
  searchText.type = "text";
  searchText.placeholder = "MiyU";

  // 创建搜索按钮
  const searchButton = document.createElement("input");
  searchButton.id = "button";
  searchButton.type = "submit";
  searchButton.onclick = function () {
    // 获取搜索框的值
    const searchText = document.getElementById("text").value;
    // 进行搜索操作
    // searchImage(searchText);
    // 刷新图片信息列表区域
    // refreshImageList();
    console.log(searchText);
  }

  // 将搜索框和搜索按钮添加到搜索栏中
  searchInput.appendChild(searchText);
  searchInput.appendChild(searchButton);

  // 创建排序设置区域
  const sortSelectContainer = document.createElement("div");

  // 创建排序下拉框
  const sortSelect = document.createElement("select");
  sortSelect.id = "sort";
  sortSelect.name = "sort";

  // 创建排序选项
  const sortOption1 = document.createElement("option");
  sortOption1.value = "0";
  sortOption1.text = "默认排序";
  const sortOption2 = document.createElement("option");
  sortOption2.value = "1";
  sortOption2.text = "按名称排序";
  const sortOption3 = document.createElement("option");
  sortOption3.value = "2";
  sortOption3.text = "按作者排序";
  const sortOption4 = document.createElement("option");
  sortOption4.value = "3";
  sortOption4.text = "按分类排序";

  // 将排序选项添加到排序下拉框中
  sortSelect.appendChild(sortOption1);
  sortSelect.appendChild(sortOption2);
  sortSelect.appendChild(sortOption3);
  sortSelect.appendChild(sortOption4);

  // 将排序下拉框添加到排序设置区域中
  sortSelectContainer.appendChild(sortSelect);

  // 将搜索栏和排序设置区域添加到列表设置区域中
  imgsetting.appendChild(searchInput);
  imgsetting.appendChild(sortSelectContainer);

  // 创建图片信息列表区域
  const imgList = document.createElement("div");
  imgList.id = "imageList";

  // 创建列表元素
  const listElement = document.createElement("p");
  listElement.id = "item";

  // 创建图片名称元素
  const nameElement = document.createElement("div");
  nameElement.classList.toggle("name");
  nameElement.href = "#";
  nameElement.textContent = "插画名";
  nameElement.style.display = "inline-block";
  nameElement.style.fontWeight = "bold";

  // 创建图片作者元素
  const authorElement = document.createElement("div");
  authorElement.classList.toggle("author");
  authorElement.textContent = "插画作者";
  authorElement.style.display = "inline-block";
  nameElement.style.fontWeight = "bold";

  // 创建图片分类元素
  const categoryElement = document.createElement("div");
  categoryElement.classList.toggle("category");
  categoryElement.textContent = "插画分类";
  categoryElement.style.display = "inline-block";
  nameElement.style.fontWeight = "bold";

  // 将图片名称、图片作者、图片分类元素添加到列表元素中
  listElement.appendChild(nameElement);
  listElement.appendChild(authorElement);
  listElement.appendChild(categoryElement);

  // 创建图片标签元素
  for (let i = 0; i < 3; i++) {
    const labelElement = document.createElement("div");
    labelElement.classList.toggle("label");
    labelElement.textContent = "标签 " + (i + 1);
    labelElement.style.display = "inline-block";
    nameElement.style.fontWeight = "bold";
    listElement.appendChild(labelElement);
  }

  // 将列表元素添加到图片信息列表区域中
  imgList.appendChild(listElement);

  // 将列表设置区域添加到图片列表展示区域的容器元素中
  containerElement.appendChild(imgsetting);
  // 将图片信息列表区域添加到图片列表展示区域的容器元素中
  containerElement.appendChild(imgList);

  // 添加到画廊中
  document.getElementById("List").appendChild(containerElement);
}

// 创建列表元素
function createItemElement(Item) {
  // 创建列表元素
  const listElement = document.createElement("p");
  listElement.classList.toggle("item");

  // 创建图片名称元素
  const nameElement = document.createElement("a");
  nameElement.classList.toggle("name");
  nameElement.href = "imageInfo.html?id=" + Item.id;
  nameElement.textContent = Item.name;
  nameElement.target = "_blank";
  nameElement.style.display = "inline-block";
  nameElement.style.fontWeight = "bold";

  // 创建图片作者元素
  const authorElement = document.createElement("a");
  authorElement.classList.toggle("author");
  authorElement.href = "#";
  authorElement.textContent = Item.author;
  authorElement.style.display = "inline-block";

  // 创建图片分类元素
  const categoryElement = document.createElement("a");
  categoryElement.classList.toggle("category");
  categoryElement.href = "#";
  categoryElement.textContent = Item.category;
  categoryElement.style.display = "inline-block";

  // 将图片名称、图片作者、图片分类元素添加到列表元素中
  listElement.appendChild(nameElement);
  listElement.appendChild(authorElement);
  listElement.appendChild(categoryElement);

  // 创建图片标签元素
  for (let i = 0; i < 3 && i < Item.label.length; i++) {
    const labelElement = document.createElement("a");
    labelElement.classList.toggle("label");
    labelElement.href = "#";
    labelElement.textContent = Item.label[i];
    labelElement.style.display = "inline-block";
    listElement.appendChild(labelElement);
  }

  // 返回列表元素
  return listElement;
}

// 加载更多图片
function loadMoreLists() {
  const List = document.getElementById("imageList");

  // 加载接下来的 24 项条目
  for (let i = 0; i < 24 && currentIndex < JSONFolder.length; currentIndex++) {
    console.log("loading");
    const list = JSONFolder[currentIndex];
    // 创建列表元素并添加到图片列表展示区域中
    const listElement = createItemElement(list);
    List.appendChild(listElement);
    // 更新当前索引
    i++;
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
    loadMoreLists();
  }
});