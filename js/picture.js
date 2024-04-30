document.addEventListener("DOMContentLoaded", function() {
    // 获取图片文件夹路径
    const pictureFolder = "../picture";

    // 获取包含图片文件的文件夹
    fetch(pictureFolder)
        .then(response => response.text())
        .then(data => {
            // 使用正则表达式匹配文件夹中的图片文件
            const regex = /href="([^"]+\.(jpe?g|png|gif))"/g;
            let match;
            while ((match = regex.exec(data)) !== null) {
                // 创建图片链接元素
                const linkElement = document.createElement("a");
                linkElement.href = "${pictureFolder}/${match[1]}";
                linkElement.alt = "图片";
                linkElement.target = "_blank";

                // 创建图片元素
                const imgElement = document.createElement("img");
                imgElement.src = "${pictureFolder}/${match[1]}";
                imgElement.alt = "图片";

                // 将图片元素添加到链接元素中
                linkElement.appendChild(imgElement);

                // 将链接元素添加到图片展示区域的容器元素中
                pictureContainer.appendChild(linkElement);
            }
        })
        .catch(error => {
            console.error("Error fetching images: ", error);
        });
});