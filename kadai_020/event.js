const btn = document.getElementById('btn');
const text = document.getElementById('text');
const text2 = document.getElementById('text2');

btn.addEventListener('click',() => {
  const childList = document.createElement('h4');
  childList.textContent = 'ボタンをクリックしました';
  text2.appendChild(childList);
  text.style.display= 'none';
})