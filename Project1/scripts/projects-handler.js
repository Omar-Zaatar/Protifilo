var projectsDiv = document.getElementById("projects");

for(let i = 0 ; i<PROJECTS.length;i++){
    var current_project = PROJECTS[i];
    //div
    var projectdiv = document.createElement("div");
    var divstyle = document.createAttribute("style");
    divstyle.value = "display:inline-block; width:300px; margin:10px;";
    projectdiv.setAttributeNode(divstyle);
    //h3
    var title = document.createElement("h3");
    var titlenode = document.createTextNode(current_project.title);
    title.appendChild(titlenode);
    //img
    var image = document.createElement("img");
    var source = document.createAttribute("src");
    source.value = "./images/"+ current_project.img;
    image.setAttributeNode(source);
    var imagestyle = document.createAttribute("style");
    imagestyle.value = "width:180px; height: 100px;";
    image.setAttributeNode(imagestyle);

    //p

    var p = document.createElement("p");
    var Pnode = document.createTextNode(current_project.description);
    p.appendChild(Pnode);

    //adding to div

    projectdiv.appendChild(title);
    projectdiv.appendChild(image);
    projectdiv.appendChild(p);

    //adding to bigger div

    projectsDiv.appendChild(projectdiv);
}