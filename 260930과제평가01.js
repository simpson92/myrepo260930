const navButtons = document.querySelectorAll('.btn-group');
const pages = document.querySelectorAll('.page');
const menuBtn = document.querySelector('#menubtn');

// 상단 메뉴 버튼

navButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const pageId = button.getAttribute('data-page'); 
    pages.forEach(function(page) {page.classList.remove('active');});    // 모든 화면 숨기기

    const targetPage = document.querySelector('#' + pageId);            // 선택 화면 보여주기
    targetPage.classList.add('active');

    navButtons.forEach(function(btn) {btn.classList.remove('active');});  // 모든 버튼의 active 제거

    button.classList.add('active');
  })})


// 홈 화면의 메뉴보기 버튼

menuBtn.addEventListener('click', function() {document.querySelector('[data-page="menu"]').click();});