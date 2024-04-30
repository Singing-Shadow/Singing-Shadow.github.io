// 获取图片文件夹路径
const pictureFolder = "https://singing-shadow.github.io/picture";

// 获取包含图片文件的文件夹
fetch(pictureFolder)
    .then((response) => response.text())
    .then((data) => window.alert(data));