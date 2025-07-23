# 多元函数的极限与连续_NKU(答案)


## 练习10.1


> [!question] 10.1 1
> 在$\mathbb{R}^{n}$中举出以下例子
> (1) 无穷个开集之交不为开集. 
> (2) 无穷个闭集之并不为闭集. 

`Sol.`

(1)考虑构造一个收敛的点列，$X_{k}=\left\{ \left( x_{1},x_{2},\dots,x_{n}\right)|\lvert x_{i} \rvert< \frac{1}{k}  \right\}$

那么可以得到$\bigcap\limits_{k=1}^{\infty}X_{k}=\left\{ 0 \right\}$，单点集不为开集

(2)考虑构造收敛于区间端点的点列，$X_{k}=\left\{ (x_{1},x_{2},\dots,x_{n})|d=\sqrt{ \sum\limits_{i=1}^{n}x_{i}^{2} }\leqslant 1- \frac{1}{k}\right\}$

那么可以得到$\bigcup\limits_{k=1}^{\infty}X_{k}=\left\{ (x_{1},x_{2},\dots,x_{n})|d<1 \right\}$，是一个开球(开集)

> [!question] 10.1 2
> 设$A$是$\mathbb{R}^n$的子集，$X_0$是$A$的聚点，求证：存在点列$\{X_m\}\subseteq A$, 使得$X_m\neq X_0$,且
> 
> $$\lim_{m\to\infty}X_m=X_0$$



`Proof.`

根据聚点的定义知道$\forall\delta>0,\exists x'\in V(X_{0},\delta)\bigcap A$，那么构造如下点列：

固定$r_{1}=1,\exists X_{1}\in V(X_{0},r_{1}=1)\bigcap A,X_{1}\neq X_{0}$，再固定$r_{2}=\min\left\{ \frac{1}{2},\lvert X_{1}-X_{0} \rvert \right\},\exists X_{2}\in V(X_{0},r_{2})\bigcap A,X_{2}\neq X_{0}$

以此类推，$r_{n}=\min\left\{ \frac{1}{n},\lvert X_{n-1}-X_{0} \rvert \right\},\exists X_{n}\in V(X_{0},r_{n})\bigcap A,X_{n}\neq X_{0}$

这样就得到了$\left\{ X_{m} \right\},\lim\limits_{ m \to \infty }\lvert X_{m}-X_{0} \rvert =0,X_{m}\neq X_{0},\lim\limits_{ m \to \infty }X_{m}=X_{0}$

> [!question] 10.1 3
> 设$A$是$\mathbb{R}^n$的子集，求证：$\overline A=A\cup A^\prime.$

`Proof.`

根据定义，若有$x\in \overline{A}$，讨论$x\in A ,x\not\in A$，如果$x\in A \implies x\in A\bigcup A'$;$x\not\in A,x\in A'\implies x\in A\bigcup A'$，那么有$\overline{A}\subset A\bigcup A'$

反方向$x\in A$显然有$x\in \overline{A}$，若是$x\in A'$同样根据定义可得$A'\subset  \overline{A}$,综上可知$A\bigcup A' \subset  \overline{A}$

由相互包含可知$\overline{A}=A\bigcup A'$


> [!question] 10.1 4
> 求证下列命题：
> (1) $A\subseteq B\Rightarrow A^{\circ }\subseteq B^{\circ }$, $\overline {A}\subseteq \overline {B};$
> (2) $\overline {A\cup B}= \overline {A}\cup \overline {B}$, $\overline {A\cap B}\subseteq \overline {A}\cap \overline {B};$
> (3) $( A\cap B) ^{\circ }= A^{\circ }\cap B^{\circ }$, $( A\cup B) ^{\circ }\supseteq A^{\circ }\cup B^{\circ }.$



`Proof.`

(1)

若是$A\subseteq B\implies \forall x\in A^{\circ},\exists V(x,\varepsilon)\subset A\subset B \implies x\in B^{\circ}\implies A^{\circ}\subseteq B^{\circ}$

