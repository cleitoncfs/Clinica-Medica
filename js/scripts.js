// JavaScript para controlar o menu hambúrguer

document.addEventListener('DOMContentLoaded', () => {
    const menuHamburger = document.querySelector('.menu-hamburger');
    const menuHamburgerMenu = document.querySelector('.menu-hamburger-menu');
  
    menuHamburger.addEventListener('click', () => {
      menuHamburger.classList.toggle('active');
      menuHamburgerMenu.classList.toggle('active');
    });
  });

  
//   Botão voltar ao topo

  document.addEventListener('DOMContentLoaded', () => {
    const btnVoltarTopo = document.getElementById('btn-voltar-topo');
  
    // Mostrar o botão quando o usuário rolar 200px para baixo
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        btnVoltarTopo.style.display = 'block';
      } else {
        btnVoltarTopo.style.display = 'none';
      }
    });
  
    // Voltar ao topo quando o botão for clicado
    btnVoltarTopo.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Rolar suavemente
      });
    });
  });
  
