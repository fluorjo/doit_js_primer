console.log(document.querySelectorAll("p"))
console.log(document.querySelectorAll("p")[0])
console.log(document.querySelectorAll("p")[0].hasChildNodes()) //자식 노드가 있는지 확인하는 함수.
console.log(document.querySelector("#nameList").childNodes) 
//자식 노드에 접근
//childnodes는 요소 노드뿐만 아니라 텍스트, 주석 노드 등에도 접근함.
//줄 바꿈들을 전부 빈 텍스트 노드로 인식해서 7개의 노드가 있다고 나옴.

console.log(document.querySelector("#nameList").children)
//children은 요소 노드에만 접근함.

//appendChild =마지막 자식 노드로 추가됨.
//insertBefore=기준이 되는 노드를 지정하고 그 앞에 자식 노드 추가 가능.

var nameList=document.querySelector("#nameList")
console.log(nameList.insertBefore(nameList.children[2],nameList.children[0]))
//추가할 노드, 기준 노드.
//3번째에 있던 도레미가 맨 앞으로 옮겨짐.

//removeChild =부모 노드에서 자식노드 삭제.
//근데 노드는 스스로를 삭제할 수 없어서 부모 노드에 접근한 후 부모 노드에서 삭제해야됨. 
//parentNode = 현재 노드의 부모 요소 노드를 반환.
console.log(document.querySelectorAll(".del")[0].parentNode)
//"X"요소의 부모 노드 찾기. p요소임.

var firstDel=document.querySelectorAll(".del")[0] //첫번째 X
var firstP = document.querySelectorAll("p")[0] //첫번째 p요소
firstP.removeChild(firstDel)
//<span class='del'>X</span>" <-이 노드가 삭제됨.

