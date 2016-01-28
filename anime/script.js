var interface = $('#interface');
var button = $('.btn');
var buttonLeftPile = $('#leftPileButton');
var buttonMiddlePile = $('#middlePileButton');
var buttonRightPile = $('#rightPileButton');
button.hide();

function textFlyIn() {
    var paragraph = document.getElementById('AP-text');

    function textEffect(animationName) {
        var text = paragraph.innerHTML,
            chars = text.length,
            newText = '',
            animation = animationName,
            char,
            i;

        for (i = 0; i < chars; i += 1) {
            newText += '<i>' + text.charAt(i) + '</i>';
        }

        paragraph.innerHTML = newText;

        var wrappedChars = document.getElementsByTagName('i'),
            wrappedCharsLen = wrappedChars.length,
            j = 0;

        function addEffect() {
            setTimeout(function () {
                wrappedChars[j].className = animation;
                j += 1;
                if (j < wrappedCharsLen) {
                    addEffect();
                }
            }, 100)
        }

        addEffect();
    };

    textEffect('fly-in-out');

}; //end textFlyIn()


setTimeout(function () {
    textFlyIn()
}, 800);
$('#presents-text').delay(4300).fadeIn(3500).delay(400).fadeOut(2500);
setTimeout(function () {
    $('#ultimate-text').addClass('expandScale').show()
}, 8600);
$('#click-text').delay(12500).fadeIn(4000);


function openCurtains() {
    $(".curtain-left").animate({
        borderBottomRightRadius: 100 + "%"
    }, {
        queue: false,
        duration: 3800
    }).animate({
        height: 20 + "%"
    }, {
        queue: false,
        duration: 7000
    });
    $(".curtain-right").animate({
        borderBottomLeftRadius: 100 + "%"
    }, {
        queue: false,
        duration: 3800
    }).animate({
        height: 20 + "%"
    }, {
        queue: false,
        duration: 7000
    });
    $(".curtain-left, .curtain-right").delay(7200).fadeOut("slow");
    setTimeout(function () {
        $("#curtainsWrapper, .curtain-left, .curtain-right").remove()
    }, 7300);
}; // end openCurtain()

function beginTrick() {
    setTimeout(function () {
        $('#AP-text, #presents-text').remove()
    }, 800);
    $('#ultimate-text, #click-text').delay(5000).fadeOut(4000);
    setTimeout(function () {
        $('#ultimate-text, #click-text').remove()
    }, 9100);

    openCurtains();
    $('#interfaceWrapper').delay(7500).fadeIn(4000);
    interface.text('I am going to deal the cards out into 3 different piles. Pick any card you want and remember it.');
    Shuffle();
    makeGameDeck();
    setTimeout(function () {
        dealCards()
    }, 11500);

    if (dealCount == 0) {
        setTimeout(function () {
            interface.text('What pile is your card in?');
            button.show();
        }, 19000);
    };

    button.click(function () {
        if (dealCount == 1) {
            button.hide();
            interface.text('Now we will deal the cards out into the 3 piles again. Find your card.');
            var interfaceChange2 = setTimeout(function () {
                interface.text('Which pile is it in this time?');
                button.show();
            }, 10000);
            setTimeout(function () {
                dealCards()
            }, 1400);
        };
        if (dealCount == 2) {
            button.hide();
            interface.text('Last time. Find your card.');
            var interfaceChange3 = setTimeout(function () {
                interface.text('Which pile is your card in?');
                button.show();
            }, 10000);
            setTimeout(function () {
                dealCards()
            }, 1400);
        };
        if (dealCount == 3) {
            button.hide();
            interface.text('Your card is:');
            setTimeout(function () {
                revealPlayersCard()
            }, 1400);
        };
    });
}; //end beginTrick()





$('.card').addClass('flipped');

var dealCount = 0;
var fullDeck = $('#deck').children();
console.log('fresh deck:');
console.log(fullDeck);

