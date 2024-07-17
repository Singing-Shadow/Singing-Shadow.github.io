import { asideListItems } from './constants.js';

// 侧边栏选项创建
export function createAsideItemsContainers() {
  const asideContainerElement = document.getElementsByClassName('aside-list')[0];
  asideListItems.forEach((items) => {
    const asideListItemContainer = document.createElement('div');
    asideListItemContainer.className = 'aside-list-item-container';
    items.forEach(item => {
      const asideListItem = document.createElement('a');
      asideListItem.href = item.href;
      asideListItem.textContent = item.text;
      asideListItemContainer.appendChild(asideListItem);
    });
    asideContainerElement.appendChild(asideListItemContainer);
  })
}

// 侧边栏切换
export function switchAside() {
  const asideButtons = document.getElementsByClassName('aside-button');
  const overlay = document.getElementsByClassName('overlay')[0];
  const asideList = document.getElementsByClassName('aside-list')[0];
  const toggleAside = () => {
    overlay.classList.toggle('overlay-open');
    asideList.classList.toggle('aside-open');
    document.body.classList.toggle('no-scroll');
  };
  Array.from(asideButtons).forEach(asideButton => {
    asideButton.onclick = toggleAside;
  });
  overlay.onclick = toggleAside;
}
