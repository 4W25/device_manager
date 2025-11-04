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

document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById('sidebarMenu');
  const currentPath = window.location.pathname; 
  const currentFile = currentPath.split('/').pop(); // 只取檔名

  sidebarMenu.forEach(menu => {
    const isMenuOpen = menu.subMenu.some(sub => sub.href.split('/').pop() === currentFile);

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
          const isActive = sub.href.split('/').pop() === currentFile;
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


