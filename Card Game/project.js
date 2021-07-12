let cards=[
    {
        image:"https://st1.bollywoodlife.com/wp-content/uploads/2020/09/FotoJet382.jpg",
        value:1,
        status:"closed"
    },
    {
        image:"https://st1.bollywoodlife.com/wp-content/uploads/2020/09/FotoJet382.jpg",
        value:1,
        status:"closed"
    },
    {    
        image:"https://static.wikia.nocookie.net/vsbattles/images/3/37/Doraemon_renderImproved.png/revision/latest?cb=20190730170109",
        value:2,
        status:"closed"
    },
    {    
        image:"https://static.wikia.nocookie.net/vsbattles/images/3/37/Doraemon_renderImproved.png/revision/latest?cb=20190730170109",
        value:2,
        status:"closed"
    },
    
    {   image:"https://www.pngitem.com/pimgs/m/21-210120_download-chhota-bheem-png-chhota-bheem-images-hd.png",
        value:3,
        status:"closed"
    },
    {   image:"https://www.pngitem.com/pimgs/m/21-210120_download-chhota-bheem-png-chhota-bheem-images-hd.png",
        value:3,
        status:"closed"
    },
    
    {
        image:"https://static.wikia.nocookie.net/characters/images/8/80/Mickey_Mouse.jpg/revision/latest/top-crop/width/360/height/450?cb=20111110193633",
        value:4,
        status:"closed"
    },
    {
        image:"https://static.wikia.nocookie.net/characters/images/8/80/Mickey_Mouse.jpg/revision/latest/top-crop/width/360/height/450?cb=20111110193633",
        value:4,
        status:"closed"
    },
   
    {
        image:"https://cdn.business2community.com/wp-content/uploads/2014/03/winnie-winnie-the-pooh-35046137-864-1536.jpg",
        value:5,
        status:"closed"
    },
    {
        image:"https://cdn.business2community.com/wp-content/uploads/2014/03/winnie-winnie-the-pooh-35046137-864-1536.jpg",
        value:5,
        status:"closed"
    },
   
]

for(let i=cards.length-1;i>=0;i--){

    let j=Math.floor(Math.random()*(i+1));
    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
}



function displayCards(data){

    let cardsString="";

    data.forEach(function(card,index){
        cardsString+=`
            <div class="card" style="background-image:url('${card.image}')">
                <div class="overlay ${card.status}" onclick="openCards(${index})">
                </div>
            </div>     
        `;
    });

    document.getElementById('cards').innerHTML=cardsString;

}



displayCards(cards);


let cardCount=1;
let val1=null,val2=null;
let score=0;

function openCards(index){

    console.log(cards);

    cards[index].status="opened";
    if(cardCount===1){
        val1=cards[index].value;
        cardCount++;
    }
    else if(cardCount==2){
        val2=cards[index].value;

        if(val1===val2){
            score++;
            document.getElementById('score').innerText=score;

            val1=null;
            val2=null;
            cardCount=1;
        }
        else{
            alert("GAME OVER Better Luck Next Time");
            location.reload();
        }

    }

    displayCards(cards);

}