同样的$\forall x\in \overline{A}$，分类讨论$x\in A$显然$x\in B\implies x\in \overline{B}$，若$x\not\in A,x\in A'$，根据定义有$V(x,\varepsilon)\setminus \left\{ x \right\}\bigcap A\neq \emptyset\implies V(x,\varepsilon)\setminus \left\{ x \right\}\bigcap B\neq \emptyset \implies x\in \overline{B}$

所以可得$\overline{A}\subseteq  \overline{B}$

(2)

$\forall x\in \overline{A\bigcup B},\forall V(x,\varepsilon)\bigcap\left( A\bigcup B \right)\setminus \left\{ x \right\}\neq \emptyset$

由此可得$\left( V(x,\varepsilon)\bigcap A\setminus \left\{ x \right\}\neq \emptyset \right) \bigcup \left( V(x,\varepsilon)\bigcap B\setminus \left\{ x \right\}\neq \emptyset \right)$，也就是属于A或者B的闭包($\overline{A}\bigcup  \overline{B}$),$\overline{A\bigcup B}\subset  \overline{A}\bigcup  \overline{B}$

$V(x,\varepsilon)\bigcap A(B)\setminus \left\{ x \right\}\neq \emptyset\implies V(x,\varepsilon)\bigcap \left( A\bigcup B \right)\setminus \left\{ x \right\}\neq \emptyset$，也就是属于$A\bigcup B$的闭包

综上可知：$\overline{A\bigcup B}=\overline{A}\bigcup  \overline{B}$

同理$\forall x\in \overline{A\bigcap B},\forall V(x,\varepsilon)\bigcap\left( A\bigcap B \right)\setminus \left\{ x \right\}\neq \emptyset$

也就是说$\left( V(x,\varepsilon)\bigcap A\setminus \left\{ x \right\}\neq \emptyset \right) \bigcap \left( V(x,\varepsilon)\bigcap B\setminus \left\{ x \right\}\neq \emptyset \right)$

故$\overline{A\bigcap B} \subseteq  \overline{A} \bigcap  \overline{B}$

(3)

$\forall x \in \left( A\bigcap B \right)^{\circ},\exists V(x,\varepsilon)\subset \left( A\bigcap B \right)\implies V(x,\varepsilon)\subset A(B)\implies x\in A^{\circ}\bigcap B^{\circ}$，可知有$A^{\circ}\bigcap B^{\circ}\supset \left( A\bigcap B \right)^{\circ}$

若是$x\in A^{\circ}\bigcap B^{\circ}$，$\exists V(x,\varepsilon_{1})\subset A,V(x,\varepsilon_{2})\subset B$,取$\varepsilon=\min\left\{ \varepsilon_{1},\varepsilon_{2} \right\},V(x,\varepsilon)\subset A\bigcap B$,可知有$A^{\circ}\bigcap B^{\circ}\subset \left( A\bigcap B \right)^{\circ}$

综上可知,$A^{\circ}\bigcap B^{\circ}=\left( A\bigcap B \right)^{\circ}$$

$\forall x\in A^{\circ}\bigcup B^{\circ},\exists V(x,\varepsilon)\subset A(B),V(x,\varepsilon)\subset \left( A\bigcup B \right)\implies x\in \left( A\bigcup B \right)^{\circ}$

即证$A^{\circ}\bigcup B^{\circ}\subset \left( A\bigcup B \right)^{\circ}$


> [!question] 10.1 5
> 设$A$是$\mathbb{R}^n$的子集，求证：
> (1) $A^{\circ }$是开集； (2) $\partial A$是闭集； (3) $\overline{A}$是闭集； (4) $A^{\prime }$是闭集. 



`Proof.`

(1)

根据定义证明$(A^{\circ})^{\circ}=A^{\circ}$，利用距离函数可知集合内部是其上每一点的邻域:$\forall x\in A^{\circ},V(x,\varepsilon)$上任取一点$x_{0}$，再选择一个邻域$V(x_{0},\varepsilon-d(x,x_{0}))$上的点记为$y$，那么有三角不等式$d(x,y)\leqslant d(x,x_{0})+d(x_{0},y)<\varepsilon$,证毕。

