import{n as r}from"./_plugin-vue2_normalizer.61652a7c.js";const e={props:{score:{type:Number,default(){return 0}},postId:{type:Number,default(){return 0}}},computed:{scoreClass:function(){return 80<this.score?"score-green":50<this.score?"score-orange":1<this.score?"score-red":"score-disabled"},getId:function(){return`score-button-${this.postId}`}}};var s=function(){var n=this,t=n._self._c;return t("div",{staticClass:"aioseo-score-button",class:n.scoreClass,attrs:{id:n.getId}},[n._v(" "+n._s(this.score===0?"N/A":`${this.score}/100`)+" ")])},o=[],c=r(e,s,o,!1,null,null,null,null);const l=c.exports;export{l as C};