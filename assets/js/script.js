const listMovies = [{
        name: "Kin (2018)",
        img: "./assets/img/kin.jpg",
        genre: "Action",
        rating: "5.8",
        desc: "Co-directors Jonathan Baker and Josh Baker's sci-fi action thriller features James Franco, Zoe Kravitz, and Dennis Quaid. A young boy (Myles Truitt) finds a powerful otherworldly weapon, which he uses to save his older adoptive brother (Jack Reynor) from a crew of thugs. Before long, the two of them are also pursued by federal agents and mysterious mercenaries aiming to reclaim their asset.",
        link: "https://www.imdb.com/title/tt6017942/?ref_=nv_sr_srsg_0"
    },
    {
        name: "Peninsula (2020)",
        img: "./assets/img/peninsula.jpg",
        genre: "Action, Horror, Thriller",
        rating: "5.5",
        desc: "Peninsula takes place four years after the zombie outbreak in Train to Busan. The Korean peninsula is devastated and Jung Seok, a former soldier who has managed to escape overseas, is given a mission to go back and unexpectedly meets survivors.",
        link: "https://www.imdb.com/title/tt8850222/?ref_=nv_sr_srsg_0"
    },
    {
        name: "Inception (2010)",
        img: "./assets/img/inception.jpg",
        genre: "Action, Adventure, Sci-Fi",
        rating: "8.8",
        desc: "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible, inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea, but to plant one. If they succeed, it could be the perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming.",
        link: "https://www.imdb.com/title/tt1375666/?ref_=nv_sr_srsg_0"
    },
    {
        name: "Iron Man 3 (2013)",
        img: "./assets/img/ironman3.jpg",
        genre: "Action, Adventure, Sci-Fi",
        rating: "7.1",
        desc: "Marvel's Iron Man 3 pits brash-but-brilliant industrialist Tony Stark/Iron Man against an enemy whose reach knows no bounds. When Stark finds his personal world destroyed at his enemy's hands, he embarks on a harrowing quest to find those responsible. This journey, at every turn, will test his mettle. With his back against the wall, Stark is left to survive by his own devices, relying on his ingenuity and instincts to protect those closest to him. As he fights his way back, Stark discovers the answer to the question that has secretly haunted him: does the man make the suit or does the suit make the man?",
        link: "https://www.imdb.com/title/tt1300854/?ref_=nv_sr_srsg_0"
    },
    {
        name: "Venom (2018)",
        img: "./assets/img/venom.jpg",
        genre: "Action, Adventure, Sci-Fi",
        rating: "6.7",
        desc: "After a faulty interview with the Life Foundation ruins his career, former reporter Eddie Brock's life is in pieces. Six months later, he comes across the Life Foundation again, and he comes into contact with an alien symbiote and becomes Venom, a parasitic antihero.",
        link: "https://www.imdb.com/title/tt1270797/?ref_=nv_sr_srsg_3"
    },
    {
        name: "Aquaman",
        img: "./assets/img/aquaman.jpg",
        genre: "Action, Adventure, Fantasy",
        rating: "6.9",
        desc: "Born upon the shores of the surface world, Arthur Curry (Jason Momoa) discovers that he is only half human, with the other half of his blood being of Atlanteean descent, thus making him the rightful heir to the throne of the undersea kingdom of Atlantis. However, Arthur learns that Atlantis is being ruled by his malicious half-brother Orm (Patrick Wilson), who seeks to unite the seven underwater kingdoms and wage war upon the surface. With aid from Nuidis Vulko (Willem Dafoe) and the gorgeous Mera (Amber Heard), Arthur must discover the full potential of his true destiny and become Aquaman in order to save Atlantis and the surface from Orm's evil plot.",
        link: "https://www.imdb.com/title/tt1477834/?ref_=nv_sr_srsg_0"
    },
    {
        name: "John Wick Chapter 3 - Parabellum (2019)",
        img: "./assets/img/johnwick3.jpg",
        genre: "Action, Crime, Thriller",
        rating: "7.4",
        desc: "In this third installment of the adrenaline-fueled action franchise, skilled assassin John Wick (Keanu Reeves) returns with a $14 million price tag on his head and an army of bounty-hunting killers on his trail. After killing a member of the shadowy international assassin's guild, the High Table, John Wick is excommunicado, but the world's most ruthless hit men and women await his every turn.",
        link: "https://www.imdb.com/title/tt6146586/?ref_=nv_sr_srsg_0"
    },
    {
        name: "Fantastic Beast (2016)",
        img: "./assets/img/fantasticbeast.jpg",
        genre: "Action, Family, Fantasy",
        rating: "7.3",
        desc: "In mid-1920s New York, Newt Scamander, a British young activist wizard, arrives in the city, holding a mysterious leather suitcase that shelters diverse and magical creatures that exist among us. Amid an already fragile equilibrium of secrecy, and the increasing disasters ascribed to the dark wizard, Gellert Grindelwald, Newt's precious suitcase goes missing, and to make matters worse, several creatures manage to escape. Before long, this unforeseen complication catches Senior Auror Percival Graves' attention who targets Newt, against the backdrop of an invisible, devastating, and utterly unpredictable menace that still wreaks havoc on 5th Avenue. In the end, is there a hidden agenda behind Graves' intentions? Moreover, what will happen to the remaining fantastic beasts that are still on the loose?",
        link: "https://www.imdb.com/title/tt3183660/?ref_=nv_sr_srsg_4"
    },
    {
        name: "Rogue One: A Star Wars Story (2016)",
        img: "./assets/img/rogueone.jpg",
        genre: "Action, Adventure, Sci-Fi",
        rating: "7.8",
        desc: "All looks lost for the Rebellion against the Empire as they learn of the existence of a new super weapon, the Death Star. Once a possible weakness in its construction is uncovered, the Rebel Alliance must set out on a desperate mission to steal the plans for the Death Star. The future of the entire galaxy now rests upon its success",
        link: "https://www.imdb.com/title/tt3748528/?ref_=nv_sr_srsg_1"
    },
    {
        name: "Star Trek: Into Darkness (2013)",
        img: "./assets/img/intodarkness.jpg",
        genre: "Action, Adventure, Sci-Fi",
        rating: "7.7",
        desc: "When the USS Enterprise crew is called back home, they find an unstoppable force of terror from within their own organization has detonated the fleet and everything it stands for, leaving our world in a state of crisis. With a personal score to settle, Captain Kirk leads a manhunt to a war-zone world to capture a one-man weapon of mass destruction. As our space heroes are propelled into an epic chess game of life and death, love will be challenged, friendships will be torn apart, and sacrifices must be made for the only family Kirk has left: his crew.",
        link: "https://www.imdb.com/title/tt1408101/?ref_=nv_sr_srsg_0"
    }
];

