//var CURSOR;
//
//Math.lerp = (a, b, n) => (1 - n) * a + n * b;
//
//const getStyle = (el, attr) => {
//    try {
//        return window.getComputedStyle
//            ? window.getComputedStyle(el)[attr]
//            : el.currentStyle[attr];
//    } catch (e) {}
//    return "";
//};
//
//class Cursor {
//    constructor() {
//        this.pos = {curr: null, prev: null};
//        this.pt = [];
//        this.create();
//        this.init();
//        this.render();
//    }
//
//    move(left, top) {
//        this.cursor.style["left"] = `${left}px`;
//        this.cursor.style["top"] = `${top}px`;
//    }
//
//    create() {
//        if (!this.cursor) {
//            this.cursor = document.createElement("div");
//            this.cursor.id = "cursor";
//            this.cursor.classList.add("hidden");
//            document.body.append(this.cursor);
//        }
//
//        var el = document.getElementsByTagName('*');
//        for (let i = 0; i < el.length; i++)
//            if (getStyle(el[i], "cursor") == "pointer")
//                this.pt.push(el[i].outerHTML);
//
//        document.body.appendChild((this.scr = document.createElement("style")));
//        // ����ı����ָ�����ɫ ��svg����
//        this.scr.innerHTML = `* {cursor: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8' width='8px' height='8px'><circle cx='4' cy='4' r='4' opacity='.5'/></svg>") 4 4, auto}`;
//    }
//
//    refresh() {
//        this.scr.remove();
//        this.cursor.classList.remove("hover");
//        this.cursor.classList.remove("active");
//        this.pos = {curr: null, prev: null};
//        this.pt = [];
//
//        this.create();
//        this.init();
//        this.render();
//    }
//
//    init() {
//        document.onmouseover  = e => this.pt.includes(e.target.outerHTML) && this.cursor.classList.add("hover");
//        document.onmouseout   = e => this.pt.includes(e.target.outerHTML) && this.cursor.classList.remove("hover");
//        document.onmousemove  = e => {(this.pos.curr == null) && this.move(e.clientX - 8, e.clientY - 8); this.pos.curr = {x: e.clientX - 8, y: e.clientY - 8}; this.cursor.classList.remove("hidden");};
//        document.onmouseenter = e => this.cursor.classList.remove("hidden");
//        document.onmouseleave = e => this.cursor.classList.add("hidden");
//        document.onmousedown  = e => this.cursor.classList.add("active");
//        document.onmouseup    = e => this.cursor.classList.remove("active");
//    }
//
//    render() {
//        if (this.pos.prev) {
//            this.pos.prev.x = Math.lerp(this.pos.prev.x, this.pos.curr.x, 0.15);
//            this.pos.prev.y = Math.lerp(this.pos.prev.y, this.pos.curr.y, 0.15);
//            this.move(this.pos.prev.x, this.pos.prev.y);
//        } else {
//            this.pos.prev = this.pos.curr;
//        }
//        requestAnimationFrame(() => this.render());
//    }
//}
//
//(() => {
//    CURSOR = new Cursor();
//    // ��Ҫ���»�ȡ�б�ʱ��ʹ�� CURSOR.refresh()
//})();


