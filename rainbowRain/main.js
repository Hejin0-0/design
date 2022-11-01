function rain() {
	let amount = 50;
	let body = document.querySelector("body");
	let i = 0;
	// i태그가 추가되면서 생성된 i태그의 옵션을 다르게 설정함.
	// 양과 i태그를 비교하여 while  불리언 결정

	while (i < amount) {
		// i태그 생성 후 drop 변수에 넘겨줌
		// amount와 비교하여 계속 생성
		let drop = document.createElement("i");

		// 너비를 구하기 위해 랜덤값 설정
		let size = Math.random() * 5;

		// 비의 위치를 결정하기 위한 floor 설정, innerwidth에 따른 값설정
		let posX = Math.floor(Math.random() * window.innerWidth);

		// 비를 내리는 시간을 딜레이
		let delay = Math.random() * -20;

		let duration = Math.random() * 5;

		// 비의 너비를 생성
		drop.style.width = 0.2 + size + "px";
		// 비의 위치
		drop.style.left = posX + "px";
		// 애니메이션 값
		drop.style.animationDelay = delay + "s";
		drop.style.animationDuration = 1 + duration + "s";

		// body에 i 태그 생성
		body.appendChild(drop);

		i++;
	}
}

rain();
// onresizeAPIs -> 너비가 변할 때마다 새롭게 rain()함수 실행
window.onresize = function () {
	console.log(window.innerWidth);
	// i태그를 모두 가져와서
	let drop = document.querySelectorAll("i");
	// 생성된 i 태그만큼 모두 제거를 하고
	for (let i = 0; i < drop.length; i++) {
		drop[i].remove();
	}
	// 새롭게 rain()함수를 실행
	rain();
};