那么对于A内部上的任意点，选择比原本含于A的开邻域更小的邻域即可含于A的内部，也就是内部的内部仍然为内部，等价为$A^{\circ}$是开集

(2)

反证法，假设存在$x\not\in \partial A,\forall V(x,\varepsilon),V(x,\varepsilon)\bigcap \partial A \neq \emptyset$，目标是导出$x\in \partial A$

分类讨论，$x\in A$时，$\forall\varepsilon,V(x,\varepsilon)\bigcap A\neq \emptyset$，再根据假设条件$V\left( x,\frac{\varepsilon}{2} \right)\bigcap \partial A\neq \emptyset,\exists x_{1}\in V\left( x, \frac{\varepsilon}{2} \right)$且$x_{1}\in \partial A$，那么根据定义有$V\left( x_{1}, \frac{\varepsilon}{2} \right)\bigcap A^{c}\neq \emptyset,\exists x_{2}\in V\left( x_{1}, \frac{\varepsilon}{2} \right)\bigcap A^{c},d(x,x_{2})\leqslant d(x,x_{1})+d(x_{1},x_{2})<\varepsilon$，也就是$x_{2}\in V(x,\varepsilon),V(x,\varepsilon)\bigcap A^{c}\neq \emptyset$，再根据$\varepsilon$的任意性得到$x\in \partial A$

同理可得$x\in A^{c}$时也有$x\in \partial A$，综上所述矛盾，$\partial A=\overline{\partial A}$，$\partial A$是闭集

(3)

考虑证明$\overline{A}^{c}$是开的，$\forall x\in \overline{A}^{c},x\not\in A,\exists V(x,\varepsilon)\bigcap A\neq \emptyset$，还需证明$V(x,\varepsilon)\bigcap  \overline{A}=\emptyset$，若是不然，与A的闭包有交，记交点为$x_{1}$，闭包与A交非空，
那么取$d=\varepsilon-d(x,x_{1}),V(x_{1},d)\bigcap A\neq \emptyset$，记交点为$x_{2}\in A$，$d(x,x_{2})<\varepsilon,x\in A'\subset  \overline{A}$,矛盾，所以$\overline{A}$是闭集

(4)

同样考虑$\left( A' \right)^{c},\forall x\in \left( A' \right)^{c}$，$\exists V(x,\varepsilon)$，$x\in A$时$V(x,\varepsilon)\bigcap A=\left\{ x \right\}$，$x\not\in A$时$V(x,\varepsilon)\bigcap A=\emptyset$，欲证$\exists V(x,\varepsilon)\bigcap A'=\emptyset$，反证不然，$\forall \varepsilon,V(x,\varepsilon)\bigcap A'\neq \emptyset$，不妨记为$x_{1}$，方便起见取$\varepsilon'= \frac{\varepsilon}{2},x_{1}\in V(x,\varepsilon')$，由于$x_{1}\in A',V\left( x_{1},\varepsilon'= \frac{\varepsilon}{2} \right)\bigcap A\neq \emptyset$，交点记为$x_{2}\neq x_{1}$，那么$x_{2}\in V(x,\varepsilon)$，$V(x,\varepsilon)$与A有异于$x$的交点，故矛盾，$\left( A' \right)^{c}$是开集，取补集知结论成立


> [!question] 10.1 6
> 设$\{X_m\}$为$\mathbb{R}^n$中的点列且$\{X_m\}$的任何子序列均在$\mathbb{R}^n$中不收敛，求证：$\lim\limits_{m\to\infty}|X_m|=+\infty.$

`Proof.`

反证，有界，根据Bolzano-Weierstrass定理(聚点定理)可知有界点列必有聚点即收敛子列，可知与无收敛子列矛盾，所以$\lim\limits_{ m \to \infty }\lvert X_{m} \rvert= +\infty$





















