		var bigPic = document.querySelector("#cup");  
		var smallPics = document.querySelectorAll(".small");  

		for(i=0; i<smallPics.length; i++) {
			smallPics[i].addEventListener("click", function() {
				newPic = this.src;
				bigPic.setAttribute("src", newPic);
			});
		}

		var view=document.querySelector("#view");//id="view"인 요소를 가져옴

		view.addEventListener("click", function(){//view를 눌렀을 때 실행할 함수 선언
			
			if(isOpen==false) {
				//상세 정보가 감춰져 있을 때 실행할 소스
				document.querySelector("#detail").style.display="block"; //detail 요소의 display 속성 값을 'block'으로 지정
				view.innerText="상세 설명 닫기"; //링크 내용 수정
				isOpen=true;//표시 상태로 지정
			}
			else{
				document.querySelector("#detail").style.display="none"; 
				view.innerText="상세 설명 보기"; //링크 내용 수정
				isOpen=false;//감춤 상태로 지정
			}
		});

		var isOpen=false; //#detail 요소가 현재 열린/닫힌 상태인지를 저장할 변수. 기본값은 false.
		var cup=document.querySelector("#cup");
		var smallPics=document.querySelectorAll(".small");


