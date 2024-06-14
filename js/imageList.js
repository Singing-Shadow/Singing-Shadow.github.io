// 定义 JSON 文件的相对路径
const filePath = "../json/image.json";
// 存储图片数据
let JSONFolder;
// 当前加载到的图片索引
let currentIndex = 0;
// 图片列表展示区域
const Path = "imageList";
// 每页加载的条目数量
const N = 24;
// 搜索框输入值
let searchContest = "";

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
    loadMoreStuff(Path, N);
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
  // 设置输入框按键事件处理函数
  searchText.addEventListener("keydown", function (event) {
    // 检测是否按下了回车键（Enter键）
    if (event.key === "Enter") {
      // 阻止默认行为
      event.preventDefault();
      // 触发搜索按钮的点击事件处理函数
      searchButton.onclick(event);
    }
  });

  // 创建搜索按钮
  const searchButton = document.createElement("input");
  searchButton.id = "button";
  searchButton.type = "button";
  searchButton.value = "    ";
  // 设置搜索按钮点击后的事件处理函数
  searchButton.onclick = function (event) {
    // 阻止表单的默认提交行为
    event.preventDefault();
    // 获取搜索框的值
    searchContest = document.getElementById("text").value.toLowerCase();
    // 更新列表展示区域
    currentIndex = 0;

    // 清空列表展示区域
    document.getElementById(Path).innerHTML = "";
    // 加回列表展示区域表头
    document.getElementById(Path).appendChild(createTableHeader());
    loadMoreStuff(Path, N);
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

  // 将表头添加到图片信息列表区域中
  imgList.appendChild(createTableHeader());

  // 将列表设置区域添加到图片列表展示区域的容器元素中
  containerElement.appendChild(imgsetting);
  // 将图片信息列表区域添加到图片列表展示区域的容器元素中
  containerElement.appendChild(imgList);

  // 添加到画廊中
  document.getElementById("List").appendChild(containerElement);  
}

// 创建列表展示区域表头
function createTableHeader() {
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

  return listElement;
}

// 创建条目元素
function createPathElement(Item) {
  // 创建条目元素
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

  // 将图片名称、图片作者、图片分类元素添加到条目元素中
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

  // 返回条目元素
  return listElement;
}

// 判断条目是否符合条件
function judgePicture(picture) {
  let judgement = false;
  if (searchContest === "") {
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