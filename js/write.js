$("#click").on("click", () => {
    $(".menu").slideToggle(400);
})


let cartQuantity = 0;
    {
        function cartQuan(){
            console.log(`Cart quantity: ${cartQuantity}`);
        };
        function plusCart(){
            /* they are same 
            same as--cartQuantity = cartQuantity + 1;
            same as--cartQuantity += 1;
            same as--cartQuantity++;
            */
            cartQuantity ++;
        document.getElementById('show').innerHTML = `Quantity is: ${cartQuantity}`;
        };
        function minusCart(){
            cartQuantity --;
            document.getElementById('show').innerHTML = `Quantity is: ${cartQuantity}`;
        }
        function add2cart(){
            cartQuantity += 2;
            document.getElementById('show').innerHTML = `Quantity is: ${cartQuantity}`;
        };
        function minus2cart(){
            cartQuantity -=2;
            document.getElementById('show').innerHTML = `Quantity is: ${cartQuantity}`;
        }
        function add4cart(){
            cartQuantity += 4;
            document.getElementById('show').innerHTML = `Quantity is: ${cartQuantity}`;
        };
        function minus4cart(){
            cartQuantity -= 4;
            document.getElementById('show').innerHTML = `Quantity is: ${cartQuantity}`;
        };
        function ressetAll(){
            cartQuantity = 0;
            document.getElementById('show').innerHTML = `Quantity is: ${cartQuantity}`;
        };
        function addNumber(){
            cartQuantity += 5;
            document.getElementById('show').innerHTML = `Quantity is: ${cartQuantity}`;
        };
        function minusNumber(){
            cartQuantity -= 5;
            document.getElementById('show').innerHTML = `Quantity is: ${cartQuantity}`;
        }
        function delete1(){
            cartQuantity = 0;
            document.getElementById('show').innerHTML = `Quantity is: ${cartQuantity}`;
        };
    }


    let num = prompt('Enter your result');
    let grade;
    if(num >= 80 && num <=100){
        grade = 'A+';
    } else if(num >= 70 && num <=79){
        grade = 'A';
    } else if(num >= 60 && num <=69){
        grade = 'A-';
    } else if(num >= 50 && num <=59){
        grade = 'B';
    } else if(num >= 40 && num <=49){
        grade = 'C';
    } else if(num >= 33 && num <=39){
        grade = 'D';
    } else{
        console.log('Fail');
    }
    console.log(grade);

    
        let age =document.getElementById('input');{
            function displayNone(){
                document.getElementById('d_none').style.display ='none';
                document.getElementById('input').style.display ='block';
                document.getElementById('d_block').style.display = 'block';
        }
        function displayBlock(){
            document.getElementById('input').style.display ='none';
            document.getElementById('d_none').style.display ='block';
            document.getElementById('d_block').style.display ='none';
        }
    }
    
    let score = 0;
    for(score; score <= 100; score++){
        if(score % 2 === 0){ // this will give the even number in 100 because, our condition is=  if(score % 2 === 0) and if we want the odd number then we will use the condition= if(score % 2 !== 0) 
            console.log(`score is: ${score}`);

        };
    }
    
    

    /*let gameNumber = 50;
    let finalNumber = prompt('gues the number:');
    while(gameNumber != finalNumber){
        finalNumber = prompt('you guessed wrong number, try again:');
    }
    console.log('Congratulations! You guessed the right number');*/
    let sum = 'this is a string';
    console.log(sum);

    function textChange() {
        document.getElementById('tc').innerHTML = 'My World';
    }
    function textRechange() {
        document.getElementById('tc').innerHTML = 'Hello World';
    }
    function textBig() {
        document.getElementById('typo').style.fontSize = '30px';
    }
    function textSmall() {
        document.getElementById('typo').style.fontSize = '16px';
    }
    function textPaint1() {
        document.getElementById('decoration').style.color = 'red';
        document.getElementById('decoration').style.fontSize = '30px';
    }
    function textPaint2() {
        document.getElementById('decoration').style.color = 'green';
        document.getElementById('decoration').style.fontSize = '25px';
    }
    
    
    
    function myFunction() {
        window.alert('Please log in');
    }
    function clickHappy() {
        document.getElementById('emoji').src = 'image/happy.png';
    }
    function clickSad() {
        document.getElementById('emoji').src = 'image/sad.png';
    }
    function clickCry() {
        document.getElementById('emoji').src = 'image/cry.png';
    }
    function clickAngry() {
        document.getElementById('emoji').src = 'image/angry.png';
    }
    function clickLove() {
        document.getElementById('emoji').src = 'image/love.png';
    }
    
    function stop() {
        document.getElementById('stop').style.display = 'block';
        document.getElementById('rotate').style.display = 'none';
    }
    function rotate() {
        document.getElementById('rotate').style.display = 'block';
        document.getElementById('stop').style.display = 'none';
    }
    
    function getNumbers() {
        let theNumber = 0;
        for (theNumber; theNumber <= 100; theNumber++) {
            if (theNumber % 2 !== 0) {
                document.getElementById('numbers').innerHTML = `The even number is: ${theNumber}`;
                //console.log(`The odd number is: ${theNumber}`);
            }
        }
    }
    function MessagePopUp() {
        let message = prompt('Enter the odd number:');
        if (message % 2 !== 0) {
            document.getElementById('showMessage').innerHTML = 'You entered the odd number, Thank you\!';
        } else {
            message = prompt('You entered the even number, please try again\!');
            document.getElementById('showMessage').innerHTML = 'You entered the even number, please try again\!';
        }
    };
    
    
    
    //======================jq========================for testing
    $(document).ready(function(){
        $('#jsbtn').click(function(){
            alert('welcome');
        });
    });
    $(document).ready(function () {
        $('.jqbtn').on('click', function () {
            alert('welcome to our page');
        });
    });
    let firstBtn = document.createElement('button');
firstBtn.innerText = 'Click me!';
firstBtn.style.backgroundColor = 'red';
firstBtn.style.color = 'white';

document.querySelector('body').prepend(firstBtn);

//dark mode and night mode
let mode = document.querySelector('#mode');
let curmod = 'light';
mode.addEventListener('click', () => {
    if(curmod === 'light'){
        curmod = 'dark';
        document.querySelector('body').style.backgroundColor = 'black';
        document.querySelector('body').style.color = 'white';
        document.querySelector('#mode').innerHTML = 'Night';
    } else {
        curmod = 'light';
        document.querySelector('body').style.backgroundColor = 'white';
        document.querySelector('body').style.color = 'black';
        document.querySelector('#mode').innerHTML = 'Day';
    };
});

//Toggle dropdown
let dropDown = document.querySelector('#toggle');
let menuItems = document.querySelector('#menu');
let show = 0;
dropDown.addEventListener('click', () => {
    if(show === 0) {
        show-= 1;
        menuItems.style.display = 'block';
        console.log(show);
    } else {
        show+= 1;
        menuItems.style.display = 'none';
        console.log(show);
    };
});


let loginBtn = document.querySelector('#sign');
let loginItem = document.querySelector('#loginform');
let bodyTouch = document.querySelector('body');
let toShow = 0;
loginBtn.addEventListener('click', () => {
    if(toShow === 0) {
        toShow-= 1;
        loginItem.style.display = 'block';
        loginItem.animate();
    } else {
        toShow+=1;
        loginItem.style.display = 'none';
    };
});
