var store = {
  name: "Erigert Zaimi",
  location: "Location: Tirana",
  email: "Email: erigert.zaimi@gmail.com",
  contact: "Phone: 0684206646",
  section_titles: ["Skills", "Personal Skills", "Education", "Courses"],
  content_p: [
    "Highly motivated junior programmer with proven skills in Java programming languange. Experienced in object-oriented programming , development of multiple purpose projects and database connected applications.",
    "Electronic Engineering<br/>Polytechnic University of Tirana<br/>Third year student towards a bachelor's in Electronic Engineering at Faculty of Information and Technology",
    "The JAVA fundamentals course covers all the language basics in detail. Starting off with the basic programming concepts and beginner level programs it creates a good understanding of the JAVA syntax and general programming logic. This course helped me learn a lot of important tools like the conditional statements, loops, data manipulation, methods and linear data structures.",
    "By taking the JAVA in Depth course I created an approach to object oriented programming by learning everything about classes and objects, the types of relationships between classes and inheritance. The course covers lots of useful tools that the language offers like interfaces, generics, abstract classes, enumerations etc. I learned about the database connection API which allows programs to access a database.",
    "The Python Bootcamp teaches everything needed to program with Python and use it as a tool in different fields. It covers all the fundamentals and explains them with detailed examples. By taking this course i was able to learn how to use different IDE's. I learned how Python can be used for developing software, data analysis, and data visualization.",
  ],
  courses: [
    "Hardsoft Foundations of Java SE 8 Programming course",
    "Hardsoft Java SE 8 Programming in Depth",
    "Udemy Python Bootcamp",
  ],
  programming_lang_header: "Programming languanges",
  programming_lang_data: [
    "JAVA",
    "SQL",
    "Python",
    "C(fundamentals)",
    "HTML, CSS",
  ],
  ide_header: "IDE",
  ide_data: [
    "Eclipse",
    "MySQL Workbench",
    "Atom",
    "Dev-C++",
    "Visual Studio Code",
  ],
  personal_skills_data: [
    "Strong analytical thinking",
    "Problem solving thinking",
    "Qualitative and quantitative research",
    "Great communication skills",
  ],
};

document.getElementById("title").innerHTML = store.name;
document.getElementById("location").innerHTML = store.location;
document.getElementById("email").innerHTML = store.email;
document.getElementById("contact").innerHTML = store.contact;

const section_titles_arr = document.getElementsByClassName("section-title");
for (let i = 0; i < section_titles_arr.length; i++) {
  section_titles_arr[i].innerHTML = store.section_titles[i];
}

const par_arr = document.getElementsByTagName("p");
for (let i = 0; i < par_arr.length; i++) {
  par_arr[i].innerHTML = store.content_p[i];
}

const courses_arr = document.getElementsByClassName("course-title");
for (let i = 0; i < courses_arr.length; i++) {
  courses_arr[i].innerHTML = store.courses[i];
}

const programming_table = document.getElementById("programming-lang").innerHTML = fill_table(store.programming_lang_header, 
                                                                                             store.programming_lang_data);
const ide_table = document.getElementById("ide").innerHTML = fill_table(store.ide_header, store.ide_data);
const skills_table = document.getElementById("personal-skills").innerHTML = fill_table(null, store.personal_skills_data);

function fill_table(table_header, table_data){  
  let text = "";
  if(table_header != null){
    text += "<tr><th>" + table_header + "</th></tr>";
  }
  for(let i = 0; i < table_data.length; i++){
    text += "<tr><td>" + table_data[i] + "</td></tr>";
  }
  return text;
}

