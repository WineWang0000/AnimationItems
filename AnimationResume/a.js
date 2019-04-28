function writeCode(prefix, code, fn){
	let pre = document.querySelector('#pre')	
	pre.innerHTML = prefix || ''
	let n = 0
  let clock = setInterval(()=>{
		n += 1
		pre.innerHTML = prefix + code.substring(0, n)
   pre.innerHTML = Prism.highlight(pre.innerHTML,Prism.languages.css)
		styleTag.innerHTML = prefix + code.substring(0, n)
		pre.scrollTop = 100000
		if(n >= code.length){
			window.clearInterval(clock)
			fn.call()
		}
	}, 10)
}

var a = `
/*
 * 尊敬的面试官，您好!
 * 我是xxx，
 * 接下来我将以这种方式来介绍我的简历。
 */
*{
transition: all .5s;
}
body{
  background: rgb(222, 222, 222);
  font-size: 16px;
}
#pre{
  border: 1px solid;
  padding: 16px;
  position: fixed;
  left: 0;
  width: 50%;
  height: 100%;
}
/*
 * 看我，旋转，跳跃。
*/
#pre{
  transform: rotateY(360deg);
}
/*
 * 好了，不玩了，现在用文字来介绍下我自己吧。
 * 现在我需要一张纸，看我变变变。
*/
#paper{
  position: fixed;
  right: 0;
  width: 50%;
  height: 100%;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}
#paper>.content{
  background: white;
  height: 100%;
  width: 100%;
}
`
var b = ``
var md = `
	# 自我介绍
	我是xxx，毕业于xxx学校。自学前端，希望应聘贵公司xxx岗位。

	# 技能介绍
	熟悉HTMl，CSS，JavaScript等相关知识

	# 联系方式
	电话：17878787877
	邮箱：120120120.@qq.com
`
writeCode('', a, ()=>{
	createPaper(()=>{
		writeCode(a, b, ()=>{
			writeMarkdown(md)
		})
	})
})

function createPaper(fn){
	var paper = document.createElement('div')
	paper.id = 'paper'
	document.body.appendChild(paper)
	var content = document.createElement('pre')
	content.className = 'content'
	paper.appendChild(content)
	document.body.appendChild(paper)
	fn.call()
}

function writeMarkdown(markdown, fn){
	let domPaper = document.querySelector('#paper > .content')
	let n = 0
  let clock = setInterval(()=>{
		n += 1
		domPaper.innerHTML = markdown.substring(0, n)
		domPaper.scrollTop = domPaper.scrollHeight 
		if(n >= markdown.length){
			window.clearInterval(clock)
			// fn.call()
		}
	}, 10)
}






























