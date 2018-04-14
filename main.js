var testimonials = [
  {
    image: "assets/testimonial.png",
    school_name: "Summer Fields School, Gurgaon",
    name: "Mrs. Manisha Gupta, PGT English / Author",
    content:
      "Magikslate is an ideally structured app designed to encourage, facilitate and develop better communication links between parents and teachers so as to constantly improve not just the academic standards, but students&apos; motivation, behavior and attendance too. It empowers both parents and teachers by giving them better control and up-to-date knowledge of their children&apos;s needs and requirements. All put together, Magikslate is a win-win tool for all teachers, parents and also pupils!"
  }
];

var newHTML = [];
$.each(testimonials, function(index, value) {
  newHTML.push(
    "<div class='mySlides'><table><tr> <td rowspan='2'> <img src=" +
      value.image +
      " class='testimonial-icon'></td><td ><b class='marginleft'>" +
      value.school_name +
      "</b><br/><small class='main-color marginleft'>" +
      value.name +
      "</small></td></tr><tr><td></td></tr></table><div class='testimonial-content'>" +
      value.content +
      "</div></div>"
  );
});
$(".testimonials").html(newHTML.join(""));
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// form handler
$("#gform").submit(function(event) {
  // Stop the browser from submitting the form.
  console.log();
  event.preventDefault();
  var Name = $("#Name").val();
  var Email = $("#Email").val();
  var Mobile = $("#Mobile").val();
  var School = $("#School").val();
  var obj = {
    Name: Name,
    Email: Email,
    Mobile: Mobile,
    School: School
  };

  $.ajax({
    type: "POST",
    url:
      "https://script.google.com/a/magikslate.com/macros/s/AKfycbz4NwiiK4wxsd0dk8C0AALoXcop_XZoq2GaJpN_C6DhrgWzRHs/exec",
    data: JSON.stringify(obj),
    success: function(result) {
      console.log(success);
      $("#Name").val("");
      $("#Email").val("");
      $("#Mobile").val("");
      $("#School").val("");

      var success =
        "<p class='thanks-for-contact'>" +
        "Thanks, We Will Get In Touch With You Soon!" +
        "</p>";

      $("#thanks-message").empty();
      $("#thanks-message").append(success);
    },
    error: function(error) {
      console.log(error);
      $("#Name").val("");
      $("#Email").val("");
      $("#Mobile").val("");
      $("#School").val("");

      var success =
        "<p class='thanks-for-contact'>" +
        "Error Requesting Demo. Please Try Again! " +
        "</p>";

      $("#thanks-message").empty();
      $("#thanks-message").append(success);
    }
  });
});
