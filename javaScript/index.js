function clickmenu() {
  let menu = document.getElementById('menu');
  // 1 Ele estar dizendo que é para abri o menu.
  // 0 é para fechar o menu.
  console.log(menu.getAttribute('openMenu'));
  if (menu.getAttribute('openMenu') == 1) {
    //Menu abri
    let openMenu = document.getElementById('menu_mobile');
    openMenu.classList.remove('hide');
    openMenu.classList.add('show');
    menu.setAttribute('openMenu', 0);
    
  } else {
    //fehcar
    let openMenu = document.getElementById('menu_mobile');
    openMenu.classList.add('hide');
    openMenu.classList.remove('show');
    menu.setAttribute('openMenu', 1);
  }

}


function openMenu() {

}

function functionIrPgCadastra() {
  window.location.href = '../pages/telaDePergunta.html';
}

function functionUsuario(funcao) {
  let atributoEdit = document.querySelectorAll('.box_tela');
  let jogador = document.getElementById('jogador');
  let colaborador = document.getElementById('colaborador');
  let titlePergunta = document.getElementById('title_pergunta');
  if (funcao === 'jogador') {
    atributoEdit.forEach(element => {
      element.style.display = 'none';
    });
    titlePergunta.style.display = 'none';
    jogador.style.display = 'block';
  } else if (funcao === 'colaborador') {
    atributoEdit.forEach(element => {
      element.style.display = 'none';
    });
    titlePergunta.style.display = 'none';
    colaborador.style.display = 'block';
  }
}


function functionCadastra() {

  let msg = document.getElementById('message');
  let jogador = document.getElementById('jogador');
  let colaborador = document.getElementById('colaborador');
  if (jogador.style.display === 'block') {
    console.log('Entrou aqui')
    let nome = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let senha1 = document.getElementById('password').value;
    let senha2 = document.getElementById('password2').value;
    let termos = document.getElementById('termos_uso');
    if (!termos.checked) {
      msg.style.display = 'block';
      msg.innerHTML = 'Para continuar precisa aceitar os termos.';
    } else {
      if (senha1 !== senha2) {
        msg.style.display = 'block';
        msg.innerHTML = 'Senhas tem que ser iguais.';
      }
      Storage.setItem('nome', nome);
      Storage.setItem('email', email);
      Storage.setItem('senha', senha1);
      Storage.setItem('termo', termos);
      Storage.setItem('funcao', 'jogador');
    }
  } else if (colaborador.style.display === 'block') {
    console.log('Entrou aqui2')
    let nome = document.getElementById('name_c').value;
    let email = document.getElementById('email_c').value;
    let senha1 = document.getElementById('password_c').value;
    let senha2 = document.getElementById('password2_c').value;
    let cnpj = document.getElementById('cnpj_c').value;
    let termos = document.getElementById('termos_uso_c');
    
    if (!termos.checked) {
      msg.style.display = 'block';
      msg.innerHTML = 'Para continuar precisa aceitar os termos.';
    } else {
      if (senha1 !== senha2) {
        msg.style.display = 'block';
        msg.innerHTML = 'Senhas tem que ser iguais.';
      }
      
    }
  }

}
