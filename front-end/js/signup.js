document.getElementById('submit').onclick = function () {
  var ID = document.getElementById('id').value;
  var pass = document.getElementById('pw').value;
  var smartID = document.getElementById('smartmeter').value;
  if (ID === '1234' && pass === '1234' && smartID === '1234') {
    alert('회원가입 성공!');
    location.href = './login.html';
  } else {
    alert('회원가입 실패!');
  }
};
