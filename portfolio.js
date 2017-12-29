$( document ).ready(function() {
    var canvas = document.getElementById("demoCanvas");

    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
            canvas.width = window.innerWidth;
    }
    resizeCanvas();
    });   
      function init() {
        var stage = new createjs.Stage("demoCanvas");
        var tweens = [];
        for(var i=0; i<=200; i++) {
            var circle = new createjs.Shape();  
            if(i%2==0){
                circle.graphics.beginFill("#FF5733").drawCircle(0, 0, 10);
            } else {
                circle.graphics.beginFill("#0FEDF1").drawCircle(0, 0, 10);
            }
            circle.graphics.endFill();
			circle.x = Math.random() * 1700;
            var tween = createjs.Tween.get(circle).to({y:490}, (0.5 + i * 0.04) * 1500, createjs.Ease.bounceOut)
			tweens.push(tween);
			stage.addChild(circle);
        }

       //createjs.Tween.get(tweens, {loop: false})
         // .to({y:500}, 5000, createjs.Ease.bounceOut);
        //createjs.Ticker.setFPS(60); // First, set the FPS (how many times you want the stage to refresh per second).
        createjs.Ticker.addEventListener("tick", stage); 
}

var mobile_nav = document.getElementById("myTopnav"),
    mobile_menu = document.getElementsByClassName(".menu_items"),
    menu_icon = document.getElementById("open"),
    close_icon= document.getElementById("close"),   
    row1 =  document.querySelector(".row1"),
    row2 =  document.querySelector(".row2"),
    row3 =  document.querySelector(".row3"),
    aboutme_pic = document.querySelector(".csuf-image"),
    q= document.querySelector(".in-view"),
    bar = document.querySelector(".progress div"),
    card = document.querySelector(".cards-container"),
    slideIndex = 1,
    i,
    x = document.getElementsByClassName("card__small");

    addEventListener("scroll", function() {
        var max = document.body.scrollHeight - innerHeight;
        var percent = (pageYOffset / max) * 100;
        bar.style.width = percent + "%";
        if (percent >= 0) {
             row1.className += " in-view";
        }else {
              row1.className += " animation-element";
          }
            if (percent > 25) {
             row2.className += " in-view";
        }else {
              row2.className += " animation-element";
          }
        if (percent > 35) {
             row3.className += " in-view";
        }else {
              row3.className += " animation-element";
          }
        if (percent > 55) {
             card.className += " in-view-card";
        }else {
              card.className += " animation-card";
        }
        if (percent > 65) {
             aboutme_pic.className += " in-view1";
        }else {
              aboutme_pic.className += " animation-element1";
        }
    });

    function openNav(e) {
        document.getElementById(e).style.width = "100%";
    }

    function closeNav(e) {
        document.getElementById(e).style.width = "0%";
    }
    
    mobile_nav.addEventListener('click', function(){
        if($( window ).width() < 900) {
            mobile_nav.style.display="none";
            close_icon.style.display="none";
            menu_icon.style.display = "block";
         }
    },false);
    /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
    function myFunctionOpen() {
        menu_icon.style.display = "none";
        close_icon.style.display="block";
        mobile_nav.style.display="block";
    }
    function myFunctionClose() {
        close_icon.style.display="none";
        menu_icon.style.display = "block";
        mobile_nav.style.display="none";
    }

    function initMap() {
        var myLocation = {lat:33.877383, lng:  -117.8884364};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: myLocation,
          scrollwheel:  false
        });
        var popupContent = 'Nikunj Suresh Patel <br>';
          popupContent +='2404 Nutwood Ave<br>';
          popupContent +='Fullerton 92831';
          
        var infowindow = new google.maps.InfoWindow({
            content: popupContent
        });
        var marker = new google.maps.Marker({
          position: myLocation,
          map: map
        });
       marker.addListener('click', function(){
            infowindow.open(map,marker);
        });
      }
    
    $(document).ready(function(){

        // Add smooth scrolling to all links
        $("a").on('click', function(event) {

            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
              // Prevent default anchor click behavior
              event.preventDefault();
              var offset = 60;
              // Store hash
              var hash = this.hash;

              // Using jQuery's animate() method to add smooth page scroll
              // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
              $('html, body').animate({
                scrollTop: $(hash).offset().top - offset
              }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
              });
            } // End if
        });
    });


    showDivs(slideIndex);

    function plusDivs(n) {
      showDivs(slideIndex += n);
    }

    function showDivs(n) {
        if($( window ).width() < 500 && $(window).height()>500) {
          var i;
          if (n > x.length) {slideIndex = 1}    
          if (n < 1) {slideIndex = x.length}
          for (i = 0; i < x.length; i++) {
             x[i].style.display = "none";  
          }
          x[slideIndex-1].style.display = "flex";  
        }
    }

 
  