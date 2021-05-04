
var caroselArea = document.getElementById("carouselArea");

var totalProjects;

$.getJSON("./js/openHouseProjects_array.json", function (json) {
    //console.log(json); // this will show the info it in firebug console
    totalProjects = json.length;
    //console.log(json.length);

    let projectsDivs = " ";

    var i;
    for (i = 0; i < json.length; i++) {
        var active = " "

        if (i <= 0) active = 'active';

        projectsDivs += "<div class='carousel-item col-12 col-sm-6 col-md-4 col-lg-3 " + active + "'> <div class='d-block w-30 projectBox'> <div class='projectThumbnail' style='background-image: url(" + json[i].projectThumbnail + "); '  > </div><h2 class='projectTitle'>" + json[i].projectName + "</h2><p class='projectNames'>" + json[i].projectMembers + "</p><p class='projectDetails'>" + json[i].projectBlurb + "</p><a href='" + json[i].projectURL + "' class='projectLink'> View Project</a></div></div>"

    }

    //console.log(projectsDivs);
    carouselArea.innerHTML = projectsDivs;

    var totalProjectsElement = document.getElementById("totalProjects");
    //console.log(totalProjects);
    totalProjectsElement.innerHTML = totalProjects + " Projects";

});