// ����ִ�к������ʽ��IIFE�������ڴ���һ�������������򣬱���ȫ�ֱ�����Ⱦ
!function() {
    // ����һ������ o�����ڻ�ȡԪ�ص�����ֵ
    // ���� w ��Ԫ�ض���v ��Ҫ��ȡ����������i ��Ĭ��ֵ
    function o(w, v, i) {
        // ���Ԫ����ָ�����ԣ��򷵻ظ�����ֵ�����򷵻�Ĭ��ֵ
        return w.getAttribute(v) || i
    }

    // ����һ������ j�����ڻ�ȡָ����ǩ��������Ԫ��
    // ���� i �Ǳ�ǩ��
    function j(i) {
        return document.getElementsByTagName(i)
    }

    // ����һ������ l�����ڻ�ȡ script ��ǩ���������
    function l() {
        // ��ȡ���� script ��ǩ
        var i = j("script"),
            // ��ȡ script ��ǩ������
            w = i.length,
            // ��ȡ���һ�� script ��ǩ
            v = i[w - 1];
        return {
            // script ��ǩ������
            l: w,
            // zIndex ����ֵ��Ĭ��Ϊ -1
            z: o(v, "zIndex", -1),
            // opacity ����ֵ��Ĭ��Ϊ 0.5
            o: o(v, "opacity", 0.5),
            // color ����ֵ��Ĭ��Ϊ "0,0,0"
            c: o(v, "color", "0,0,0"),
            // count ����ֵ��Ĭ��Ϊ 99
            n: o(v, "count", 75)
        }
    }

    // ����һ������ k�����ڻ�ȡ���ڵĿ�Ⱥ͸߶ȣ�����ֵ�������Ŀ�Ⱥ͸߶�
    function k() {
        // ��ȡ���ڵĿ�ȣ����ݲ�ͬ�����
        r = u.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        // ��ȡ���ڵĸ߶ȣ����ݲ�ͬ�����
        n = u.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    }

    // ����һ������ b�����ڻ��ƻ������ݲ�ʵ�ֶ���Ч��
    function b() {
        // ��������ϵ���������
        e.clearRect(0, 0, r, n);
        // �� f ����� t ����ϲ���һ��������
        var w = [f].concat(t);
        var x, v, A, B, z, y;
        // ���� t �����е�ÿ����
        t.forEach(function(i) {
            // ���µ�� x ����
            i.x += i.xa;
            // ���µ�� y ����
            i.y += i.ya;
            // ����㳬���˻��������ұ߽磬��ת x ������ٶ�
            i.xa *= i.x > r || i.x < 0 ? -1 : 1;
            // ����㳬���˻��������±߽磬��ת y ������ٶ�
            i.ya *= i.y > n || i.y < 0 ? -1 : 1;
            // �ڻ����ϻ���һ�� 1x1 �ľ��α�ʾ��
            e.fillRect(i.x - 0.5, i.y - 0.5, 1, 1);
            // ���� w �����е�ÿ����
            for (v = 0; v < w.length; v++) {
                x = w[v];
                // �����ǰ��ͱ������ĵ㲻��ͬһ���㣬�������Ƕ�����Ч������
                if (i !== x && null !== x.x && null !== x.y) {
                    // ��������֮��� x �����ֵ
                    B = i.x - x.x;
                    // ��������֮��� y �����ֵ
                    z = i.y - x.y;
                    // ��������֮��ľ����ƽ��
                    y = B * B + z * z;
                    // �������֮��ľ���С�ڵ�ǰ���������
                    if (y < x.max) {
                        // ����������ĵ��� f ���󣬲��Ҿ�����ڵ����������һ��
                        if (x === f && y >= x.max / 2) {
                            // ������ǰ���λ��
                            i.x -= 0.03 * B;
                            i.y -= 0.03 * z;
                        }
                        // ����͸����
                        A = (x.max - y) / x.max;
                        // ��ʼ����·��
                        e.beginPath();
                        // �����������
                        e.lineWidth = A / 2;
                        // ����������ɫ��͸����
                        e.strokeStyle = "rgba(" + s.c + "," + (A + 0.2) + ")";
                        // �ƶ�����ǰ���λ��
                        e.moveTo(i.x, i.y);
                        // ����һ���ߵ��������ĵ��λ��
                        e.lineTo(x.x, x.y);
                        // ��������
                        e.stroke();
                    }
                }
            }
            // �� w �������Ƴ���ǰ��
            w.splice(w.indexOf(i), 1);
        });
        // ������һ֡����
        m(b);
    }

    // ����һ�� canvas Ԫ��
    var u = document.createElement("canvas"),
        // ��ȡ script ��ǩ���������
        s = l(),
        // ����һ��Ψһ�� id
        c = "c_n" + s.l,
        // ��ȡ canvas �� 2D ������
        e = u.getContext("2d"),
        r,
        n,
        // ��ȡ������Ķ���֡�������������֧����ʹ�� setTimeout ģ��
        m = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(i) {
            window.setTimeout(i, 1000 / 45);
        },
        // ��������ɺ���
        a = Math.random,
        // ����һ������ f�����ڴ洢���λ��
        f = {
            x: null,
            y: null,
            max: 20000
        };
    // ���� canvas �� id
    u.id = c;
    // ���� canvas ����ʽ
    u.style.cssText = "position:fixed;top:0;left:0;z-index:" + s.z + ";opacity:" + s.o;
    // �� canvas Ԫ����ӵ� body Ԫ����
    j("body")[0].appendChild(u);
    // ��ʼ�������Ŀ�Ⱥ͸߶�
    k();
    // �����ڴ�С�ı�ʱ���������û����Ŀ�Ⱥ͸߶�
    window.onresize = k;
    // ������ƶ�ʱ������ f ����� x �� y ����
    window.onmousemove = function(i) {
        i = i || window.event;
        f.x = i.clientX;
        f.y = i.clientY;
    };
    // ������Ƴ�����ʱ���� f ����� x �� y ��������Ϊ null
    window.onmouseout = function() {
        f.x = null;
        f.y = null;
    };
    // ����һ�������� t�����ڴ洢��
    var t = [];
    // ���� s.n ��ֵ����ָ�������ĵ�
    for (var p = 0; s.n > p; p++) {
        // ������ɵ�� x ����
        var h = a() * r;
        // ������ɵ�� y ����
        var g = a() * n;
        // ������ɵ�� x �����ٶ�
        var q = 2 * a() - 1;
        // ������ɵ�� y �����ٶ�
        var d = 2 * a() - 1;
        // �������Ϣ��ӵ� t ������
        t.push({
            x: h,
            y: g,
            xa: q,
            ya: d,
            max: 6000
        });
    }
    // �ӳ� 100 �����ʼ���ƶ���
    setTimeout(function() {
        b();
    }, 100);
}();

