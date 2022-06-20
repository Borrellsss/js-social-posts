// Descrizione:
// Ricreiamo un feed social aggiungendo al
// layout di base fornito, il nostro script JS in cui:
// Milestone 1 - Creiamo il nostro array di oggetti
// che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie
// per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano (mm-gg-yyyy),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.
// Non è necessario creare date casuali
// Per le immagini va bene utilizzare qualsiasi servizio
// di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
// Milestone 2 - Prendendo come riferimento il layout di esempio
// presente nell'html, stampiamo i post del nostro feed.
// Milestone 3 - Se clicchiamo sul tasto "Mi Piace" cambiamo
// il colore al testo del bottone e incrementiamo il counter dei likes relativo.

// *FUNCTIONS*
// *dichiaro la funzione che scorre l'array "postArray"*
// *e ne ricava ogni singolo "object" presente al suo interno*
function drawAllPosts(array) {
    for(let i = 0; i < array.length; i++) {
        thisArrayElement = array[i];
        // !DEBUG!
        // console.log(thisArrayElement);
        
        printAllPosts(thisArrayElement);
    }
}

// *dichiaro una funzione che stampa nel DOM ogni singolo post*
// *con all'interno del template le varie informazioni presenti nei singoli "objects"*
// *ottenuti con la precedente funzione*
function printAllPosts(thisPost) {
    const {id, author, authorPicture, postDate, postText, postPicture, likes} = thisPost;
    // !DEBUG!
    // console.log(id, author, authorPicture, postDate, postText, postPicture, likes);

    const postToDraw = `
    <div class="post">
        <div class="post__header">
            <div class="post-meta">
                <div class="post-meta__icon">
                    ${isProfileImgNull(authorPicture, author)}           
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${author}</div>
                    <div class="post-meta__time">${postDate}</div>
                </div>
            </div>
        </div>
        <div class="post__text">${postText}</div>
        <div class="post__image">
            ${isPostImgNull(postPicture, author)}
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="${id}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${id}" class="js-likes-counter">${likes}</b> persone
                </div>
            </div> 
        </div>
    </div>
    `;

    postsWrapper.innerHTML += postToDraw;
}

function thisLikeClick(postToDraw) {
    

}

// *dichiaro una funzione che inserisce nel template generato nella funzione "printAllPosts"*
// *una stringa specifica in base al valore della "key" "authorPicture" di ogni singolo*
// *"object" presente nell'array "postArray"*
function isProfileImgNull(profileImg, profileImgAlt) {
    const profileImgNull = (profileImg === null) ? "" : `<img class="profile-pic" src="${profileImg}" alt="${profileImgAlt}"> `;

    return profileImgNull;
}

// *dichiaro una funzione che inserisce nel template generato nella funzione "printAllPosts"*
// *una stringa specifica in base al valore della "key" "postPicture" di ogni singolo*
// *"object" presente nell'array "postArray"*
function isPostImgNull(postImg, postImgAlt) {
    const postImgNull = (postImg === null) ? "" : `<img src="${postImg}" alt="${postImgAlt} Picture">`;

    return postImgNull;
}

// *VARIABLES*
// *arrays*
// *dichiaro un array di "objects"*
const postArray = [
    {
        id: 1,
        author: "Lorenzo Veropalumbo",
        authorPicture: "https://unsplash.it/300/300?image=14",
        postDate: "03/07/2022",
        postText: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        postPicture: "https://unsplash.it/600/300?image=171",
        likes: 33,
    },
    {
        id: 2,
        author: "Edoardo Borrello",
        authorPicture: "https://unsplash.it/300/300?image=30",
        postDate: "22/09/2021",
        postText: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        postPicture: "https://unsplash.it/600/300?image=221",
        likes: 945,
    },
    {
        id: 3,
        author: "Davide Pisani",
        authorPicture: "https://unsplash.it/300/300?image=50",
        postDate: "11/12/2021",
        postText: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        postPicture: null,
        likes: 20,
    },
    {
        id: 4,
        author: "Lucio Ghedina",
        authorPicture: "https://unsplash.it/300/300?image=44",
        postDate: "30/01/2022",
        postText: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        postPicture: "https://unsplash.it/600/300?image=395",
        likes: 1448,
    },
    {
        id: 5,
        author: "Riccardo Binotto",
        authorPicture: "https://unsplash.it/300/300?image=10",
        postDate: "17/11/2021",
        postText: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        postPicture: null,
        likes: 1,
    }
];

// *DOM elements*
const postsWrapper = document.getElementById("container");

// *LOGICA*
drawAllPosts(postArray);

const allBtn = document.querySelectorAll(".js-like-button");
// !DEBUG!
console.log(allBtn);

const allLikeCounter = document.querySelectorAll(".js-likes-counter");
// !DEBUG!
console.log(allLikeCounter);

for(let i = 0; i < allBtn.length; i++) {
    const thisBtn = allBtn[i];
    console.log(thisBtn);

    const thisCounter = allLikeCounter[i];
    console.log(thisCounter);

    let thisLikesNumber = parseInt(thisCounter.innerHTML);

    thisBtn.addEventListener("click", function(event) {
        event.preventDefault();

        if(!this.classList.contains("like-button--liked")) {
            this.classList.add("like-button--liked");

            thisLikesNumber++;

            thisCounter.innerHTML = thisLikesNumber;
        }
    });
}