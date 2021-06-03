document.getElementById('submit').onclick = function () {
  var ID = document.getElementById('id').value;
  var pass = document.getElementById('pw').value;
  if (ID === '1234' && pass === '1234') {
    alert('로그인 성공!');
    location.href = './chart.html';
  } else {
    alert('로그인 실패!');
  }
};
