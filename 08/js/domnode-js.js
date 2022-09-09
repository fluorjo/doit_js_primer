var newP=document.createElement("p") 
//DOM에 새 요소를 추가하기 위해 일단 요소 노드를 만듦.
//그게 createElement함수. 괄호 안의 요소에 해당하는 요소 노드를 적으면 됨. 지금 <p>태그에 해당하는 요소 노드를 만든 것.
//이 단계에서는 화면에는 아무 것도 안 나옴.
//콘솔에 입력하고 newP 치면 <p></p>나옴. 이게 생성된 것.
var newText=document.createTextNode("주문이 완료됐습니다")
//요소에서 표시할 내용을 텍스트 노드로 만든 것.
//이것 역시 화면에는 아무 것도 안 나옴.

//여기까지 새로운 <p>노드와 여기에 사용할 텍스트 노드가 만들어짐. 연결되지는 않은 상태.
//연결하기 위해 appendChild함수 사용.

newP.appendChild(newText)
//p라는 element랑 text인 "주문이~"랑 연결해준 것.
//콘솔에 여기까지 입력하면 "주문이 완료됐습니다" 뜸.

document.body.appendChild(newP)
//body랑 element랑 연결.
//body 안에 <p>주문이 완료됐습니다</p> 가 추가됨. 그래서 화면에도 표시됨.

var attr=document.createAttribute("class") //속성 노드 만들기 위해 createAttribute 함수 사용. 괄호 안에 추가할 속성 이름 지정.
attr.value="accent" //attr 속성 값을 accent로 지정. attr 속성 노드를 생성.
newP.setAttributeNode(attr)
//속성 노드와 요소 노드를 연결할 때는 setAttributeNode 사용.
//newP.setAttribute("class","accent") 라고 해도 됨.