  const randimg = ["19 dollar fortnite card 2.gif", "3d saul.gif", "a62.jpg", "animated trump dab.gif", "best duane.gif", "big chungus fnf.gif", "big chungus.gif", "bonzibuddy-cope.gif", "borgur spin.gif", "chuck e cheese fortnite dance.gif", "clash royale heheheha.gif", "clippy would you like help.gif", "computer man rage work.gif", "connecting to the internet.gif", "crab game dance.gif", "crying amogus.gif", "dancing baby meme.gif", "dat boi.gif", "delete computer.gif", "donald trump fortnite dance.gif", "dwayne-johnson.gif", "ea sports e.gif", "error.gif", "fnaf walter.gif", "grubhub guy burger.gif", "gus.gif", "hacker.gif", "haram.gif", "have you tried bofa deez nuts.gif", "heeseung420-spongebob.gif", "hitler fortnite dance.gif", "hog rider.gif", "huell.gif", "i-forgor.gif", "joe biden fortnite dance.gif", "joe bidome.gif", "laughing crying emoji.gif", "luigi crying.gif", "luxembourg.gif", "mario rapper.gif", "megamind-megamind-meme.gif", "minecraft human animation.gif", "mlg sniper.gif", "nft ballin.gif", "obamium.gif", "pepe text.gif", "piracy ad you wouldnt download a taco.gif", "pirate computer.gif", "pirate music.gif", "rick astley sun glasses 1.gif", "rick astley sun glasses 2.gif", "rick astley together forever.gif", "ryan beckford hackerman.gif", "sanic animated.gif", "shrek fortnite dance.gif", "skeleton dance.gif", "squidward-squidward-shocked.gif", "strawberry hat frog.gif", "sully panic.gif", "the town with no name drink.gif", "the wok.gif", "trim.EEC0BEA1-FDED-465D-BD78-B3088C2C2378.gif", "ugandan knuckles running in wakanda.gif", "veggietales tomato meme.gif", "vince mcmahon money meme.gif", "walter cooking.gif", "walter white among us.gif", "walter white fortnite dance.gif", "windows errors.gif", "windows xp loading.gif", "you are an idiot.gif", "+15 social credit to -30000000.gif", "2269s05agur81.png", "275842596_634415981189687_3298042462002852675_n.jpg", "277096974_506620710941036_6734900323982926454_n.png", "278895452_5148516388518619_8706633117364453115_n.jpg", "279352800_1443231559470180_9151167944844978189_n.jpg", "28g1es0wbkr81.jpg", "5fr01b1kshr81.jpg", "7a5.jpg", "a53.jpg", "ben.jpg", "BRICK! [4.gif", "bvdfdv.jpg", "cat.gif", "d96.jpg", "eee.png", "efff.png", "err.jpg", "F4C8491A-50CC-4C76-AAE8-9365468CCD07.jpg", "Facts [.jpg", "fefe.jpg", "fixing good.jpg", "Gocrosse.jpg", "Guys I'm getting a run-time error how can I fix it.png", "Hmm.jpg", "images.jpeg", "IMG_4028ee.jpg", "Jesse wessa join the dark side .jpg", "jllmb37cqjq81.jpg", "kinda.jpg", "kjoml;.jpg", "PETER! NOO.png", "rge.gif", "rrrrrrr.png", "rtgrgr.gif", "unknown (4).png", "unknown (8).png", "unrelevant titl.jpg", "We engage in a mild amount of t.png", "weenor.gif", "What's his favorite g.jpg"];
  var displayimage = randimg[Math.floor(Math.random()*randimg.length)];
	document.getElementById('imgset').src = "images/random/" + displayimage;
define([], function() {
  'use strict';

  function init() {
    var $welcome = $('#welcome');
    var $hints = $welcome.find('.hints');
    var _interval = setInterval(next_hint, 6000);
    var _animating = false;

    function next_hint() {
      if (_animating){
        return;
      }
      _animating = true;
      var $current = $hints.children('.selected');
      $current.removeClass('visible');
      setTimeout(function() {
        $current.removeClass('selected');
        var $next = $current.next();
        if ($next.length === 0){
          $next = $hints.children().first();
        }
        $next.addClass('visible').addClass('selected');
        _animating = false;
      }, 500);
    }

  }

  return {
    init: init
  };

});
