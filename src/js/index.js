var date = new Date()
var year = date.getFullYear()
var month = (date.getMonth() + 1).toString().padStart(2, '0')
var day = date.getDate().toString().padStart(2, '0')
var formatDate = year + '-' + month + '-' + day

var startTimeDom = document.getElementById('label_5ca90d80-b774-41cc-a5f8-18d789b99e1f')
var endTimeDom = document.getElementById('label_2da5730f-37a2-4da6-a7d8-e51dfc87d0f0')
startTimeDom.innerText = formatDate + ' 00:00:00'
endTimeDom.innerText = formatDate + ' 23:59:59'