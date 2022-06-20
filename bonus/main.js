// BONUS
// 1. Formattare le date in formato italiano (gg/mm/aaaa)
// 2. Gestire l'assenza dell'immagine profilo con un elemento
// di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
// 3. Al click su un pulsante "Mi Piace" di un post, se abbiamo
// già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.

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

    const splitDate = postDate.split("/");
    // !DEBUG!
    // console.log(splitDate);

    const newDate = `${splitDate[1]}/${splitDate[0]}/${splitDate[2]}`;
    // !DEBUG!
    // console.log(newDate);

    const splitAuthorName = author.split(" ");
    // !DEBUG!
    // console.log(splitAuthorName);

    const firsLettersName = `${splitAuthorName[0][0]}${splitAuthorName[1][0]}`;
    // !DEBUG!
    // console.log(firsLettersName);

    const postToDraw = `
    <div class="post">
        <div class="post__header">
            <div class="post-meta">
                <div class="post-meta__icon">
                    ${isProfileImgNull(firsLettersName, authorPicture, author)}       
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${author}</div>
                    <div class="post-meta__time">${newDate}</div>
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

// *dichiaro una funzione che inserisce nel template generato nella funzione "printAllPosts"*
// *una stringa specifica in base al valore della "key" "authorPicture" di ogni singolo*
// *"object" presente nell'array "postArray"*
function isProfileImgNull(newName, authorImg, name) {
    const profileImgNull = (authorImg === null) ? `<span class="profile-pic-default">${newName}</span>` : `<img class="profile-pic" src="${authorImg}" alt="${name}">`;

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
        authorPicture: null,
        postDate: "07/03/2022",
        postText: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        postPicture: "https://unsplash.it/600/300?image=171",
        likes: 33,
    },
    {
        id: 2,
        author: "Edoardo Borrello",
        authorPicture: "https://unsplash.it/300/300?image=30",
        postDate: "09/22/2021",
        postText: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        postPicture: "https://unsplash.it/600/300?image=221",
        likes: 945,
    },
    {
        id: 3,
        author: "Davide Pisani",
        authorPicture: "https://unsplash.it/300/300?image=50",
        postDate: "12/11/2021",
        postText: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        postPicture: null,
        likes: 20,
    },
    {
        id: 4,
        author: "Lucio Ghedina",
        authorPicture: null,
        postDate: "01/30/2022",
        postText: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        postPicture: "https://unsplash.it/600/300?image=395",
        likes: 1448,
    },
    {
        id: 5,
        author: "Riccardo Binotto",
        authorPicture: "https://unsplash.it/300/300?image=10",
        postDate: "11/17/2021",
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
// console.log(allBtn);

const allLikeCounter = document.querySelectorAll(".js-likes-counter");
// !DEBUG!
// console.log(allLikeCounter);

for(let i = 0; i < allBtn.length; i++) {
    const thisBtn = allBtn[i];
    // !DEBUG!
    // console.log(thisBtn);

    const thisCounter = allLikeCounter[i];
    // !DEBUG!
    // console.log(thisCounter);

    let thisLikesNumber = parseInt(thisCounter.innerHTML);
    // !DEBUG!
    // console.log(thisLikesNumber);

    thisBtn.addEventListener("click", function(event) {
        event.preventDefault();

        if(!this.classList.contains("like-button--liked")) {
            this.classList.add("like-button--liked");
            thisLikesNumber++;
            thisCounter.innerHTML = thisLikesNumber;
        } else {
            this.classList.remove("like-button--liked");
            thisLikesNumber--;
            thisCounter.innerHTML = thisLikesNumber;
        }
    });
}