var movieModal = document.getElementById("movieModal");
var span = document.getElementsByClassName("close-modal")[0];

function kin(movieModal) {
    let kin = listMovies[0];
    document.getElementById("poster").src = kin.img;
    document.getElementById("title").innerHTML = kin.name;
    document.getElementById("genre").innerHTML = kin.genre;
    document.getElementById("rating-num").innerHTML = "Rating: "+ kin.rating + "/10";
    document.getElementById("movie-desc").innerHTML = kin.desc;
    document.getElementById("imdb-page").href = kin.link;
    movieModal.style.display = "block";
}

function peninsula(movieModal) {
    let peninsula = listMovies[1];
    document.getElementById("poster").src = peninsula.img;
    document.getElementById("title").innerHTML = peninsula.name;
    document.getElementById("genre").innerHTML = peninsula.genre;
    document.getElementById("rating-num").innerHTML = "Rating: "+ peninsula.rating + "/10";
    document.getElementById("movie-desc").innerHTML = peninsula.desc;
    document.getElementById("imdb-page").href = peninsula.link;
    movieModal.style.display = "block";
}

function inception(movieModal) {
    let inception = listMovies[2];
    document.getElementById("poster").src = inception.img;
    document.getElementById("title").innerHTML = inception.name;
    document.getElementById("genre").innerHTML = inception.genre;
    document.getElementById("rating-num").innerHTML = "Rating: "+ inception.rating + "/10";
    document.getElementById("movie-desc").innerHTML = inception.desc;
    document.getElementById("imdb-page").href = inception.link;
    movieModal.style.display = "block";
}

