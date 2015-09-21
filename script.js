$(document).ready(function() {
    $('.pic').hide();
    window.description = {
        liar: "The Liars' Club is the childhood memoir of American author Mary Karr. Published in 1995 and a New York Times bestseller for over a year it tells the story of Mary Karr's childhood in the 1960s in a small industrial town in Southeast Texas. The title refers to her father and his friends who would gather to drink and tell stories when not working at the oil refinery or the chemical plant",
        honey: "The House at Pooh Corner (1928) is the second volume of stories about Winnie-the-Pooh, written by A. A. Milne and illustrated by E. H. Shepard. It is notable for the introduction of the character Tigger. The title comes from a story in which Winnie-the-Pooh and Piglet build a house for Eeyore. In another story the game of Poohsticks is invented. As with the first book, the chapters are mostly in episodic format and can be read independently of each other.",
        orphan: "The Bad Beginning is the first novel of the children's novel series A Series of Unfortunate Events by Lemony Snicket. The novel tells the story of three children, Violet, Klaus, and Sunny Baudelaire, who become orphans following a fire and are sent to live with Count Olaf, who attempts to steal their inheritance.",
        shinedown: "Threat to Survival is the fifth studio album by American rock band Shinedown. It was announced on August 7, 2015 that the album would be released on September 18, 2015. On June 29, 2015 the band released the first single 'Cut the Cord'. The tenth track 'Black Cadillac' was released to YouTube for streaming and as a digital single on August 14, 2015.",
        taylor: "1989 is the fifth studio album by American singer-songwriter Taylor Swift. It was released on October 27, 2014, through Big Machine Records. Swift began preparing for the album during the same year that Red was released, and during a significant amount of media scrutiny. Over the course of the two-year songwriting period, she primarily collaborated with producers Max Martin and Shellback—Martin served as the album's executive producer alongside Swift. The album's title was inspired by the pop-music scene of the 1980s, particularly Swift's birth year.",
        lana: "Honeymoon is the fourth studio album by American singer Lana Del Rey. It was released on September 18, 2015, by UMG Recordings. The album was announced during a Billboard magazine interview that was published on January 6, 2015. Del Rey began planning the album just two months after releasing her third studio album Ultraviolence (2014). The album was co-produced by long-time collaborators Rick Nowels and Kieron Menzies.",
        furious: "Furious 7 (often stylized as Furious Seven and alternatively known as Fast Seven and Fast & Furious 7) is a 2015 American action film directed by James Wan and written by Chris Morgan. It is the seventh installment in The Fast and the Furious franchise. The film stars Vin Diesel, Paul Walker, Dwayne Johnson, Michelle Rodriguez, Tyrese Gibson, Chris Bridges, Jordana Brewster, Kurt Russell, and Jason Statham. Furious 7 follows Dominic Toretto (Diesel), Brian O'Conner (Walker) and the rest of their team, who have returned to the United States to live normal lives after securing amnesty for their past crimes in Fast & Furious 6 (2013), until Deckard Shaw (Statham), a rogue special forces assassin seeking to avenge his comatose younger brother, puts them in danger once again.",
        fury: "Mad Max: Fury Road is a 2015 post-apocalyptic action film directed and produced by George Miller, and written by Miller, Brendan McCarthy and Nico Lathouris. The fourth instalment in the Mad Max franchise, the film is set in a future desert wasteland where gasoline and water are scarce commodities. It follows Max Rockatansky (Tom Hardy), who joins forces with Imperator Furiosa (Charlize Theron) to flee from cult leader Immortan Joe (Hugh Keays-Byrne) and his army in an armoured tanker truck, which leads to a lengthy road battle. The film also features Nicholas Hoult, Rosie Huntington-Whiteley, Riley Keough, Zoë Kravitz, Abbey Lee, and Courtney Eaton."
    }

    function appendThis(element) {
        var x = element.parent().attr('id');
        $('.' + x + ' img').hide();
        $('.' + x + ".full").append('<p>'+description[x]+'</p>');
        element.hide();
        $('.' + x + ".pic").show();
    }

    function replace(element) {
        var x = element.parent().attr('id');
        element.hide();
        $('.' + x + ' .full p').remove();
        $('.' + x + ' img').show();
        $('.' + x + ' .more').show();
    }

    $('.more').on('click', function() {
        event.preventDefault();
        appendThis($(this));
    })

    $('.pic').on('click', function() {
    	event.preventDefault();
        replace($(this));
    });
    
    $('.items').on('click', function() {
        if($(this).hasClass('books')){
        	$(".section .music").slideUp();
            $(".section .movies").slideUp();
        	$('.section .books').slideDown();
        }
        else if($(this).hasClass('music')){
        	$(".section .books").slideUp();
            $(".section .movies").slideUp();
        	$('.section .music').slideDown();
        }
        else if($(this).hasClass('video')){
            $(".section .books").slideUp();
            $(".section .music").slideUp();
            $(".section .movies").slideDown();
        }
        else if($(this).hasClass('all')){
        	$(".section .books").slideDown();
        	$('.section .music').slideDown();
            $(".section .movies").slideDown();
        }
        /* window.catState = true;
        if (catState) {
            $(this).addClass('active');
            catState = false;
        } else {
            $(this).removeClass('active');
            catState = true;
        }
        */
    })


});