// JavaScript Document


function displayDate(display) 
{
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth();
	var day = date.getDate();
	var hour= date.getHours();
	var minute = date.getMinutes();
	var seconds = date.getSeconds();
	
	if (display == 1)
	{
		document.writeln(month+"/"+day+"/"+year);
	}
	else if (display == 2)
	{
		document.writeln(hour+":"+minute+":"+seconds);
	}
}

function validate()
{	
	
	if (isNaN(document.form1.a.value) || document.form1.a.value==null || document.form1.a.value < 1 || document.form1.a.value > 50)
  {
  alert("Please enter a number between 1 and 50");
  document.form1.a.focus();
  return false;
  }
	else if (isNaN(document.form1.b.value) || document.form1.b.value==null || document.form1.b.value < 1 || document.form1.b.value > 50)
  {
  alert("Please enter a number between 1 and 50");
  document.form1.b.focus();
  return false;
  }
  else if (isNaN(document.form1.c.value) || document.form1.c.value==null || document.form1.c.value < 1 || document.form1.c.value > 50)
  {
  alert("Please enter a number between 1 and 50");
  document.form1.c.focus();
  return false;
  }
	else if (isNaN(document.form1.d.value) || document.form1.d.value==null || document.form1.d.value < 1 || document.form1.d.value > 50)
  {
  alert("Please enter a number between 1 and 50");
  document.form1.d.focus();
  return false;
  }
  else if (isNaN(document.form1.e.value) || document.form1.e.value==null || document.form1.e.value < 1 || document.form1.e.value > 50)
  {
  alert("Please enter a number between 1 and 50");
  document.form1.e.focus();
  return false;
  }
 else
 {
  var total=((document.form1.a.value+document.form1.b.value+document.form1.c.value+document.form1.d.value+document.form1.e.value)*3);
  if (total>100)
  	{
		setCookie('Large', Large, '');
	}
	else if (total=100) //It said less or more. What about = ??
	{
		setCookie('Middle', Middle,'')
	}
	else
	{
		setCookie('Small', Small, '');
	}
}

}

function setCookie(c_name,value,exdays)
{
	validate();
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value=escape(value) + ((exdays==null) ? "" : "; 	expires="+exdate.toUTCString());
	document.cookie=c_name + "=" + c_value;
	
	var cookieResult = document.cookie.match( '(^|;) ? '+ c_name + '=([^;]*) (;|$)' );
	if (cookieResult)
	{
		unescape([cookieResult(2)])
		var newWin = open("", "", "status=yes");
		newWin.document.writeln('The size is ' + cookieResult)	
		newWin.document.close();
	}
}