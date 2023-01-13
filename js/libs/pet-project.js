class Card {
    constructor(img, name, description, link) {
        this.img = img;
        this.name = name;
        this.description = description;
        this.link = link;
    }

    createHtmlCard(){
        return '<div class="animal-cards__item"> \
            <img class="animal-cards__svg" src="' + this.img + '" alt="rabbit"> \
            <h2 class="animal-cards__h2">' + this.name + '</h2> \
            <div class="animal-cards__line"></div> \
            <p class="animal-cards__text">' + this.description + '</p> \
            <span class="animal-cards__arrow"><a href="' + this.link +'">Learn more</a><img src="img/arrow.svg" alt=""></span></div>'
    }
}

const cards = [
    new Card('img/rabbit.svg','Rabbit','We will look after your favorite ball of fur.','#'),
    new Card('img/cat.svg','Cat','Your cat will purr with pleasure in our hands.','#'),
    new Card('img/koala.svg','Koala','Your fluffy pets will stay healthy.','#'),
    new Card('img/lion.svg','Lion','The inhabitants of your cells will be happy.','#'),
    new Card('img/bird.svg','Bird','We will feed your birds, clean the cage, etc.','#'),
    new Card('img/husky-dog.svg','Dog','Tasty food, running, and playing with your dog.','#')
]

function generateCards() {
    const animalCardWrapperClass = '.animal-cards__wrapper';
    const animalCardWrapperTag = document.querySelector(animalCardWrapperClass);

    for(let i = 0; i < cards.length; i++) {
        animalCardWrapperTag.innerHTML += cards[i].createHtmlCard();
    }
}

generateCards();

class CardOurServices{
    constructor(img, name, description, price) {
        this.img = img;
        this.name = name;
        this.description = description;
        this.price = price;
    }

    createHtmlCardOurServices(){
        return '<div class="our-services__item"> \
        <img class="our-services__img" src="' + this.img + '" alt="parrot"> \
        <h3 class="our-services__h3">' + this.name + '</h3> \
        <h4 class="our-services__h4">' + this.description +'</h4> \
        <h5 class="our-services__h5">' + this.price +'</h5></div>'
    }
}

const cardsOurServices = [
    new CardOurServices('img/vet-consultations.png','Vet consultations','If you have any questions or issues with your pet, we will be happy to advise you. ','from $25/session'),
    new CardOurServices('img/pet-sitting.png','Pet sittings','We will sit with your pet and even stay overnight if needed.','from $15/hour'),
    new CardOurServices('img/dog-training.png','Dog training','Professional dog handlers can train dogs of any breed and consult their owners.','from $30/hour'),
    new CardOurServices('img/dog-walking.png','Dog walking','We can take your dog for a walk on schedule and bring it back home.','from $10/hour')
]

function generateCardsOurServices() {
    const ourServicesWrapperClass = '.our-services__card__wrapper';
    const ourServicesWrapperTag = document.querySelector(ourServicesWrapperClass);

    for(let i = 0; i < cardsOurServices.length; i++) {
        ourServicesWrapperTag.innerHTML += cardsOurServices[i].createHtmlCardOurServices();
    }
}

generateCardsOurServices();

class CardOurClients {
    constructor(img, name, description, text) {
        this.img = img;
        this.name = name;
        this.description = description;
        this.text = text;
    }

    createHtmlCardOurClients() {
        return '<div class="our-clients__about__us__item"> \
        <img class="our-clients__about__us__img" src="' + this.img + '" alt=""> \
        <h2 class="our-clients__about__us__h2">' + this.name + '</h2> \
        <div class="our-clients__about__us__line"></div> \
        <h3 class="our-clients__about__us__h3">' + this.description + '</h3> \
        <h4 class="our-clients__about__us__h4">' + this.text + '</h4></div>'
    }
}

const cardOurClients = [
    new CardOurClients('img/cat-our-clients.png','Milo','"I have to take medications regularly. When my parents decided to go on a vacation, they were worried about my feeding. They called a pet sitter Mary, and we liked each other so much!"','December 12, 2022'),
    new CardOurClients('img/perrot-our-clients.png','Jokie','“My parents were worried about my health as I didn`t want to eat at all. A vet at Best.Pet helped them a lot, explained the peculiarities of parrots feeding, and offered a special meal plan. Yummy!"','October 28, 2021'),
    new CardOurClients('img/dog-our-clients.png','Axel','“When Mummy traveled abroad, she couldn`t take me with her. So, she called Best.Pet, and Alina came to care for me for 2 weeks. I really liked Alina; we had so much fun and enjoyed long walks."','March 03, 2021')
]

function generateCardsOurClients() {
    const ourClientsClass = '.our-clients__about__us';
    const ourClientsTag = document.querySelector(ourClientsClass);

    for(let i = 0; i < cardOurClients.length; i++) {
        ourClientsTag.innerHTML += cardOurClients[i].createHtmlCardOurClients();
    }
}

generateCardsOurClients();