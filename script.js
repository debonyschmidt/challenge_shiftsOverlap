var objRoster1 = {
  id: 1,
  employee: 1,
  departament: 1,
  starttime: 1508450400,
  endtime: 1508450700
};

var objRoster2 = {
  id: 1,
  employee: 2,
  departament: 1,
  starttime: 1508479300,
  endtime: 1508479400
};

var submit = document.getElementById("submit");

submit.addEventListener("click", function () {
  var employeeId = document.getElementById("employeeId").value;
  var startTime = document.getElementById("startTime").value;
  var endTime = document.getElementById("endTime").value;

  function checkRoster1() {
    return objRoster1.employee == employeeId && 
      objRoster1.starttime <= startTime && 
      objRoster1.endtime >= startTime ||
      objRoster1.employee == employeeId && 
      objRoster1.starttime <= endTime && 
      objRoster1.endtime >= endTime
  };

  function checkRoster2() {
    return objRoster2.employee == employeeId && 
      objRoster2.starttime <= startTime && 
      objRoster2.endtime >= startTime ||
      objRoster2.employee == employeeId && 
      objRoster2.starttime <= endTime && 
      objRoster2.endtime >= endTime
  }

  if (employeeId == "" || startTime == "" || endTime == "") {
    alert("Please, fill all the fields.");

  } else if (Object.keys(objRoster1).some(checkRoster1)) {
    alert("Employee is already allocated for this date and time on Roaster 1.");

  } else if (Object.keys(objRoster2).some(checkRoster2)) {
    alert("Employee is already allocated for this date and time on Roaster 2.");

  } else {
    alert ("Employee is available for this date & time");
  }
});
