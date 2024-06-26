document.addEventListener('DOMContentLoaded', () => {
  // footer
  const footerElement = document.createElement('b');
  footerElement.innerHTML = "&copy; 2024 画廊";
  document.getElementById("footer").appendChild(footerElement);

  // 创建置顶按钮容器
  const containerElement = document.createElement("div");
  containerElement.id = "up-to-top";

  // 创建置顶按钮
  const upToTopElement = document.createElement("button");
  upToTopElement.id = "up-to-top-button";
  upToTopElement.title = "up-to-top-button";
  upToTopElement.type = "button";
  upToTopElement.textContent = " ";
  upToTopElement.disabled = true;

  containerElement.appendChild(upToTopElement);
  document.body.appendChild(containerElement);

  // 点击按钮时，平滑滚动至页面顶部
  upToTopElement.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      // 平滑滚动
      behavior: 'smooth'
    });
  })
});

// 控制置顶按钮变化
window.addEventListener('scroll', () => {
  const containerElement = document.getElementById("up-to-top");
  const upToTopElement = document.getElementById("up-to-top-button");
  // 如果页面向下滚动超过 300px，启用按钮；否则禁用按钮
  if (window.scrollY > 300) {
    containerElement.style.opacity = "1";
    upToTopElement.disabled = false;
  } else {
    containerElement.style.opacity = "0.5";
    upToTopElement.disabled = true;
  }
});

// 禁止拖动
window.addEventListener('dragstart', (event) => {
  event.preventDefault();
});

// 禁止右键菜单
window.addEventListener('contextmenu', (event) => {
  event.preventDefault();
});

// 禁止选中文字 - 有点狠了[笑哭]
// window.addEventListener('selectstart', function (event) {
//     event.preventDefault();
// })