//!function() {
//    function o(w, v, i) {
//        return w.getAttribute(v) || i
//    }
//    function j(i) {
//        return document.getElementsByTagName(i)
//    }
//    function l() {
//        var i = j("script"),
//        w = i.length,
//        v = i[w - 1];
//        return {
//            l: w,
//            z: o(v, "zIndex", -1),
//            o: o(v, "opacity", 0.5),
//            c: o(v, "color", "0,0,0"),
//            n: o(v, "count", 99)
//        }
//    }
//    function k() {
//        r = u.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
//        n = u.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
//    }
//    function b() {
//        e.clearRect(0, 0, r, n);
//        var w = [f].concat(t);
//        var x, v, A, B, z, y;
//        t.forEach(function(i) {
//            i.x += i.xa,
//            i.y += i.ya,
//            i.xa *= i.x > r || i.x < 0 ? -1 : 1,
//            i.ya *= i.y > n || i.y < 0 ? -1 : 1,
//            e.fillRect(i.x - 0.5, i.y - 0.5, 1, 1);
//            for (v = 0; v < w.length; v++) {
//                x = w[v];
//                if (i !== x && null !== x.x && null !== x.y) {
//                    B = i.x - x.x,
//                    z = i.y - x.y,
//                    y = B * B + z * z;
//                    y < x.max && (x === f && y >= x.max / 2 && (i.x -= 0.03 * B, i.y -= 0.03 * z), A = (x.max - y) / x.max, e.beginPath(), e.lineWidth = A / 2, e.strokeStyle = "rgba(" + s.c + "," + (A + 0.2) + ")", e.moveTo(i.x, i.y), e.lineTo(x.x, x.y), e.stroke())
//                }
//            }
//            w.splice(w.indexOf(i), 1)
//        }),
//        m(b)
//    }
//    var u = document.createElement("canvas"),
//    s = l(),
//    c = "c_n" + s.l,
//    e = u.getContext("2d"),
//    r,
//    n,
//    m = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
//    function(i) {
//        window.setTimeout(i, 1000 / 45)
//    },
//    a = Math.random,
//    f = {
//        x: null,
//        y: null,
//        max: 20000
//    };
//    u.id = c;
//    u.style.cssText = "position:fixed;top:0;left:0;z-index:" + s.z + ";opacity:" + s.o;
//    j("body")[0].appendChild(u);
//    k(),
//    window.onresize = k;
//    window.onmousemove = function(i) {
//        i = i || window.event,
//        f.x = i.clientX,
//        f.y = i.clientY
//    },
//    window.onmouseout = function() {
//        f.x = null,
//        f.y = null
//    };
//    for (var t = [], p = 0; s.n > p; p++) {
//        var h = a() * r,
//        g = a() * n,
//        q = 2 * a() - 1,
//        d = 2 * a() - 1;
//        t.push({
//            x: h,
//            y: g,
//            xa: q,
//            ya: d,
//            max: 6000
//        })
//    }
//    setTimeout(function() {
//        b()
//    },
//    100)
//} ();