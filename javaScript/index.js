function clickmenu() {
  let menu = document.getElementById('menu');
  // 1 Ele estar dizendo que é para abri o menu.
  // 0 é para fechar o menu.
  console.log(menu.getAttribute('openMenu'));
  if (menu.getAttribute('openMenu') == 1) {
    //Menu abri
    let openMenu = document.getElementById('menu_mobile');

    openMenu.style.display = 'unset';
    menu.setAttribute('openMenu', 0);
  } else {
    //fehcar
    let openMenu = document.getElementById('menu_mobile');

    openMenu.style.display = 'none';
    menu.setAttribute('openMenu', 1);
  }

}


function openMenu() {

}