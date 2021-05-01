

$(document).ready(function(){
 


    $.getJSON("./js/openHouseBios_array.json", function(data){
        console.log(data);
       
       var studentNum="";
       $.each(data, function (key, value) {
           
           // console.log("key: " + key + "name: " + value.name + " " + "image:" + value.image);
       var $wrapper = $("<div/>", { class: "hover-image col-12 col-lg-3 col-md-4 col-sm-6" }),
           $inner = $("<a/>", { class:"inner", id: `pop${key}`, href:"#"}),
           $img = $("<img/>", { class: "modal-image",src:value.image }),
           $wrappName = $("<div/>", { class: "wrapp-name" }),
           $name = $("<h5/>", { class: "modal-name",text:value.name});
           $wrapper.append($inner.append($img),$inner.append($wrappName.append($name))).appendTo("#modal-row");

       var $modal = $("<div/>", { class:"modal fade", id:`imagemodal${key}`, tabindex:"-1", role:"dialog", "aria-labelledby":"myModalLabel", "aria-hidden":"true" }),
           $modalDialog = $("<div/>", {class:"modal-dialog modal-dialog-centered"}),
           $modalContent = $("<div/>", {class:"modal-content"}),
           $modalBody = $("<div/>", {class:"modal-body"}),
           $containerFluid = $("<div/>", {class:"container-fluid"}),

           $firstRow = $("<div/>", {class:"row", style:"  margin-top:5px; position: absolute; top: 0; right:15px;" }),
           $insideBtn = $("<button/>", {type:"button", class:"btn-close", "data-bs-dismiss":"modal","aria-label":"Close"}),

           $secRow = $("<div/>", {class:"row align-item-center", style:"margin-top: 20px;"}),
           $firstCol = $("<div/>", {class:"col-6"}),
           $modalTitle = $("<h3/>", {class:"modal-title", text:value.name}),
           $modalArticle = $("<div/>", {class:"modal-article"}),
           $bio = $("<p/>", {class:"bio", text:value.bio}),
           $circleRow = $("<div/>", {class:"row"}),
           $modalCircleone = $("<div/>", {class:"modal-circle"}),
           $modalCircletwo = $("<div/>", {class:"modal-circle"}),
           $modalCirclethree = $("<div/>", {class:"modal-circle"}),

           $insideRow = $("<div/>", {class:"row row-btn justify-content-start"}),
           $portfolioBtn = $("<a/>", {class:"portfolio-btn", href:value.PortfolioURL, target:"_blank"}),
           $btnFont = $("<span/>", {class:"btn-font", text:"Portfolio"}),

           $secCol = $("<div/>", {class:"col-6"}),
           $img = $("<img/>", {class:"modal-avatar-img", src:value.image});
           
           $modal.append(
               $modalDialog.append(
                   $modalContent.append(
                       $modalBody.append($containerFluid.append(
                           $firstRow.append($insideBtn),
                           $secRow.append($firstCol.append($modalTitle, $modalArticle.append($bio),$circleRow.append($modalCircleone,$modalCircletwo,$modalCirclethree),$insideRow.append($portfolioBtn.append($btnFont))),$secCol.append($img))
                           
                       ))))).appendTo("#mainContent");
           
       
                       $(`#pop${key}`).on("click", function() {
                           // $('#imagepreview').attr('src', $('#imageresource').attr('src')); // here asign the image to the modal when the user click the enlarge link
                           $(`#imagemodal${key}`).modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
                        });

               studentNum ++;

               
          
       });

           $("#student-num").append(studentNum);
       
   }).fail(function(){
       console.log("An error has occurred.");
   });

  

 });


