/*1，记得写完一行语句加分号*/
/*2，记得用这样的注释（一定要用！）*/
this.webObject=class{
  constructor(){
    /*设置你的属性*/
  }
  Info(){
    /*获取信息*/
    return{
      index:{HTML:this.index,script:this.contentscript},
      /*指令：open projectname or projectname@index，script见下方注释*/
      /*testpage:this.method //open projectname@testpage*/
      /*{error500:method1}
      {error404:method2}
      ↑触发404或500错误时dakadaweb将调用error404或error500，如果没有定义则显示默认页面↑*/
      /*可以使用redirect函数切换页面*/
    }
  }
    index(){
        /*页面模板*/
        return `<h1>hello!</h1><p>dakadawebs example page</p>`;
    }
  contentscript(){
          /*待html加载完毕后内嵌于网页执行的脚本，保密性较强
          如果你想保密你的代码，不要随意使用console.log!可能会使你的代码暴露！
          错误尽量用try{}catch(e){}处理*/
              console.log("hello")
      }
    /*method(){return `something...`}*/

}
