import console from "../src/index"
console.log("Log Test");
console.notice("Notice Test");
console.info("Info Test");
console.warn("Warn Test");
console.alert("Alert Test");
console.critical("Critical Test");
console.emergency("Emergency Test");

console.setDebugLevel(1);
console.debug("Debug Test", "SharletP");

console.setDebugLevel(2);
console.debugX("Debug-X Test", "says hi :)");