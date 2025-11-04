//document.addEventListener("DOMContentLoaded", function () {
//  const sidebar = document.getElementById('sidebarMenu');
//  sidebarMenu.forEach(menu => {
//    const li = document.createElement('li');
//    li.className = 'nav-item' + (menu.open ? ' menu-open' : '');
//    
//    li.innerHTML = `
//      <a href="#" class="nav-link${menu.open ? ' active' : ''}">
//        <i class="nav-icon ${menu.icon}"></i>
//        <p>
//          ${menu.title}
//          <i class="right fas fa-angle-left"></i>
//        </p>
//      </a>
//      <ul class="nav nav-treeview">
//        ${menu.subMenu.map(sub => `
//          <li class="nav-item">
//            <a href="${sub.href}" class="nav-link${sub.active ? ' active' : ''}">
//              <i class="far fa-circle nav-icon"></i>
//              <p>${sub.name}</p>
//            </a>
//          </li>
//        `).join('')}
//      </ul>
//    `;
//    sidebar.appendChild(li);
//  });
//});
// 先處理 sidebarMenu 的 active、open 狀態
document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById('sidebarMenu');
  const currentPath = window.location.pathname.split('/').pop(); // 只取檔名部分

  sidebarMenu.forEach(menu => {
    // 判斷這個 menu 有沒有子選單 href 符合目前頁面
    const isMenuOpen = menu.subMenu.some(sub => sub.href === currentPath);

    const li = document.createElement('li');
    li.className = 'nav-item' + (isMenuOpen ? ' menu-open' : '');
    
    li.innerHTML = `
      <a href="#" class="nav-link${isMenuOpen ? ' active' : ''}">
        <i class="nav-icon ${menu.icon}"></i>
        <p>
          ${menu.title}
          <i class="right fas fa-angle-left"></i>
        </p>
      </a>
      <ul class="nav nav-treeview">
        ${menu.subMenu.map(sub => {
          const isActive = sub.href === currentPath;
          return `
            <li class="nav-item">
              <a href="${sub.href}" class="nav-link${isActive ? ' active' : ''}">
                <i class="far fa-circle nav-icon"></i>
                <p>${sub.name}</p>
              </a>
            </li>
          `;
        }).join('')}
      </ul>
    `;
    sidebar.appendChild(li);
  });
});

