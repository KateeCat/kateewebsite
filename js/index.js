
// 点赞功能
window.onload = function () {
// record
			var temp = 0;
			var num = 0;
			var bingopicArr = document.getElementsByClassName("i7");
			var bingopic2Arr = document.getElementsByClassName("i8");
			for (var i=0;i<bingopicArr.length;i++){
				bingopicArr[i].onmouseenter = function () {
					this.className = "i77";
				}
				bingopicArr[i].onmouseleave = function () {
					this.className = "i7";
				}
				bingopic2Arr[i].onmouseenter = function () {
					this.className = "i88";
				}
				bingopic2Arr[i].onmouseleave = function () {
					this.className = "i8";
				}

			}
		var bigboxArr = document.getElementsByClassName("record-bingo");
		var recordArr = document.getElementsByClassName("record2");
		var	bingoboxArr = document.getElementsByClassName("bingo");
			// for(var i=0;i<bingopicArr.length;i++){
				// bingopicArr[i].index = i;
				bingopicArr[0].onclick = function () {
				var oldTotal = 0;
				var newTotal;
				temp = temp + 1;
				num = num+1;
				if (temp %2 == 1) {
					// this.className = "i77";
					newTotal = oldTotal + 1;
					recordArr[0].style.height =(recordArr[0].offsetHeight+40)+"px";
					bigboxArr[0].style.display = "block";
					var span = document.createElement("span");
					bigboxArr[0].appendChild(span);
					if(newTotal == 1){
						span.innerHTML = "我觉得很赞";
					}else {
						span.innerHTML = newTotal+"个人觉得很赞";
					}

				}else {
					// bingopicArr[0].className = "i7";
					newTotal = oldTotal - 1;
					bigboxArr[0].style.display = "none";
					recordArr[0].style.height =(recordArr[0].offsetHeight-40)+"px";

				}


			}








  }













