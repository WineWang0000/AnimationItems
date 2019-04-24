!function(){
	var duration = 30
	$('.action').on('click', 'button', function(e){
		let $button = $(e.currentTarget)
		let speed = $button.attr('data-speed')
		$button.addClass('active').siblings('.active').removeClass('active')
		switch(speed){
      case 'slow':
        duration = 80
        break
      case 'normal':
        duration = 30
        break
      case 'fast':
        duration = 0
        break
    }
	})
	function writeCode(prefix, code, fn){
		var container = document.querySelector('#code')
		var styleTag = document.querySelector('#styleTag')
		let n = 0
		setTimeout(function run(){
			n += 1
			container.innerHTML = code.substring(0, n)
			styleTag.innerHTML = code.substring(0, n)
			container.scrollTop = container.scrollHeight
			if(n < code.length){
				setTimeout(run, duration)
				fn && fn.call()
			}
		}, duration)	
	}

let code = `
/*
 *别不开心啦！我给你画个皮卡丘吧！
 我们先画个小鼻子！！！
*/
.preview{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FFE600;
}
.box{
  width: 100%;
  height: 300px;
  position: relative;
}
.noes{
  position: absolute;
  left: 50%;
  top: 35px;
  margin-left: -17px;
  width: 0px;
  height: 0px;
  border-radius: 50%;
  border: 11px solid;
  border-color: black transparent transparent;
  border-width: 15px 15px;
  z-index: 1;
}
.nose:hover{
  margin-left:-5%;
  margin-top:-5%;
  width:110%;
}
/*
 *接下来画它的两只眼睛！！！
*/
.eye{
  background: #2E2E2E;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid;
  position: absolute;
}
.eye.left{
  right: 50%;
  margin-right: 80px;
}
.eye.right{
  left: 50%;
  margin-left: 80px;
}
.eye::before{
  content: '';
  display: block;
  width: 20px;
  height: 20px;
  background: #ffffff;
  border-radius: 50%;
  position: absolute;
  border: 2px solid;
  top: 2px;
  left: 4px;
}
/*
 *再画小脸颊！
*/
.face{
  position: absolute;
  width: 70px;
  height: 70px;
  background: #FF0000;
  border-radius: 50%;
  border: 2px solid;
  top: 95px;
}
.face.left{
  right: 50%;
  margin-right: 116px;
}
.face.right{
  left: 50%;
  margin-left: 116px;
}
/*
 *小红脸就画好啦！！！
 *我们继续再画它的小嘴嘴
 这是上嘴唇！！！
*/
.upperLip{
  position: absolute;
  width: 70px;
  height: 25px;
  border: 3px solid;
  background: #FFE600;
  top: 60px;
  z-index: 1;
}
.upperLip.left{
  border-right: none;
  border-top: none;
  border-bottom-left-radius: 40px 25px;
  transform: rotate(-22deg);
  right: 50%;
}
.upperLip.right{
  border-left: none;
  border-top: none;
  border-bottom-right-radius: 40px 25px;
  transform: rotate(20deg);
  left: 50%;
  margin-left: -1px;
}
.lip{
  position: absolute;
  width: 300px;
  height: 170px;
  z-index: -1;
  bottom: 60px;
  border-radius: 300px/2000px;
  left: 50%;
  margin-left: -125px;
  overflow: hidden;
  z-index: 0;
}
/*
 *这是下嘴唇！！！
*/
.lowerlip{
  height: 3500px;
  width: 250px;
  background: #9B000A;
  overflow: hidden;
  border-radius: 200px/2000px;
  border: 2px solid;
  position: absolute;
  bottom: 0;
}
/*
 *嘴巴里面有个大舌头！！！
*/
.lowerlip::after{
  content: '';
  display: block;
  position: absolute;
  background: #FF485F;
  width: 100px;
  height: 150px;
  left: 50%;
  margin-left: -50px;
  bottom: -10px;
  border-radius: 50px;
}
/*
 *好了，PiKaChu就完成了！
*/
`
	writeCode('', code)
	

}.call()

