document.addEventListener("DOMContentLoaded", () => {
  // 导航栏\侧边栏切换
  const navButtons = document.getElementsByClassName('nav-button');
  const overlay = document.getElementsByClassName('overlay')[0];
  const navList = document.getElementsByClassName('nav-list')[0];
  const toggleNav = () => {
    overlay.classList.toggle("overlay-open");
    navList.classList.toggle("nav-open");
    document.body.classList.toggle('no-scroll');
  };
  Array.from(navButtons).forEach(navButton => {
    navButton.onclick = toggleNav;
  });
  overlay.onclick = toggleNav;

  // 搜索框默认文本切换
  const searchPlaceholder = document.getElementsByClassName('search-text')[0];
  // 保存原始的 placeholder
  const originalPlaceholder = searchPlaceholder.placeholder;
  searchPlaceholder.addEventListener('focus', () => {
    searchPlaceholder.placeholder = '';
  });
  searchPlaceholder.addEventListener('blur', () => {
    searchPlaceholder.placeholder = originalPlaceholder;
  });

  // 搜索栏搜索跳转
  const searchText = document.getElementsByClassName('search-text')[0];
  searchText.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const searchContest = searchText.value;
      window.location.href = `search.html?name=${encodeURIComponent(searchContest)}`;
    }
  });
});