function Randomize(o) {
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

function Shuffle() {
    Randomize(fullDeck);
    console.log('shuffled deck:');
    console.log(fullDeck);
    $('#deck').empty().append(fullDeck);
};

function makeGameDeck() {
    var gameDeck = $("div#deck div.card:nth-child(n+32)");
    console.log('game deck:');
    console.log(gameDeck);
    $('#deck').empty().append(gameDeck);
};



var leftCardSlide = 20;
var middleCardSlide = 40;
var rightCardSlide = 60;
var cardDrop = 4;

function dealRow() {

    var leftCard = $('div#deck div.card:nth-child(1)');
    var middleCard = $('div#deck div.card:nth-child(2)');
    var rightCard = $('div#deck div.card:nth-child(3)');

    function dealLeftCard() {
        leftCard.animate({
            left: leftCardSlide + "%",
            top: cardDrop + "%"
        }, 250);
        $("#left-pile").append(leftCard);
        setTimeout(function () {
            leftCard.removeClass("flipped")
        }, 350);
        leftPile = $('#left-pile').children();
        console.log(leftPile);
        leftCardSlide = leftCardSlide + 2;
    };

    function dealMiddleCard() {
        middleCard.animate({
            left: middleCardSlide + "%",
            top: cardDrop + "%"
        }, 500);
        $("#middle-pile").append(middleCard);
        setTimeout(function () {
            middleCard.removeClass("flipped")
        }, 600);
        middlePile = $('#middle-pile').children();
        console.log(middlePile);
        middleCardSlide = middleCardSlide + 2;
    };

    function dealRightCard() {
        rightCard.animate({
            left: rightCardSlide + "%",
            top: cardDrop + "%"
        }, 750);
        $("#right-pile").append(rightCard)
        setTimeout(function () {
            rightCard.removeClass("flipped")
        }, 850);
        rightPile = $('#right-pile').children();
        console.log(rightPile);
        rightCardSlide = rightCardSlide + 2;
    };
    dealLeftCard();
    dealMiddleCard();
    dealRightCard();
    cardDrop = cardDrop + 4;

}; // end dealRow()

function dealCards() {
    dealRow();
    setTimeout(function () {
        dealRow()
    }, 1000);
    setTimeout(function () {
        dealRow()
    }, 2000);
    setTimeout(function () {
        dealRow()
    }, 3000);
    setTimeout(function () {
        dealRow()
    }, 4000);
    setTimeout(function () {
        dealRow()
    }, 5000);
    setTimeout(function () {
        dealRow()
    }, 6000);
    dealCount++;
    console.log('Times dealt: ' + dealCount);
}; // end dealCards()

function selectPile(pile) {
    if (dealCount <= 2) {
        if (pile == "left") {
            $('#deck').append(middlePile);
            $('#deck').append(leftPile);
            $('#deck').append(rightPile);
        }; // end if left pile
        if (pile == "middle") {
            $('#deck').append(leftPile);
            $('#deck').append(middlePile);
            $('#deck').append(rightPile);
        }; // end if middle pile
        if (pile == "right") {
            $('#deck').append(leftPile);
            $('#deck').append(rightPile);
            $('#deck').append(middlePile);
        }; // end if right pile
        $('.card').animate({
            left: "0%",
            top: "0%"
        }, 550);
        setTimeout(function () {
            $('.card').addClass("flipped")
        }, 350);
        leftCardSlide = 20;
        middleCardSlide = 40;
        rightCardSlide = 60;
        cardDrop = 4;
    } //end deal count if
    else if (dealCount > 2) {
        if (pile == "left") {
            $('#deck').append(leftPile);
            $('#middle-pile, #right-pile').empty();
        }; // end if left pile
        if (pile == "middle") {
            $('#deck').append(middlePile);
            $('#left-pile, #right-pile').empty();
        }; // end if middle pile
        if (pile == "right") {
            $('#deck').append(rightPile);
            $('#middle-pile, #left-pile').empty();
        }; // end if right pile
        $('.card').animate({
            left: "0%",
            top: "0%"
        }, 550);
        setTimeout(function () {
            $('.card').addClass("flipped")
        }, 350);
    }; //end deal count greater than 2 if
}; // end selectPile()

function revealPlayersCard() {
    var playersCard = $('div#deck div.card:nth-child(4)');
    $('#middle-pile').append(playersCard);
    $('div#deck div.card').hide();
    playersCard.animate({
        left: "40%",
        top: "20%"
    }, 850);
    setTimeout(function () {
        playersCard.css({
            '-webkit-transform': 'scale(1.1)',
        })
    }, 800);
    setTimeout(function () {
        explode();
    }, 1000);
};



function explode() {
    window.requestAnimFrame = (function (callback) {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
    })();

    //create particle
    function Particle(x, y, r, a, v) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.vX = v * Math.cos(a);
        this.vY = v * Math.sin(a);
    }

    Particle.prototype = {
        constructor: Particle,
        draw: function () {
            //generate random colors
            var red = Math.floor(Math.random() * 255 + 1);
            var green = Math.floor(Math.random() * 255 + 1);
            var blue = Math.floor(Math.random() * 255 + 1);
            //get context and begin drawing
            var context = document.getElementById("canvas").getContext("2d");
            context.beginPath();
            context.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
            context.fillStyle = 'rgb(' + red + ',' + green + ',' + blue + ')';
            context.fill();
        },
        update: function () {
            //x will have minimal movement
            this.x += this.vX;
            //y velocity should be more than x
            this.y += this.vY;
        }
    };

    function Emitter() {
        this.particles = [];
    }

    Emitter.prototype = {
        constructor: Emitter,
        create: function (x, y, r, a, v) {
            this.particles.push(new Particle(x, y, r, a, v));
        },
        update: function () {
            for (i = 0; i < this.particles.length; i++) {
                this.particles[i].update();
            }
        },
        draw: function () {
            for (i = 0; i < this.particles.length; i++) {
                this.particles[i].draw();
            }
        }
    };
    var emitter = new Emitter();
    //create 100 particles

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    var wid = canvas.width = window.innerWidth;
    var hei = canvas.height = window.innerHeight;

    for (i = 0; i < 300; i++) {
        emitter.create(wid / 2, hei / 2, 2, Math.random() * 2 * Math.PI, Math.random() * 10 + 1);
    }

    function animate() {
        emitter.update();
        context.clearRect(0, 0, canvas.width, canvas.height);
        emitter.draw();
        requestAnimFrame(animate);
    }

    animate();
}; //end explode()
