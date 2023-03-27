$.getJSON('epilogue.json', function(data) {
  let entries = [];
  let shuffle = randomNoRepeats(entries);
  let html = '';

  $.each(data, function(i, work) {
    let entry = `<div class="cat">
      <p>${work.title}</p>
      <p>${work.content}</p>
    </div>`
    entries.push(entry);
  });

  for(i=0; i<122; i++) {
    let entry = `<div class="cat">
      <p>Untitled</p>
      <p>image</p>
    </div>`
    entries.push(entry);
  }

  for(j=0; j<7; j++) {
    let entry = `<div class="cat">
    <p>Untitled</p>
    <p>animated gif</p>
  </div>`
  entries.push(entry);
  }

  entries.push(`<div class="cat">
  <p>Untitled</p>
  <p>audio</p>
</div>`);

  for(k=0; k<entries.length; k++) {
    let entry = shuffle();
    html+= entry;
  }

  $("#catalogue").append(html);

});

function randomNoRepeats(array) {
  var copy = array.slice(0);
  return function() {
    if (copy.length < 1) { copy = array.slice(0); }
    var index = Math.floor(Math.random() * copy.length);
    var item = copy[index];
    copy.splice(index, 1);
    return item;
  };
}

var dragnavHeight, contentHeight, contentOffset, el, size;
const mq = window.matchMedia("(max-width: 768px)");

function loaded() {
  if(mq.matches) {
    el = document.getElementById('load-mobi');
    size = el.getBoundingClientRect();
    if(size.height<20) {
      setTimeout(function() {
        loaded();
      }, 250);
    } else {
      layout();
    }
  } else {
    el = document.getElementById('load-desk');
    size = el.getBoundingClientRect();
    if(size.height<20) {
      setTimeout(function() {
        loaded();
      }, 250);
    } else {
      layout();
    }
  }
  
}

function layout() {
  dragnavHeight = size.height;
  $(".dragbox, .footer, .nav-container").height(dragnavHeight);

  var contentHeight = $(window).height()-(dragnavHeight*2)-35;
  $(".content").height(contentHeight);
  var contentOffset = $(".dragbox").height() + 15;
  $(".content").css("top", contentOffset);
}

$(document).ready(function() {
  if(mq.matches) {
    mobiFunc();
  } else {
    deskFunc();
  }

}); 

$(window).resize(function() {
  setTimeout(function() {
    loaded();
  }, 100);

  if(mq.matches) {
    mobiFunc();
  } else {
    deskFunc();
  }

});

function mobiFunc() {
  $(".desk").hide();
  $(".mobi").show();
  $(".a_p").hide();
  //mobi about/programming nav—————————————————
  $(".hamburger").click(function() {
    $(".mobi.span").css("color", "#000");

    if(!$(".a_p").is(":visible")) {
        $(".flip-nav").addClass("h");
        setTimeout(function() {
          $(".risd-gd").hide();
          $(".a_p").show();
          $(".flip-nav").removeClass("h");
        }, 400);
      } else {
        $(".flip-nav").addClass("h");
        setTimeout(function() {
          $(".a_p").hide();
          $(".risd-gd").show();
          $(".flip-nav").removeClass("h");
        }, 400);
      }
      $(".programming, .about").removeClass("opened");
  });

  //mobi drawer pullout——————————————
  $("#about").click(function() {
    $(".mobi.span").css("color", "#000");
      $(".programming").removeClass("opened");
      if(!$(".about").hasClass("opened")) {
        $(this).css("color", "#BAAAFE");
        $(".about").addClass("opened");
      } else {
        $(this).css("color", "#000");
        $(".about").removeClass("opened");
      }
      $(".pullout-content").animate({scrollTop: 0}, 300);
  });

  $("#programming").click(function() {
    $(".mobi.span").css("color", "#000");
    $(".about").removeClass("opened");
    if(!$(".programming").hasClass("opened")) {
      $(this).css("color", "#BAAAFE");
      $(".programming").addClass("opened");
    } else {
      $(this).css("color", "#000");
      $(".programming").removeClass("opened");
    }
    $(".pullout-content").animate({scrollTop: 0}, 300);
  })
}

function deskFunc() {
  $(".mobi").hide();
  $(".desk").show();

    //desktop drawer pullout————————————
  $(".spine").click(function() {
    let thisPullout = $(this).closest(".drawer");
    if($(thisPullout).hasClass("opened")) {
      $(thisPullout).removeClass("opened");
    } else {
      $('.drawer').removeClass("opened");
      $(".pullout-content").animate({scrollTop: 0}, 100);
      $(thisPullout).addClass("opened");
    }
  });
}