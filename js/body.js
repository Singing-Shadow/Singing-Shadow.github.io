document.addEventListener('DOMContentLoaded', () => {
	// header
	document.getElementById("header").innerHTML = `
	<b class="title">画廊</b>
	`
	// nav
	document.getElementById("nav").innerHTML = `
	<ul class="numberList">
			<li class="number">
					<a href="main.html">首页</a>
			</li>
			<li class="number">
					分类
					<ul class="menu">
							<li> <a href="gallery.html">总画廊</a> </li>
							<li> <a href="https://www.pixiv.net">pixiv</a> </li>
							<li> <a href="MiyU.html">MiyU专栏</a> </li>
							<li> <a href="imageList.html">插画列表</a> </li>
							<li> <a href="">教程</a> </li>
							<li> <a href="">其它</a> </li>
					</ul>
			</li>
			<li class="number">
					我的
					<ul class="menu">
							<li> <a href="https://dylanyu233.rbind.io">友情链接1</a> </li>
							<li> <a href="https://github.com/MrRightXingYue">友情链接2</a> </li>
							<li> <a href="home.html">我的</a> </li>
					</ul>
			</li>
	</ul>
	`
	// footer
	document.getElementById("footer").innerHTML = `
	<p>&copy; 2024 画廊</p>
	`

	const containerElement = document.createElement("div");
	containerElement.id = "up-to-top";

	const upToTopElement = document.createElement("button");
	upToTopElement.id = "up-to-top-button";
	upToTopElement.type = "button";
	upToTopElement.content = " ";
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