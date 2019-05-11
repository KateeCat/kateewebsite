
// 点赞功能
window.onload = function () {

			var bingopic = document.getElementsByClassName("i7")[0];
			var record = document.getElementsByClassName("record")[0];
			var	bingobox = document.getElementsByClassName("bingo")[0];
			var bigbox = document.getElementById("bigbox");
			var temp = 0;

			bingopic.onmouseenter = function () {
				bingopic.className = "i77";
			}
			bingopic.onmouseleave = function () {
				bingopic.className = "i7";
			}

			bingopic.onclick = function () {
				var oldTotal = 0;
				var newTotal;
				temp = temp + 1;
				num = num+1;
				if (temp %2 == 1) {
					bingopic.className = "i77";
					newTotal = oldTotal + 1;
					record.style.height =record.offsetHeight+40+"px";
					bigbox.style.display = "block";
					var span = document.createElement("span");
					bigbox.appendChild(span);
					if(newTotal == 1){
						span.innerHTML = "我觉得很赞";
					}else {
						span.innerHTML = newTotal+"个人觉得很赞";
					}

				}else {
					bingopic.className = "i7";
					newTotal = oldTotal - 1;
					bigbox.style.display = "none";
					record.style.height =record.offsetHeight-40+"px";

				}

			}
  }














