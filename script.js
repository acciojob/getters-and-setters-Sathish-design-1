//complete this code
class Person {
	Person(name,age){
		this.name = name;
		this.age = age;
	}
	getter(){
		return this.name;
	}
	setter(){
		this.age = age;
	}
}

class Student extends Person {
	Student(name,age){
		this.name = name;
		this.age = age;
	}
	study(){
		return this.name+" is studying "
	}
}

class Teacher extends Person {
	Teacher(name,age){
		this.name = name;
		this.age = age;
	}
	teach(){
		return this.name+" is teaching"
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
