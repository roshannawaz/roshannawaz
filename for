<html>
<head>
<title>document</title>
</head>
<body>
<h1>form</h1>
<form>
<p>
<label for="email">EMAIL:</label>
<input type ="email">
</p>
<p>
<label for="password">PASSWORD: </label>
<input type="password">
</p>
<p>
<input type="submit"  id="submit"  value="login">
</p>
</form>
<script>
const s=document.getElementById("submit");
s.addEventListener('click',() =>
{
const p=document.querySelector('form');
p.style.display='none';
document.querySelector('h1').innerText="SUCCESS";
});
</script>
</body>
</html>
