window.dom={
    find(selector,scope){
        return (scope||document).querySelectorAll(selector)
    },
    style(node,name,value){
        if(arguments.length===3){
            node.style[name]=value
        }else if(arguments.length===2){
            if(typeof name==='string'){
                return node.style[name]
            }else if(name instanceof Object){
                const object=name
                for(let key in object){
                    node.style[key]=object[key]
                }
            }
        }
    },
    each(nodeList,fn){
        for(let i=0;i<nodeList.length;i++){
            // this传为null 同时传n
            fn.call(null,nodeList[i])
        }
    }
}


const div = dom.find('#test>.red')[0] // 获取对应的元素
console.log(div)
dom.style(div, 'color', 'red') // 设置 div.style.color
console.log(dom.style(div,'color'))//读取node样式
dom.style(div,{background:'blue'})//两个arguments方式设置背景色

const divList = dom.find('.red')
console.log(divList) // 获取多个 div.red 元素
dom.each(divList, (n)=> console.log(n)) // 遍历 divList 里的所有元素