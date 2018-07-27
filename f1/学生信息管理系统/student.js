var Id=1000;
var data=new Array(999);
function Student(name,sex,grade,major){
	this.name=name;
	this.sex=sex;
	id=Id;
	this.grade=grade;
	this.major=major;
	function getName(){
		return mame;
	}
	function getSex(){
		return sex;
	}
	function getGrade(){
		return grade;
	} 
	function getMajor(){
		return major;
	}
	function setName(nname){
		if(nname!=null)
		this.name=nname;
	}
	function setSex(nsex){
		if(nsex!=null)
		this.sex=nsex;
	}
	function setGrade(ngrade){
		if(ngrade!=null)
		this.grade=ngrade;
	}
	function setMajor(nmajor){
		if(nmajor!=null)
		this.major=nmajor;
	}
	alert("id:"+id+" name:"+name+" sex:"+sex+" grade:"+grade+" major:"+major+" created");
	Id=Id+1;
}
alert("Welcome to use our student-management system!");
function addStudent(){
	var aname=prompt("Please type in the name :","name");
	var asex=prompt("Please type in sex :","male or female");
	var agrade=prompt("Please type in grade :","grade");
	var amajor=prompt("Please type in major :","major");
	data[Id-1000]=new Student(aname,asex,agrade,amajor);		
}
function search(){
	var id=prompt("type in the id of the student","(from 1000 to 2000");
	if(id>=Id||id<1000||id>2000){
		alert("data no find");
	}
	alert("target finded:"+data[id-1000].name+" "+data[id-1000].sex+" "+data[id-1000].grade+" "+data[id-1000].major);
	var delOrNor=confirm("Delete this student or not")
		if(delOrNot==ture){
			data[n-1000]=null;
			window.alert("taget Deleted!");
		}
		else{
			var nname=prompt("type in new name to change.if you donnot want to change ,click cancel","name");
			data[id-1000].setName(nname);
			var nsex=prompt("type in new sex to change.if you donnot want to change ,click cancel","sex");
			data[id-1000].setSex(nsex);
			var ngrade=prompt("type in new grade to change.if you donnot want to change ,click cancel","male or female");
			data[id-1000].setGrade(ngrade);
			var nmajor=prompt("type in new major to change.if you donnot want to change ,click cancel","major");
			data[id-1000].setMajor(nmajor);
			alert("data has been changed");
		}
}
