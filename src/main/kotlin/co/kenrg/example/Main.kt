external fun require(module:String):dynamic
external class ExpressApp {
  fun get(s: String, any: Any)
  fun listen(i: Int, function: () -> Unit)
}
//external fun Express(): ExpressApp

fun main(args: Array<String>) {
  fun express(): ExpressApp = require("express");
  val app = express();

 // app.get("/", "text/plain", "i am a beautiful butterfly");

//  val middleWareObject = js(code = "{ (function(req) { return req; }), (function (res){ res.type('text/plain'); res.send('i am a beautiful butterfly');}) }");

//  app.get("/", middleWareObject)

  app.listen(3000, {
    println("Listening on port http://localhost:3000")
  })
}
