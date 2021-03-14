var screen = "";
var list = ["AC","Del","%","÷",7,8,9,"×",4,5,6,"-",1,2,3,"+","0","•","="]
function click(e){
  switch(e.innerHTML){
    case "AC":
      action.ac();
      break;
    case "Del":
      action.del();
      break;
    case "=":
      action.equal();
      break;
    case "•":
      screen += ",";
      break;
    default:
      screen += e.innerHTML
  }
}

var action = {
  ac(){
    screen = ""
  },
  del(){
    screen = screen.slice(0,screen.length-1)
  },
  equal(){
    var str = screen.replace(/×/g,"*").replace(/÷/g,"/").replace(/,/g,".")
    screen = eval(str)
  }
}

var App = {
  view(){
    return (
      m("div.app",[
        m("div.head",m("div.screen",screen)),
        m("div.foot",
          list.map(k => m("div.button "+(k == "=" && "equal"),{ onclick : e => click(e.target) },k))
        )
      ])
    )
  }
}

m.mount(document.getElementById("app"),App)