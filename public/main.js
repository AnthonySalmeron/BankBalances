document.querySelector(".delete").onclick = function(){
  const name = this.parentNode.childNodes[1].value;
  const transfer = this.parentNode.childNodes[3].value;
  fetch(`account?name=${name}`)
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(res=>{
    // console.log(res[0].current)
    fetch("account",{
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'name': transfer,
        'deposit': res[0].current,
        'reason': `Transfer From ${res[0].name}`
      })
    })
    .then(res=>{
      if (res.ok) return res.json()
    })
    .then(res=>{
      fetch('account', {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'name': name
        })
      }).then(function (response) {
        window.location.reload()
      })
    })
  })
};
document.getElementById("withdraw").onclick = function(){
  console.log("hi")
  const name = this.parentNode.childNodes[1].value;
  const change = (Number(this.parentNode.childNodes[3].value))*-1;
  console.log(change)
  const reason = this.parentNode.childNodes[5].value;
  fetch("account",{
    method: 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'name': name,
      'withdrawal': change,
      'reason': reason
    })
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(data => {
    console.log(data)
    //window.location.reload(true)
  })
};
document.getElementById("deposit").onclick = function(){
  const name = this.parentNode.childNodes[1].value;
  const change = Number(this.parentNode.childNodes[3].value);
  const reason = this.parentNode.childNodes[5].value;
  fetch("account",{
    method: 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'name': name,
      'deposit': change,
      'reason': reason
    })
  })
  .then(response => {
    console.log(response);
    if (response.ok) return response.json()
  })
  .then(data => {
    console.log(data)
    window.location.reload(true)
  })
};
