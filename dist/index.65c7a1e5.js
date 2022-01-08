const div = dom.create('<div>newDiv</div>');
console.log(div);
dom.after(window.test, div);
// dom.before(test,div)
// dom.append(test,div)
const div3 = dom.create('<div id ="parent"></div>');
dom.wrap(test, div3);
// dom.remove(test);
const nodes = dom.empty(window.empty);
console.log(nodes);
dom.attr(test, 'title', 'Hi, I am Frank');
const title = dom.attr(test, 'title');
console.log(`title: ${title}`);
dom.text(test, '你好，这是新的内容');
console.log(dom.text(test));
dom.html(test, '<span>哈哈</span>');
console.log(dom.html(test));
dom.style(test, {
    border: '1px solid red',
    color: 'blue'
});
// console.log(dom.style(test,'color'))
// console.log(dom.style(test,{color:'blue'}))
dom.class.add(test, 'red');
dom.class.add(test, 'blue');
// dom.class.remove(test,'blue')
console.log(dom.class.has(test, 'blue'));
const fn = ()=>{
    console.log('点击了');
};
dom.on(test, 'click', fn);
dom.off(test, 'click', fn);
// const testp=dom.find('#test')[0]
// console.log(testp)
const ok = dom.find('#ok')[0];
console.log(ok);
console.log(dom.find('#yes', ok)[0]);
console.log(dom.parent(yes));
console.log(dom.siblings(dom.find('#s2')[0]));
const n2 = dom.find('#n2')[0];
console.log(dom.next(n2));
console.log(dom.previous(n2));
const t = dom.find('.travel')[0];
dom.each(dom.children(t), (n)=>dom.style(n, 'color', 'red')
);
console.log(dom.index(dom.find('#t2')[0]));

//# sourceMappingURL=index.65c7a1e5.js.map
