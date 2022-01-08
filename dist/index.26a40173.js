window.dom = {
    create (string) {
        const container = document.createElement('template');
        container.innerHTML = string.trim();
        return container.content.firstChild;
    },
    // node2要插在node的后面
    after (node, node2) {
        node.parentNode.insertBefore(node2, node.sextSibling);
    },
    // node2要插在node的前面
    before (node, node2) {
        node.parentNode.insertBefore(node2, node);
    },
    // 让node作为parent的孩子
    append (parent, node) {
        parent.appendChild(node);
    },
    // 添加一个父亲
    wrap (node, parent) {
        dom.before(node, parent);
        dom.append(parent, node);
    },
    // 删除一个节点
    remove (node) {
        node.parentNode.removeChild(node);
        // 返回被删除节点的引用
        return node;
    },
    // 删除node里的所有子节点
    empty (node) {
        const array = [];
        let x = node.firstChild;
        while(x){
            array.push(dom.remove(node.firstChild));
            x = node.firstChild;
        }
        return array;
    },
    // 修改node的属性和属性值
    attr (node, name, value) {
        // arguments函数的所有参数 如果参数长度为3，就修改 如果为2就读取
        if (arguments.length === 3) node.setAttribute(name, value);
        else if (arguments.length === 2) return node.getAttribute(name);
    },
    text (node, string) {
        if (arguments.length === 2) {
            if ('innerText' in node) node.innerText = string;
            else node.textContent = string;
        } else if (arguments.length === 1) {
            if ('innerText' in node) return node.innerText;
            else return node.textContent;
        }
    },
    html (node, string) {
        if (arguments.length === 2) node.innerHTML = string;
        else if (arguments.length === 1) return node.innerHTML;
    },
    style (node, name, value) {
        if (arguments.length === 3) // dom.style(div,'color','red')
        node.style[name] = value;
        else if (arguments.length === 2) {
            if (typeof name === 'string') // dom.style(div,'color')
            return node.style[name];
            else if (name instanceof Object) {
                // dom.style(div,{color:'red'})
                const object = name;
                for(let key in object)node.style[key] = object[key];
            }
        }
    },
    class: {
        // 为node添加一个class
        add (node, className) {
            node.classList.add(className);
        },
        // 删除一个class
        remove (node, className) {
            node.classList.remove(className);
        },
        // 查看有没有
        has (node, className) {
            return node.classList.contains(className);
        }
    },
    // 创建一个监听事件
    on (node, eventName, fn) {
        node.addEventListener(eventName, fn);
    },
    // 删除一个监听事件
    off (node, eventName, fn) {
        node.removeEventListener(eventName, fn);
    },
    // 查找一个选择器
    // 可选择查找范围
    find (selector, scope) {
        // 因为这个api返回的是一个伪数组，所以记得使用时加索引
        // 意思是如果有设定的范围 就在范围里找 没有的话就document
        return (scope || document).querySelectorAll(selector);
    },
    // 找一个元素的父亲
    parent (node) {
        return node.parentNode;
    },
    // 找一个元素的孩子
    children (node) {
        return node.children;
    },
    // 找一个元素的兄弟 首先要变成一个数组 用filter 过滤
    siblings (node) {
        return Array.from(node.parentNode.children).filter((n)=>n !== node
        );
    },
    // 找节点的下一个兄弟
    next (node) {
        let x = node.nextSibling;
        while(x && x.nodeType === 3)x = x.nextSibling;
        return x;
    },
    previous (node) {
        let x = node.previousSibling;
        while(x && x.nodeType === 3)x = x.previousSibling;
        return x;
    },
    each (nodeList, fn) {
        for(let i = 0; i < nodeList.length; i++)fn.call(null, nodeList[i]);
    },
    // 获取这个节点在父元素中是第几个孩子
    index (node) {
        const list = dom.children(node.parentNode);
        let i;
        for(i = 0; i < list.length; i++){
            if (list[i] === node) break;
        }
        // 索引加一
        return i + 1;
    }
};

//# sourceMappingURL=index.26a40173.js.map
