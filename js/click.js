const para = document.querySelector('img');

para.addEventListener('click', updateName);

function updateName() {
  let name = prompt('Enter a new name');
  para.textContent = 'Player 1: ' + name;
}

$(".btnEvent").on("click", function() {
    alert("jsfiddle 동작 테스트");
  });