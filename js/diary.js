	//从缓存中获取数据并渲染
	let msgBoxList = JSON.parse(window.localStorage.getItem('msgBoxList')) || [];
	innerHTMl(msgBoxList)

$("button").click(function () {
		let txt = $("textarea").html(); //获取输入框内容
		if (!txt) {
			$('textarea').focus(); //自动获取焦点
			return;
		}
		let obj = {
			msg: txt
		}
		msgBoxList.unshift(obj) //添加到数组里
		window.localStorage.setItem('msgBoxList', JSON.stringify(msgBoxList)) //将数据保存到缓存
		innerHTMl([obj]) //渲染当前输入框内容
		$('textarea').html('') // 清空输入框

	});
		//删除当前数据
	$("body").on('click', '.del', function () {
		let index = $(this).parent().parent().index();
		msgBoxList.splice(index, 1)
		window.localStorage.setItem('msgBoxList', JSON.stringify(msgBoxList)) //将数据保存到缓存
		$(this).parent().parent().remove()
	});

	//渲染html
	function innerHTMl(List) {
		List = List || []
		List.forEach(item => {
			let str =
				`<div class='msgBox'>
					<div class="headUrl">
						<img src='images/tx.jpg' width='50' height='50'>
						<div>
							<span class="title">木林森里没有木</span>
							<span class="time">2018-01-01</span>
						</div>
						<a class="del">删除</a>
					</div>
					<div class='msgTxt'>
						${item.msg}
					</div>
				</div>`
			$(".msgCon").prepend(str);
		});
	}
