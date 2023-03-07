var randomNumber1=Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=Math.floor(randomNumber1+1);

// element.setAttribute("class", "democlass");

var im=document.querySelector("img.img1");
im.setAttribute("src","images/dice"+randomNumber1+".png");



var randomNumber2=Math.random();
randomNumber2=randomNumber2*6;
randomNumber2=Math.floor(randomNumber2+1);

var im2=document.querySelector("img.img2");
im2.setAttribute("src","images/dice"+randomNumber2+".png");



if(randomNumber1==randomNumber2)
{
    var head1=document.querySelector("h1");
    head1.innerHTML="Draw!";
}else if(randomNumber1>randomNumber2)
{
    var head1=document.querySelector("h1");
    //head1.innerHTML("Player 1 Wins!");
    head1.innerHTML=" 🚩Player 1 Wins!";
}else if(randomNumber1<randomNumber2)
{
    var head1=document.querySelector("h1");
    //head1.innerHTML("Player 2 Wins!");
    head1.innerHTML="Player 2 Wins! 🚩";
}