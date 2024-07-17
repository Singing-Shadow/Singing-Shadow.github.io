// 添加搜索栏规则
export function addSearchRules() {
  // 搜索框默认文本切换
  const searchPlaceholder = document.getElementsByClassName('search-text')[0];
  const originalPlaceholder = searchPlaceholder.placeholder;
  // 获得焦点
  searchPlaceholder.addEventListener('focus', () => {
    searchPlaceholder.placeholder = '仅支持搜索作者';
  });
  // 失去焦点
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
}