function ironman(movieModal) {
    let ironman = listMovies[3];
    document.getElementById("poster").src = ironman.img;
    document.getElementById("title").innerHTML = ironman.name;
    document.getElementById("genre").innerHTML = ironman.genre;
    document.getElementById("rating-num").innerHTML = "Rating: "+ ironman.rating + "/10";
    document.getElementById("movie-desc").innerHTML = ironman.desc;
    document.getElementById("imdb-page").href = ironman.link;
    movieModal.style.display = "block";
}

function venom(movieModal) {
    let venom = listMovies[4];
    document.getElementById("poster").src = venom.img;
    document.getElementById("title").innerHTML = venom.name;
    document.getElementById("genre").innerHTML = venom.genre;
    document.getElementById("rating-num").innerHTML = "Rating: "+ venom.rating + "/10";
    document.getElementById("movie-desc").innerHTML = venom.desc;
    document.getElementById("imdb-page").href = venom.link;
    movieModal.style.display = "block";
}

function aquaman(movieModal) {
    let aquaman = listMovies[5];
    document.getElementById("poster").src = aquaman.img;
    document.getElementById("title").innerHTML = aquaman.name;
    document.getElementById("genre").innerHTML = aquaman.genre;
    document.getElementById("rating-num").innerHTML = "Rating: "+ aquaman.rating + "/10";
    document.getElementById("movie-desc").innerHTML = aquaman.desc;
    document.getElementById("imdb-page").href = aquaman.link;
    movieModal.style.display = "block";
}

function johnwick(movieModal) {
    let johnwick = listMovies[6];
    document.getElementById("poster").src = johnwick.img;
    document.getElementById("title").innerHTML = johnwick.name;
    document.getElementById("genre").innerHTML = johnwick.genre;
    document.getElementById("rating-num").innerHTML = "Rating: "+ johnwick.rating + "/10";
    document.getElementById("movie-desc").innerHTML = johnwick.desc;
    document.getElementById("imdb-page").href = johnwick.link;
    movieModal.style.display = "block";
}

function fantasticbeast(movieModal) {
    let fantasticbeast = listMovies[7];
    document.getElementById("poster").src = fantasticbeast.img;
    document.getElementById("title").innerHTML = fantasticbeast.name;
    document.getElementById("genre").innerHTML = fantasticbeast.genre;
    document.getElementById("rating-num").innerHTML = "Rating: "+ fantasticbeast.rating + "/10";
    document.getElementById("movie-desc").innerHTML = fantasticbeast.desc;
    document.getElementById("imdb-page").href = fantasticbeast.link;
    movieModal.style.display = "block";
}

function rogueone(movieModal) {
    let rogueone = listMovies[8];
    document.getElementById("poster").src = rogueone.img;
    document.getElementById("title").innerHTML = rogueone.name;
    document.getElementById("genre").innerHTML = rogueone.genre;
    document.getElementById("rating-num").innerHTML = "Rating: "+ rogueone.rating + "/10";
    document.getElementById("movie-desc").innerHTML = rogueone.desc;
    document.getElementById("imdb-page").href = rogueone.link;
    movieModal.style.display = "block";
}

function intodarkness(movieModal) {
    let intodarkness = listMovies[9];
    document.getElementById("poster").src = intodarkness.img;
    document.getElementById("title").innerHTML = intodarkness.name;
    document.getElementById("genre").innerHTML = intodarkness.genre;
    document.getElementById("rating-num").innerHTML = "Rating: "+ intodarkness.rating + "/10";
    document.getElementById("movie-desc").innerHTML = intodarkness.desc;
    document.getElementById("imdb-page").href = intodarkness.link;
    movieModal.style.display = "block";
}

span.onclick = function() {
  movieModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == movieModal) {
    movieModal.style.display = "none";
  }
}