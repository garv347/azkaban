var statusList = ["FAILED", "FAILED_FINISHING", "SUCCEEDED", "RUNNING", "WAITING", "KILLED", "DISABLED", "READY", "UNKNOWN", "PAUSED"];
var statusStringMap = {
	"FAILED": "Failed",
	"SUCCEEDED": "Success",
	"FAILED_FINISHING": "Running w/Failure",
	"RUNNING": "Running",
	"WAITING": "Waiting",
	"KILLED": "Killed",
	"DISABLED": "Disabled",
	"READY": "Ready",
	"UNKNOWN": "Unknown",
	"PAUSED": "Paused"
};

function hasClass(el, name) 
{
	var classes = el.getAttribute("class");
	if (classes == null) {
		return false;
	}
   return new RegExp('(\\s|^)'+name+'(\\s|$)').test(classes);
}

function addClass(el, name)
{
   if (!hasClass(el, name)) { 
   		var classes = el.getAttribute("class");
   		classes += classes ? ' ' + name : '' +name;
   		el.setAttribute("class", classes);
   }
}

function removeClass(el, name)
{
   if (hasClass(el, name)) {
      var classes = el.getAttribute("class");
      el.setAttribute("class", classes.replace(new RegExp('(\\s|^)'+name+'(\\s|$)'),' ').replace(/^\s+|\s+$/g, ''));
   }
}