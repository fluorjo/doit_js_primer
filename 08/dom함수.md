#
	getElementById 함수를 쓰면 id 선택자를 활용해서 dom 요소에 접근하게 됨.
	document.getElementById("heading") <-이걸 콘솔에서 치면

	<h1 id=​"heading">​에디오피아 게뎁​</h1> <-이렇게 결과 뜸.
	​--> 
	
<!--
	getElementsByClassName 함수 = class 속성 값 이용해서 dom 요소에 접근. s 붙는다는 거에 주의.
	document.getElementsByClassName("accent")  

	HTMLCollection(2) [span.accent, span.accent]
	0: span.accent
	1: span.accent
	length: 2
	[[Prototype]]: HTMLCollection

	여기서 dom 요소 중 하나에만 접근하려면 document.getElementsByClassName("accent")[0] 이렇게 [0] 붙여주면 됨. 배열처럼 취급되는 것.
	
	<span class="accent">게뎁농장</span>

-->

<!--
	document.getElementsByClassName("accent")[0].style.textDecoration="underline"
	이렇게 하면 accent class인 '게뎁농장'에 밑줄 쳐짐.

-->

<!--
	getElementsByTagName 함수 = 태그 이름 이용해서 dom 요소에 접근. s 붙는다는 거에 주의.
	document.getElementsByTagName("id")  

	document.getElementsByTagName("h2")
HTMLCollection(2) [h2.bright, h2]
0: h2.bright
1: h2
length: 2
[[Prototype]]: HTMLCollection

-->

<!--
	document.getElementsByTagName("h2")[0].style.backgroundColor = "#알파벳"
	h2[0]인 information부분에 배경에 색 칠해짐.
-->