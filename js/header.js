// 页眉
document.addEventListener("DOMContentLoaded", () => {
  const headerElement = document.getElementById("header");

  // 导航栏按钮
  const navButton = document.createElement('button');
  navButton.classList.add("nav-button");
  navButton.type = "button";
  navButton.title = "菜单";
  navButton.onclick = () => {
    overlay.classList.toggle("overlay-open");
    navList.classList.toggle("nav-open");
    document.body.classList.toggle('no-scroll');
  };

  // Logo
  const logoContainer = document.createElement('div');
  const logoIcon = document.createElement('a');
  logoIcon.href = "main.html";
  logoIcon.classList.add("logo-icon");
  logoContainer.appendChild(logoIcon);

  // 搜索栏
  const searchContainer = document.createElement('div');
  searchContainer.classList.add("search-container");
  const searchIcon = document.createElement('div');
  searchIcon.classList.add("search-icon");
  const searchText = document.createElement('input');
  searchText.classList.add("search-text");
  searchText.type = "text";
  searchText.placeholder = "搜索作品";
  searchContainer.appendChild(searchIcon);
  searchContainer.appendChild(searchText);

  // 随便搞的
  const null1 = document.createElement('div');
  null1.classList.add("null");
  null1.textContent = "加入Pising高级会员";
  const null2 = document.createElement('div');
  null2.classList.add("null");
  null2.textContent = "投稿作品↓";
  const null3 = document.createElement('div');
  null3.classList.add("null");
  null3.textContent = "信息";
  const null4 = document.createElement('div');
  null4.classList.add("null");
  null4.textContent = "通知";

  // 用户栏
  const userContainer = document.createElement('div');
  const userIcon = document.createElement('a');
  userIcon.href = "login.html";
  userIcon.target = "_blank";
  userIcon.classList.add("user-icon");
  userContainer.appendChild(userIcon);

  // 遮罩层
  const overlay = document.createElement('div');
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);

  // 导航栏
  const navList = document.createElement('div');
  navList.classList.add("nav-list");
  const navListTitle = document.createElement('div');
  navListTitle.classList.add("nav-list-title");
  const navListButton = navButton.cloneNode(true);
  navListButton.onclick = () => {
    overlay.classList.toggle("overlay-open");
    navList.classList.toggle("nav-open");
    document.body.classList.toggle('no-scroll');
  };
  const navListLogo = logoContainer.cloneNode(true)
  navListTitle.appendChild(navListButton);
  navListTitle.appendChild(navListLogo);
  navList.appendChild(navListTitle);
  document.body.appendChild(navList);
  const navListItemContainer1 = document.createElement('div');
  navListItemContainer1.classList.add("nav-list-item-container");
  const navListItem1 = document.createElement('a');
  navListItem1.href = "main.html";
  navListItem1.textContent = "首页";
  const navListItem2 = document.createElement('a');
  navListItem2.href = "gallery.html";
  navListItem2.textContent = "Pising";
  const navListItem3 = document.createElement('a');
  navListItem3.href = "https://www.pixiv.net";
  navListItem3.textContent = "Pixiv";
  navListItemContainer1.appendChild(navListItem1);
  navListItemContainer1.appendChild(navListItem2);
  navListItemContainer1.appendChild(navListItem3);
  const navListItemContainer2 = document.createElement('div');
  navListItemContainer2.classList.add("nav-list-item-container");
  const navListItem4 = document.createElement('a');
  navListItem4.href = "MiyU.html";
  navListItem4.textContent = "MiyU专栏";
  const navListItem5 = document.createElement('a');
  navListItem5.href = "imageList.html";
  navListItem5.textContent = "插画列表";
  const navListItem6 = document.createElement('a');
  navListItem6.href = "https://arcwiki.mcd.blue";
  navListItem6.textContent = "Arcaea";
  navListItemContainer2.appendChild(navListItem4);
  navListItemContainer2.appendChild(navListItem5);
  navListItemContainer2.appendChild(navListItem6);
  const navListItemContainer3 = document.createElement('div');
  navListItemContainer3.classList.add("nav-list-item-container");
  const navListItem7 = document.createElement('a');
  navListItem7.href = "https://dylanyu233.rbind.io";
  navListItem7.textContent = "友情链接1";
  const navListItem8 = document.createElement('a');
  navListItem8.href = "https://github.com/MrRightXingYue";
  navListItem8.textContent = "友情链接2";
  const navListItem9 = document.createElement('a');
  navListItem9.href = "home.html";
  navListItem9.textContent = "我的";
  navListItemContainer3.appendChild(navListItem7);
  navListItemContainer3.appendChild(navListItem8);
  navListItemContainer3.appendChild(navListItem9);
  navList.appendChild(navListItemContainer1);
  navList.appendChild(navListItemContainer2);
  navList.appendChild(navListItemContainer3);

  // 页眉项目
  headerElement.appendChild(navButton);
  headerElement.appendChild(logoContainer);
  headerElement.appendChild(searchContainer);
  headerElement.appendChild(null1);
  headerElement.appendChild(null2);
  headerElement.appendChild(null3);
  headerElement.appendChild(null4);
  headerElement.appendChild(userContainer);
});