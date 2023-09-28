// For Name And Age

let takevalue;

let zero =0;

// Name 

let getfullname = document.getElementById('fullname');


getfullname.addEventListener('input',function(e){


    document.getElementById('paraone').textContent = 'At least 5 words\!';

    document.getElementById('paragraphs').style.display = 'block';

    // Replace all Space!

    takevalue = getfullname.value.replaceAll(' ','').length;

    if(takevalue>0){

        document.getElementById('fullname').removeAttribute('placeholder','');

        document.getElementById('one').style.display = 'block';
        
    }else{

        document.getElementById('fullname').setAttribute('placeholder','Enter Your Name');

        document.getElementById('one').style.display = 'none';



    }


    if(takevalue>4){
        document.getElementById('paraone').style.opacity = '1';
        document.getElementsByClassName('namebtn')[0].style.opacity = '1';
        document.getElementById('paragraphs').style.display = 'block';
    }else{
        document.getElementById('paraone').style.opacity = '1';
        document.getElementsByClassName('namebtn')[0].style.opacity = '0';
        document.getElementById('paragraphs').style.display = 'block';
        
    }

    if(getfullname.value.includes('  ') === true){

        document.getElementById('paraone').textContent = 'don\'t write too much space!';

        getfullname.style.color = 'red';
        
        document.getElementById('fullname').setAttribute('readonly','')

          setTimeout(function(){

            getfullname.value = getfullname.value.slice(0,-1);
            getfullname.innerText = getfullname.innerText.slice(0,-1);
            getfullname.style.color = '';
            getfullname.removeAttribute('readonly','');
            
          },3000)

    }
    

    if(getfullname.value[0] === ' '){

        getfullname.value = 'not allowed\!'
        getfullname.textContent = getfullname.value;
        getfullname.style.color = 'red';
        document.getElementById('fullname').setAttribute('readonly','')

          setTimeout(function(){
            getfullname.value = '';
            getfullname.textContent = getfullname.value;
            getfullname.style.color = '';
            getfullname.removeAttribute('readonly','');
          },3000)

    }

});

//Name Btn

document.getElementsByClassName('namebtn')[0].addEventListener('click',function(e){

    document.getElementById('paragraphs').style.display = 'none'

    document.getElementById('paraone').style.display = '0';

    document.getElementById('one').style.display = 'none';

    document.getElementById('name').style.display = 'none';
    e.preventDefault();
    document.getElementById('age').style.display = 'block';

});

// Age

let getfullage = document.getElementById('fullage');

// getfullage input

getfullage.addEventListener('input',function(e){

    if(getfullage.value.length>0){

        document.getElementById('two').style.display = 'block';

        document.getElementById('fullage').removeAttribute('placeholder','');

    }else{

        document.getElementById('two').style.display = 'none';

        document.getElementById('fullage').setAttribute('placeholder','Enter Your Age')

    }

    document.getElementById('paraone').textContent = 'Between 10 and 40!';

    document.getElementById('paraone').style.opacity = '1';

    document.getElementById('paragraphs').style.display = 'block';

    if(+getfullage.value>=10 && +getfullage.value<=40){

        document.getElementById('paraone').style.opacity = '0';

        document.getElementById('paragraphs').style.display = 'none';

        document.getElementsByClassName('prevage')[0].style.opacity = '1';

        document.getElementsByClassName('nextage')[0].style.opacity = '1'

    }else{

        document.getElementsByClassName('prevage')[0].style.opacity = '0';

        document.getElementsByClassName('nextage')[0].style.opacity = '0';

    }


});

// Prevage

document.getElementsByClassName('prevage')[0].addEventListener('click',function(e){

    document.getElementById('two').style.display = 'none';
    
    e.preventDefault();

    document.getElementById('age').style.display = 'none';

    document.getElementById('name').style.display = 'block';

})


// Next Btn

document.getElementsByClassName('nextage')[0].addEventListener('click',function(e){

    document.getElementById('age').style.display = 'none';

    document.getElementsByClassName('formdesign')[0].style.display = 'none';

    document.getElementsByClassName('pandccontainer')[0].style.display = 'block';

    e.preventDefault();

})


// Code screen

let screencode = document.getElementById('screencode');

document.getElementById('code').addEventListener('click',function(e){

    document.getElementById('code').style.display = 'none'

    setTimeout(function(){

        var getrdm = Math.ceil(Math.random()*1000);

        if(String(getrdm).length===1){

            getrdm = Math.ceil(Math.random()*10000)*1000;
    
        } else if(String(getrdm).length===2){
    
            getrdm *= 100;
    
        } else if(String(getrdm).length===3){
    
            getrdm *= 10;
            
    
        } else if(String(getrdm).length===4){
    
        }

        document.getElementById('screencode').textContent = getrdm;


    },100)

    setTimeout(function(){

        document.getElementById('screencode').textContent = '';


    },10000)

    

    setInterval(function(){

        var getrdm = Math.ceil(Math.random()*1000);

        if(String(getrdm).length===1){

            getrdm = Math.ceil(Math.random()*10000)*1000;       
    
        } else if(String(getrdm).length===2){
    
            getrdm *= 100;
    
        } else if(String(getrdm).length===3){
    
            getrdm *= 10;
    
        } else if(String(getrdm).length===4){
            
            console.log(getrdm);
    
        } else if(String(getrdm).length===5){
            
            getrdm /= 10;
    
        } else if(String(getrdm).length===6){
            
            getrdm /= 100;
    
        } else if(String(getrdm).length===7){
            
            getrdm /= 1000;
    
        } 

        document.getElementById('screencode').textContent = getrdm;

    },10000)


// Password 

let numbers = document.querySelectorAll('.numbers');

let getpass = document.querySelectorAll('.pass');

let inputBox = document.getElementById('inputbox');

    

    for(let x=0;x<numbers.length;x++){

        numbers[x].addEventListener('click',function(e){

        switch(e.target.innerText){

            case 'Delete':
                inputBox.innerText = inputBox.innerText.slice(0,-1);
                getpass[inputBox.innerText.length].style.background = 'white';
                break;

            default:
                inputBox.innerText += e.target.innerText;   
                console.log(inputBox.innerText)
                let alltasks = [];
                for(let y=0;y<inputBox.textContent.length;y++){

                    getpass[y].style.background = 'black';
                        
                }

                alltasks.push(inputBox.textContent);

                    if(String(alltasks).length===4){

                        if(inputBox.innerText===screencode.textContent){
                            
                            for(let x=0;x<getpass.length;x++){
                                getpass[x].style.display = 'none'
                            }
                           
                            document.getElementById('anione').style.display = 'block';

                            setTimeout(function(){
                                
                                document.getElementsByClassName('pandccontainer')[0].style.display = 'none';

                                document.getElementsByClassName('anithree')[0].style.display = 'block';

                                // Window
                                 window.alert('Have a great day '+getfullname.value);

                                // Pone
                                let getanithreep = document.getElementById('pone');

                                getanithreep.style.color = 'green';


                                let numbers = -1;

                                let first = ['h','he','hel','hell','hello'];
                                

                                let forfirstpara = setInterval(function(){
                                    
                                    numbers++;
                                    getanithreep.textContent = first[numbers];
                                    getanithreep.style.textTransform = 'capitalize';

                                    if(numbers>=4){
                                        
                                        getanithreep.textContent = 'hello ';
                                        numbers =-1;
                                        clearInterval(forfirstpara);

                                        // getfullname with loop
                                        let name = setInterval(function(){
                                            numbers++
                                            let span = document.createElement('span');
                                            span.appendChild(document.createTextNode(getfullname.value[numbers]));
                                            getanithreep.appendChild(span);
                                            if(span.textContent === 'undefined'){
                                                span.textContent = '';
                                                getanithreep.textContent = 'hello '+getfullname.value;

                                                clearInterval(name);

                                                // Ptwo
                                                let getptwo = document.getElementById('ptwo');

                                                getptwo.style.color = 'green';

                                                numbers = -1;

                                                let second = ['w','we','wel','welc','welco','welcom','welcome','welcome t','welcome to','welcome to m','welcome to my','welcome to my w','welcome to my we','welcome to my web','welcome to my webs','welcome to my websi','welcome to my websit','welcome to my website'];

                                                let forsecondpara = setInterval(function(){
                                                    numbers++;
                                                    getptwo.textContent = second[numbers];
                                                    getptwo.style.textTransform = 'capitalize'
                                                    if(numbers>17){
                                                    getptwo.textContent = 'welcome to my website.';

                                                    clearInterval(forsecondpara);

                                                    setTimeout(function(){


                                                        document.getElementsByClassName('anithree')[0].style.display = 'none';

                                                        // Projects 

                                                        document.getElementById('bigmaincontainer').style.display = 'block';//
                                                        document.getElementById('maincontainer').style.display = 'block';//

                                                        // Eclipse Animation
                                                        let getEclipseDiv = document.getElementById('header').children[0].getElementsByTagName('div');
                                                        let getsecondEclipseDiv = document.getElementById('secondHeader').children[0].getElementsByTagName('div');
                                                        let number = 0;

                                                        // Eclipse Name Animation
                                                        setInterval(function(){

                                                            number++;
                                                            if(number > 3){
                                                        
                                                                number = 1;
                                                        
                                                            }
                                                        
                                                            console.log(number)
                                                        
                                                            if(number === 1){
                                                        
                                                                for(let y = 0;y < getEclipseDiv.length; y++){
                                                                    getEclipseDiv[y].style.animationName = 'eclipseanitwo';
                                                                    getsecondEclipseDiv[y].style.animationName = 'eclipseanitwo';
                                                                }
                                                        
                                                            }
                                                            if(number === 2){
                                                        
                                                                for(let y = 0;y < getEclipseDiv.length; y++){
                                                                    getEclipseDiv[y].style.animationName = 'eclipseanithree';
                                                                    getsecondEclipseDiv[y].style.animationName = 'eclipseanithree';
                                                                }
                                                        
                                                            }
                                                            if(number === 3){
                                                        
                                                                for(let y = 0;y < getEclipseDiv.length; y++){
                                                                    getEclipseDiv[y].style.animationName = 'eclipseanifour';
                                                                    getsecondEclipseDiv[y].style.animationName = 'eclipseanifour';
                                                                }
                                                        
                                                            }
                                                        
                                                        },5000)//*/
                                                        

                                                    },1000)
                                                    
                
                                                    }
                                                },250)

                                            }
                                        },250)
                                       
                                    }

                                },250)


                            },900)
                            
                        } else{

                            document.getElementById('anitwo').style.display='block';
                            
                            for(let a=0;a<getpass.length;a++){

                                getpass[a].style.display = 'none';
                                inputBox.innerText = ''

                            }

                            setTimeout(function(){

                                document.getElementById('anitwo').style.display='none';

                                for(let a=0;a<getpass.length;a++){

                                    getpass[a].style.background = 'white';
                                    getpass[a].style.display = 'block';
                                    inputBox.innerText = ''
    
                                }

                               
                            },1000)

                        }

                    }

        }

    })

}


})

// letter

let sec = 10;

document.getElementById('code').addEventListener('click',function(e){

    document.getElementById('lettershow').style.opacity = '1';

    setInterval(function(){

        sec--;

        if(sec===0){
            sec = 10;
        }

        document.getElementById('sec').textContent = sec;

    },1000)

});



let navDiv = document.getElementById('header').children[1];
let getMessageBtn = document.getElementById('header').children[2];
let getHeader = document.getElementById('header');

// Message
let getBtnMessageNumber = 0;
let getSliderMenuNumber = 0;
let getRetableNumber = 0;

window.onscroll = function(){
    scrollpoint();
};
    
function scrollpoint(){
    
        let getscrolltop = document.documentElement.scrollTop;
        //console.log(getscrolltop);
    
        let getprojectheight = document.documentElement.scrollHeight;
        //console.log(getprojectheight);
    
        let getclientheight = document.documentElement.clientHeight;
        //console.log(getclientheight);
    
        var calculateheight = getprojectheight-getclientheight;
        //console.log(calculateheight);
    
        var getfinal = Math.ceil((getscrolltop*100)/calculateheight);
        //console.log(getfinal);
    
        //console.clear()
        console.log(getfinal)

        document.getElementById('retable').children[1].children[0].children[1].style.top = getfinal*4.5+'px';
    
};

// Auto Width

var autoScreenWidth = window.screen.width;
//console.log(autoScreenWidth)

var autoWidth = (window.innerWidth)-500;
console.log(autoWidth);

let getretabledivonep = document.getElementById('retable').children[0].querySelectorAll('p');
let getsecondretabledivonep = document.getElementById('secondretable').children[0].querySelectorAll('p');

// autoScreenWidth > 1536
if(autoScreenWidth >= 1537){
        
    document.getElementById('retablephotoone').style.width = '500px';
    document.getElementById('retablephototwo').style.width = '200px';
        
    document.getElementById('photoslider').style.marginTop = '10px';

    document.getElementById('retable').children[0].children[1].style.top = '-10px';
    document.getElementById('retable').children[0].children[2].style.top = '60px';

    if(autoWidth >= 673){

        document.getElementById('retable').style.height = '405px';

        document.getElementById('retable').children[0].style.width = '570px';

        document.getElementById('retable').children[1].style.width = '570px';

    for(let a=0;a<getretabledivonep.length;a++){

            document.getElementById('retable').children[0].children[0].style.marginLeft = '50px';

            document.getElementById('retable').children[0].children[0].style.width = '';

            document.getElementById('retable').children[0].children[0].style.textAlign = '';

            getretabledivonep[a].style.marginLeft = '50px';

            getretabledivonep[a].style.width = '';
            
            getretabledivonep[a].style.textAlign = '';

            getretabledivonep[a].style.fontSize = '55px'
            
    }

        document.getElementById('retable').children[1].style.display = 'block';
        document.getElementById('retable').children[2].style.display = 'none';

        //
        getRetableNumber = 0;

    }
    if(autoWidth <= 672){

        document.getElementById('retable').style.height = '810px';

        document.getElementById('retable').children[0].style.width = '100%';

        document.getElementById('retable').children[1].style.width = '100%';

        for(let a=0;a<getretabledivonep.length;a++){

            getretabledivonep[a].style.marginLeft = '';

            getretabledivonep[a].style.width = '100%';
            
            getretabledivonep[a].style.textAlign = 'center';

            document.getElementById('retable').children[0].children[0].style.marginLeft = '';

            document.getElementById('retable').children[0].children[0].style.width = '100%';

            document.getElementById('retable').children[0].children[0].style.textAlign = 'center';

            document.getElementById('retable').children[0].children[1].style.top = '-10px';
            document.getElementById('retable').children[0].children[2].style.top = '60px';
            
        }

        //
        document.getElementById('retable').children[1].style.display = 'none';

        document.getElementById('retable').children[2].style.display = 'block';

    }
    //information
    if(autoWidth >= 535){
        document.getElementById('information').style.height = '450px';
        document.getElementById('information').children[0].style.width = '500px';
        document.getElementById('information').children[1].style.width = '500px';

        document.getElementById('information').children[0].children[0].style.display = 'block';
        document.getElementById('information').children[0].children[1].style.display = 'none';
            
        let getscrolltop = document.documentElement.scrollTop;
        //console.log(getscrolltop);
            
        let getprojectheight = document.documentElement.scrollHeight;
        //console.log(getprojectheight);
            
        let getclientheight = document.documentElement.clientHeight;
        //console.log(getclientheight);
            
        var calculateheight = getprojectheight-getclientheight;
        //console.log(calculateheight);
            
        var getfinal = Math.ceil((getscrolltop*100)/calculateheight);
        //console.log(getfinal);
            
        console.clear();
        console.error(getfinal);

    }
    if(autoWidth <= 534){
        document.getElementById('information').style.height = '900px';
        document.getElementById('information').children[0].style.width = '100%';
        document.getElementById('information').children[1].style.width = '100%';

        document.getElementById('information').children[0].children[0].style.display = 'none';

        let getscrolltop = document.documentElement.scrollTop;
        //console.log(getscrolltop);
    
        let getprojectheight = document.documentElement.scrollHeight;
        //console.log(getprojectheight);
    
        let getclientheight = document.documentElement.clientHeight;
        //console.log(getclientheight);
    
        var calculateheight = getprojectheight-getclientheight;
        //console.log(calculateheight);
    
        var getfinal = Math.ceil((getscrolltop*100)/calculateheight);
        //console.log(getfinal);
    
        //console.clear()
        console.log(getfinal)

        if(getfinal >= 50){
            console.log('hello')
            setTimeout(function(){
                document.getElementById('fieldsettwo').style.animationName='informationoneani';
            },0)
        
            document.getElementById('fieldsettwo').style.transform = 'scale(1)';
            document.getElementById('information').children[0].children[1].style.display = 'block';

        }

        document.getElementById('retable').children[1].children[0].children[1].style.top = getfinal*4.5+'px';
            
        

    }

    if(autoWidth <= 512){

        getMessageBtn.style.display = 'block';

        navDiv.style.display = 'none';

        document.getElementById('header').children[2].children[0].style.width = '100px';

        getHeader.style.flexWrap = 'nowrap';

    }
    if(autoWidth >= 513){

        getMessageBtn.style.display = 'none';

        navDiv.style.display = 'block';

        getHeader.style.flexWrap = 'nowrap';

    }
    // secondMaincontainer
    if(autoWidth >= 132){
        document.getElementById('secondHeader').style.flexWrap = 'nowrap';

        document.getElementById('secondHeader').children[1].children[0].style.width = '95px';

        document.getElementById('photoslider').style.marginTop = '5px';

        document.getElementById('secondphotoslider').style.marginTop = '15px';
    }
    if(autoWidth <= 132){

        getMessageBtn.style.display = 'block';

        navDiv.style.display = 'none';

        document.getElementById('header').children[2].children[0].style.width = '465px';

        getHeader.style.flexWrap = 'wrap';

        document.getElementById('photoslider').style.marginTop = '48px';

        // secondMaincontainer
        document.getElementById('secondHeader').style.flexWrap = 'wrap';

        document.getElementById('secondHeader').children[1].children[0].style.width = '465px';

        document.getElementById('secondphotoslider').style.marginTop = '58px';

    }
    if(autoWidth >= 33){

        document.getElementById('retablethree').children[1].style.marginLeft = '320px';

    }
    if(autoWidth <= 32){

        document.getElementById('retablethree').children[1].style.marginLeft = '300px';

    }
    
}

// autoScreenWidth === 1536
if(autoScreenWidth <= 1536 && autoScreenWidth >= 1281){

    document.getElementById('retablephotoone').style.width = '500px';
    document.getElementById('retablephototwo').style.width = '200px';
        
    document.getElementById('photoslider').style.marginTop = '10px';

    document.getElementById('retable').children[0].children[1].style.top = '-10px';
    document.getElementById('retable').children[0].children[2].style.top = '60px';

    if(autoWidth >= 673){

        document.getElementById('retable').style.height = '405px';

        document.getElementById('retable').children[0].style.width = '570px';

        document.getElementById('retable').children[1].style.width = '570px';

    for(let a=0;a<getretabledivonep.length;a++){

            document.getElementById('retable').children[0].children[0].style.marginLeft = '50px';

            document.getElementById('retable').children[0].children[0].style.width = '';

            document.getElementById('retable').children[0].children[0].style.textAlign = '';

            getretabledivonep[a].style.marginLeft = '50px';

            getretabledivonep[a].style.width = '';
            
            getretabledivonep[a].style.textAlign = '';

            getretabledivonep[a].style.fontSize = '55px'
            
    }

        document.getElementById('retable').children[1].style.display = 'block';
        document.getElementById('retable').children[2].style.display = 'none';

        //
        getRetableNumber = 0;

        window.onscroll = function(){
            scrollpoint();
        };
            
        function scrollpoint(){
            
                let getscrolltop = document.documentElement.scrollTop;
                //console.log(getscrolltop);
            
                let getprojectheight = document.documentElement.scrollHeight;
                //console.log(getprojectheight);
            
                let getclientheight = document.documentElement.clientHeight;
                //console.log(getclientheight);
            
                var calculateheight = getprojectheight-getclientheight;
                //console.log(calculateheight);
            
                var getfinal = Math.ceil((getscrolltop*100)/calculateheight);
                //console.log(getfinal);
            
                console.clear()
                console.error(getfinal);

                if(getfinal >= 24 && getfinal <= 39){

                    setTimeout(function(){

                        document.getElementById('fieldsetthree').style.animationName = 'informationtwoani';

                    },0)
                    document.getElementById('fieldsetthree').style.transform = 'translate(-120px)';
                    
                }


                document.getElementById('retable').children[1].children[0].children[1].style.top = getfinal*3+'px';
            
        };


    }
    if(autoWidth <= 672){

        document.getElementById('retable').style.height = '810px';

        document.getElementById('retable').children[0].style.width = '100%';

        document.getElementById('retable').children[1].style.width = '100%';

        for(let a=0;a<getretabledivonep.length;a++){

            getretabledivonep[a].style.marginLeft = '';

            getretabledivonep[a].style.width = '100%';
            
            getretabledivonep[a].style.textAlign = 'center';

            document.getElementById('retable').children[0].children[0].style.marginLeft = '';

            document.getElementById('retable').children[0].children[0].style.width = '100%';

            document.getElementById('retable').children[0].children[0].style.textAlign = 'center';

            document.getElementById('retable').children[0].children[1].style.top = '-10px';
            document.getElementById('retable').children[0].children[2].style.top = '60px';
            
        }

        // secondretable
        for(let a=0;a<getsecondretabledivonep.length;a++){

            getsecondretabledivonep[a].style.marginLeft = '';

            getsecondretabledivonep[a].style.width = '100%';
            
            getsecondretabledivonep[a].style.textAlign = 'center';

            getsecondretabledivonep[a].style.fontSize = '55px';
            
        }
        
        document.getElementById('retable').children[1].style.display = 'none';

        document.getElementById('retable').children[2].style.display = 'block';

        window.onscroll = function(){
            scrollpoint();
        };
            
        function scrollpoint(){
            
                let getscrolltop = document.documentElement.scrollTop;
                //console.log(getscrolltop);
            
                let getprojectheight = document.documentElement.scrollHeight;
                //console.log(getprojectheight);
            
                let getclientheight = document.documentElement.clientHeight;
                //console.log(getclientheight);
            
                var calculateheight = getprojectheight-getclientheight;
                //console.log(calculateheight);
            
                var getfinal = Math.ceil((getscrolltop*100)/calculateheight);
                //console.log(getfinal);
            
                console.clear()
                console.error(getfinal);

                if(getfinal >= 40 && getfinal <= 58){

                    setTimeout(function(){

                        document.getElementById('fieldsetthree').style.animationName = 'informationtwoani';

                    },0)
                    document.getElementById('fieldsetthree').style.transform = 'translate(-120px)';
                    
                }


                document.getElementById('retable').children[1].children[0].children[1].style.top = getfinal*3+'px';
            
        };


    }
    //information
    if(autoWidth >= 535){
        document.getElementById('information').style.height = '450px';
        document.getElementById('information').children[0].style.width = '500px';
        document.getElementById('information').children[1].style.width = '500px';

        document.getElementById('information').children[0].children[0].style.display = 'block';
        document.getElementById('information').children[0].children[1].style.display = 'none';

        document.getElementById('information').children[1].children[0].style.display = 'block';
        document.getElementById('information').children[1].children[1].style.display = 'none';

    }
    if(autoWidth <= 534){
        document.getElementById('information').style.height = '900px';
        document.getElementById('information').children[0].style.width = '100%';
        document.getElementById('information').children[1].style.width = '100%';

        document.getElementById('information').children[0].children[0].style.display = 'none';

        document.getElementById('information').children[1].children[0].style.display = 'none';
        document.getElementById('information').children[1].children[1].style.display = 'block';

        document.getElementById('maincontainer').style.height = '3010px';

        let getscrolltop = document.documentElement.scrollTop;
        //console.log(getscrolltop);
    
        let getprojectheight = document.documentElement.scrollHeight;
        //console.log(getprojectheight);
    
        let getclientheight = document.documentElement.clientHeight;
        //console.log(getclientheight);
    
        var calculateheight = getprojectheight-getclientheight;
        //console.log(calculateheight);
    
        var getfinal = Math.ceil((getscrolltop*100)/calculateheight);
        //console.log(getfinal);
    
        //console.clear()
        console.log(getfinal)

        

        document.getElementById('retable').children[1].children[0].children[1].style.top = getfinal*4.5+'px';

        window.onscroll = function(){
            scrollpoint();
        };
            
        function scrollpoint(){
            
                let getscrolltop = document.documentElement.scrollTop;
                //console.log(getscrolltop);
            
                let getprojectheight = document.documentElement.scrollHeight;
                //console.log(getprojectheight);
            
                let getclientheight = document.documentElement.clientHeight;
                //console.log(getclientheight);
            
                var calculateheight = getprojectheight-getclientheight;
                //console.log(calculateheight);
            
                var getfinal = Math.ceil((getscrolltop*100)/calculateheight);
                //console.log(getfinal);
            
                console.clear()
                //console.error(getfinal);

                
                if(getfinal <= 49){
                    document.getElementById('information').children[0].children[1].style.display = 'block';
                }
                if(getfinal >= 50 && getfinal <= 65){
                    console.log('hello')
                    setTimeout(function(){
                        document.getElementById('fieldsettwo').style.animationName='informationoneani';
                    },0)
                
                    document.getElementById('fieldsettwo').style.transform = 'scale(1)';
                    document.getElementById('information').children[0].children[1].style.display = 'block';

                }
                if(getfinal >= 66 && getfinal <= 81 ){
                    console.log('hello')
                    setTimeout(function(){
                        document.getElementById('headertworetablefour').style.animationName='informationoneani';
                    },0)
                
                    document.getElementById('headertworetablefour').style.transform = 'scale(1)';

                }

                document.getElementById('retable').children[1].children[0].children[1].style.top = getfinal*3+'px';
            
        };

    }
    if(autoWidth <= 512){

        getMessageBtn.style.display = 'block';

        navDiv.style.display = 'none';

        document.getElementById('header').children[2].children[0].style.width = '100px';

        getHeader.style.flexWrap = 'nowrap';

    }
    if(autoWidth >= 513){

        getMessageBtn.style.display = 'none';

        navDiv.style.display = 'block';

        getHeader.style.flexWrap = 'nowrap';

    }
    // secondMaincontainer
    if(autoWidth >= 132){
        document.getElementById('secondHeader').style.flexWrap = 'nowrap';

        document.getElementById('secondHeader').children[1].children[0].style.width = '95px';

        document.getElementById('photoslider').style.marginTop = '5px';

        document.getElementById('secondphotoslider').style.marginTop = '15px';

    }
    if(autoWidth <= 132){

        getMessageBtn.style.display = 'block';

        navDiv.style.display = 'none';

        document.getElementById('header').children[2].children[0].style.width = '465px';

        getHeader.style.flexWrap = 'wrap';

        document.getElementById('photoslider').style.marginTop = '48px';

        // secondMaincontainer
        document.getElementById('secondHeader').style.flexWrap = 'wrap';

        document.getElementById('secondHeader').children[1].children[0].style.width = '465px';

        document.getElementById('secondphotoslider').style.marginTop = '58px';

    }
    if(autoWidth >= 33){

        document.getElementById('retablethree').children[1].style.marginLeft = '320px';

    }
    if(autoWidth <= 32){

        document.getElementById('retablethree').children[1].style.marginLeft = '300px';

    }

}

// autoScreenWidth >= 486

if(autoScreenWidth <= 1280 && autoScreenWidth >= 486){

    document.getElementById('secondretable').children[0].children[1].style.marginTop = '';
    for(let a=0;a<getsecondretabledivonep.length;a++){

        getsecondretabledivonep[a].style.marginLeft = '';

        getsecondretabledivonep[a].style.width = '100%';
            
        getsecondretabledivonep[a].style.textAlign = 'center';

        getsecondretabledivonep[a].style.fontSize = '55px';
            
    }

    document.getElementById('retable').children[0].children[1].style.top = '-10px';
    document.getElementById('retable').children[0].children[2].style.top = '60px';

    if(autoWidth >= 726){

        //document.getElementById('maincontainer').style.height = '2130px';

        document.getElementById('retable').style.height = '405px';

        document.getElementById('retable').children[0].style.width = '570px';

        document.getElementById('retable').children[1].style.width = '570px';

        for(let a=0;a<getretabledivonep.length;a++){

            document.getElementById('retable').children[0].children[0].style.marginLeft = '50px';

            document.getElementById('retable').children[0].children[0].style.width = '';

            document.getElementById('retable').children[0].children[0].style.textAlign = '';

            getretabledivonep[a].style.marginLeft = '50px';

            getretabledivonep[a].style.width = '';
            
            getretabledivonep[a].style.textAlign = '';

            getretabledivonep[a].style.fontSize = '55px';
            
        }

        window.onscroll = function(){
            scrollpoint();
        };
            
        function scrollpoint(){
            
                let getscrolltop = document.documentElement.scrollTop;
                //console.log(getscrolltop);
            
                let getprojectheight = document.documentElement.scrollHeight;
                //console.log(getprojectheight);
            
                let getclientheight = document.documentElement.clientHeight;
                //console.log(getclientheight);
            
                var calculateheight = getprojectheight-getclientheight;
                //console.log(calculateheight);
            
                var getfinal = Math.ceil((getscrolltop*100)/calculateheight);
                //console.log(getfinal);
            
                console.clear()
                console.error(getfinal);

                if(getfinal >= 24 && getfinal <= 39){

                    setTimeout(function(){

                        document.getElementById('fieldsetthree').style.animationName = 'informationtwoani';

                    },0)
                    document.getElementById('fieldsetthree').style.transform = 'translate(-120px)';
                    
                }


                document.getElementById('retable').children[1].children[0].children[1].style.top = getfinal*4.5+'px';
            
        };

    }
    if(autoWidth <= 725){

        //document.getElementById('maincontainer').style.height = '2130px';

        document.getElementById('retable').style.height = '810px';

        document.getElementById('retable').children[0].style.width = '100%';

        document.getElementById('retable').children[1].style.width = '100%';

        for(let a=0;a<getretabledivonep.length;a++){

            getretabledivonep[a].style.marginLeft = '';

            getretabledivonep[a].style.width = '100%';
            
            getretabledivonep[a].style.textAlign = 'center';

            document.getElementById('retable').children[0].children[0].style.marginLeft = '';

            document.getElementById('retable').children[0].children[0].style.width = '100%';

            document.getElementById('retable').children[0].children[0].style.textAlign = 'center';

            getretabledivonep[a].style.fontSize = '55px';
            
        }

        document.getElementById('retable').children[1].style.display = 'none';
        document.getElementById('retable').children[2].style.display = 'block';

        window.onscroll = function(){
            scrollpoint();
        };
            
        function scrollpoint(){
            
                let getscrolltop = document.documentElement.scrollTop;
                //console.log(getscrolltop);
            
                let getprojectheight = document.documentElement.scrollHeight;
                //console.log(getprojectheight);
            
                let getclientheight = document.documentElement.clientHeight;
                //console.log(getclientheight);
            
                var calculateheight = getprojectheight-getclientheight;
                //console.log(calculateheight);
            
                var getfinal = Math.ceil((getscrolltop*100)/calculateheight);
                //console.log(getfinal);
            
                console.clear()
                console.error(getfinal);

                if(getfinal >= 24 && getfinal <= 39){

                    setTimeout(function(){

                        document.getElementById('fieldsetthree').style.animationName = 'informationtwoani';

                    },0)
                    document.getElementById('fieldsetthree').style.transform = 'translate(-120px)';
                    
                }


                document.getElementById('retable').children[1].children[0].children[1].style.top = getfinal*4.5+'px';
            
        };

    }
    /*if(clientWidth <= 725 && clientWidth >= 586){

        document.getElementById('maincontainer').style.height = '2550px';
        
    }*/
    // information
    if(autoWidth >= 586){
        document.getElementById('information').style.height = '450px';

        document.getElementById('information').children[0].style.width = '500px';
        document.getElementById('information').children[1].style.width = '500px';

        document.getElementById('information').children[0].children[0].style.display = 'block';
        document.getElementById('information').children[0].children[1].style.display = 'none';

        document.getElementById('information').children[1].children[0].style.display = 'block';
        document.getElementById('information').children[1].children[1].style.display = 'none';

        window.onscroll = function(){
            scrollpoint();
        };
            
        function scrollpoint(){
            
                let getscrolltop = document.documentElement.scrollTop;
                //console.log(getscrolltop);
            
                let getprojectheight = document.documentElement.scrollHeight;
                //console.log(getprojectheight);
            
                let getclientheight = document.documentElement.clientHeight;
                //console.log(getclientheight);
            
                var calculateheight = getprojectheight-getclientheight;
                //console.log(calculateheight);
            
                var getfinal = Math.ceil((getscrolltop*100)/calculateheight);
                //console.log(getfinal);
            
                console.clear()
                console.error(getfinal);

                if(getfinal >= 37 && getfinal <= 63){

                    setTimeout(function(){

                        document.getElementById('fieldsetthree').style.animationName = 'informationtwoani';

                    },0)
                    document.getElementById('fieldsetthree').style.transform = 'translate(-120px)';
                    
                }


                document.getElementById('retable').children[1].children[0].children[1].style.top = getfinal*4.5+'px';
            
        };

    }
    if(autoWidth <= 585){
        document.getElementById('information').style.height = '900px';
        document.getElementById('information').children[0].style.width = '100%';
        document.getElementById('information').children[1].style.width = '100%';

        document.getElementById('information').children[0].children[0].style.display = 'none';
        document.getElementById('information').children[0].children[1].style.display = 'block';

        document.getElementById('information').children[1].children[0].style.display = 'none';
        document.getElementById('information').children[1].children[1].style.display = 'block';

        window.onscroll = function(){
            scrollpoint();
        };
            
        function scrollpoint(){
            
                let getscrolltop = document.documentElement.scrollTop;
                //console.log(getscrolltop);
            
                let getprojectheight = document.documentElement.scrollHeight;
                //console.log(getprojectheight);
            
                let getclientheight = document.documentElement.clientHeight;
                //console.log(getclientheight);
            
                var calculateheight = getprojectheight-getclientheight;
                //console.log(calculateheight);
            
                var getfinal = Math.ceil((getscrolltop*100)/calculateheight);
                //console.log(getfinal);
            
                console.clear()
                console.warn(getfinal);

                if(getfinal >= 36 && getfinal <= 78){
                    console.log('hello')
                    setTimeout(function(){
                        document.getElementById('fieldsettwo').style.animationName='informationoneani';
                    },0)
                
                    document.getElementById('fieldsettwo').style.transform = 'scale(1)';
                    document.getElementById('information').children[0].children[1].style.display = 'block';

                }

                if(getfinal >= 61){
                    console.log('hello')
                    setTimeout(function(){
                        document.getElementById('headertworetablefour').style.animationName='informationoneani';
                    },0)
                
                    document.getElementById('headertworetablefour').style.transform = 'scale(1)';

                }

                document.getElementById('retable').children[1].children[0].children[1].style.top = getfinal*4.5+'px';
            
        };

    }
    if(autoWidth <= 548){

        getMessageBtn.style.display = 'block';

        navDiv.style.display = 'none';

        document.getElementById('header').children[2].children[0].style.width = '100px';

        getHeader.style.flexWrap = 'nowrap';

        document.getElementById('photoslider').style.marginTop = '10px';

        document.getElementById('secondphotoslider').style.marginTop = '20px';

    }
    if(autoWidth >= 549){

        getMessageBtn.style.display = 'none';

        navDiv.style.display = 'block';

        getHeader.style.flexWrap = 'nowrap';

        document.getElementById('photoslider').style.marginTop = '10px';

    }
    if(autoWidth <= 150){// 112

        getMessageBtn.style.display = 'block';

        navDiv.style.display = 'none';

        document.getElementById('header').children[2].children[0].style.width = '465px';

        getHeader.style.flexWrap = 'wrap';

        document.getElementById('photoslider').style.marginTop = '48px';

        // second
        document.getElementById('secondphotoslider').style.marginTop = '58px';

    }
    if(autoWidth >= 79){
        document.getElementById('retablephotoone').style.width = '500px';

        document.getElementById('retablephototwo').style.width = '200px';

        document.getElementById('retablethree').children[1].style.marginLeft = '320px';
    }
    if(autoWidth <= 78){
        document.getElementById('retablephotoone').style.width = '340px';

        document.getElementById('retablephototwo').style.width = '150px';

        document.getElementById('retablethree').children[1].style.marginLeft = '320px';

        // secondHeader
        document.getElementById('secondHeader').children[1].style.display = 'block';

        document.getElementById('secondHeader').style.flexWrap = 'wrap';

        document.getElementById('secondHeader').children[1].children[0].style.width = '465px';

        document.getElementById('secondphotoslider').style.marginTop = '58px';


    }

    if(autoScreenWidth === 540){

        if(autoWidth === 290){

            // secondHeader
            document.getElementById('secondHeader').children[1].style.display = 'block';

            document.getElementById('secondHeader').style.flexWrap = 'wrap';

            document.getElementById('secondHeader').children[1].children[0].style.width = '465px';

            document.getElementById('secondphotoslider').style.marginTop = '58px';

            getMessageBtn.style.display = 'block';

            navDiv.style.display = 'none';

            document.getElementById('header').children[2].children[0].style.width = '465px';

            getHeader.style.flexWrap = 'wrap';

            document.getElementById('retablephotoone').style.width = '300px';

            document.getElementById('retablephototwo').style.width = '100px';

            document.getElementById('retablethree').children[1].style.marginLeft = '320px';

        }

    }

}

// autoScreenWidth <= 485

if(autoScreenWidth <= 485){

    document.getElementById('maincontainer').style.height = '2800px';

    document.getElementById('pricediv').style.marginTop = '360px';

    // secondHeader
    document.getElementById('secondHeader').children[1].style.display = 'block';

    document.getElementById('secondHeader').style.flexWrap = 'wrap';

    document.getElementById('secondHeader').children[1].children[0].style.width =autoScreenWidth-20+'px' ;

    document.getElementById('secondphotoslider').style.marginTop = '58px';

    document.getElementById('photoslider').style.marginTop = '48px';

    getMessageBtn.style.display = 'block';

    navDiv.style.display = 'none';

    getHeader.style.flexWrap = 'wrap';

    document.getElementById('header').children[2].children[0].style.width = autoScreenWidth-20+'px';

    for(let a=0;a<getretabledivonep.length;a++){

        getretabledivonep[a].style.marginLeft = '';

        getretabledivonep[a].style.width = '100%';
        
        getretabledivonep[a].style.textAlign = 'center';

        getretabledivonep[a].style.fontSize = '40px';
        
    }

    document.getElementById('secondretable').children[0].children[1].style.marginTop = '60px';
        //secondretable
        for(let a=0;a<getsecondretabledivonep.length;a++){

            //getsecondretabledivonep[a].style.marginLeft = '';
    
            getsecondretabledivonep[a].style.width = '100%';
            
            getsecondretabledivonep[a].style.textAlign = 'center';
    
            getsecondretabledivonep[a].style.fontSize = '40px';
            
        }

    document.getElementById('retable').children[0].children[0].style.marginLeft = '';

    document.getElementById('retable').children[0].children[0].style.width = '100%';

    document.getElementById('retable').children[0].children[0].style.textAlign = 'center';
    
    //
    document.getElementById('retable').children[0].children[1].style.top = '11px';
    document.getElementById('retable').children[0].children[2].style.top = '68px';

    document.getElementById('retable').children[1].style.display = 'none';
    document.getElementById('retable').children[2].style.display = 'block';

    document.getElementById('retablephotoone').style.width = '220px';
    document.getElementById('retablephototwo').style.width = '80px';
    document.getElementById('retablethree').children[1].style.marginLeft = '170px';

    document.getElementById('information').children[0].children[0].style.display = 'none';
    document.getElementById('information').children[0].children[1].style.display = 'block';

    document.getElementById('information').children[1].children[0].style.display = 'none';
    document.getElementById('information').children[1].children[1].style.display = 'block';

    window.onscroll = function(){
        scrollpoint();
    };
                
    function scrollpoint(){
                
                    let getscrolltop = document.documentElement.scrollTop;
                    //console.log(getscrolltop);
                
                    let getprojectheight = document.documentElement.scrollHeight;
                    //console.log(getprojectheight);
                
                    let getclientheight = document.documentElement.clientHeight;
                    //console.log(getclientheight);
                
                    var calculateheight = getprojectheight-getclientheight;
                    //console.log(calculateheight);
                
                    var getfinal = Math.ceil((getscrolltop*100)/calculateheight);
                    //console.log(getfinal);
                
                    console.clear()
                    console.error(getfinal);

                    if(getfinal >= 36 && getfinal <= 78){
                        console.log('hello')
                        setTimeout(function(){
                            document.getElementById('fieldsettwo').style.animationName='informationoneani';
                        },0)
                    
                        document.getElementById('fieldsettwo').style.transform = 'scale(1)';
                        document.getElementById('information').children[0].children[1].style.display = 'block';

                    }
                    if(getfinal >= 61){
                        console.log('hello')
                        setTimeout(function(){
                            document.getElementById('headertworetablefour').style.animationName='informationoneani';
                        },0)
                    
                        document.getElementById('headertworetablefour').style.transform = 'scale(1)';

                    }

                    document.getElementById('retable').children[1].children[0].children[1].style.top = getfinal*4.5+'px';
                
    };


}

// Client Width

window.onresize = function(){

    scrollsize();

};

function scrollsize(){

    console.clear();

    var clientScreenWidth = window.screen.width;
    console.log('clientScreenWidth is ' +clientScreenWidth)

    var clientWidth = (window.innerWidth)-500;
    console.log( 'clientWidth is ' +clientWidth);

    // screenWidth > 1537
    if(clientScreenWidth >= 1537){

        document.getElementById('retablephotoone').style.width = '500px';

        document.getElementById('retablephototwo').style.width = '200px';
        
        document.getElementById('photoslider').style.marginTop = '10px';

        if(clientWidth >= 673){

            document.getElementById('retable').style.height = '405px';

            document.getElementById('retable').children[0].style.width = '570px';

            document.getElementById('retable').children[1].style.width = '570px';

            for(let a=0;a<getretabledivonep.length;a++){

                getretabledivonep[a].style.marginLeft = '50px';
    
                getretabledivonep[a].style.width = '';
                
                getretabledivonep[a].style.textAlign = '';

                getretabledivonep[a].style.marginRight = '';

                document.getElementById('retable').children[0].children[0].style.marginLeft = '50px';

                document.getElementById('retable').children[0].children[0].style.width = '';

                document.getElementById('retable').children[0].children[0].style.textAlign = '';

                getretabledivonep[a].style.fontSize = '55px';
                
            }

            document.getElementById('retable').children[0].children[1].style.top = '-10px';
            document.getElementById('retable').children[0].children[2].style.top = '60px';

            
            document.getElementById('retable').children[1].style.display = 'block';
            document.getElementById('retable').children[2].style.display = 'none';

            

        }
        if(clientWidth <= 672){

            document.getElementById('retable').style.height = '810px';

            document.getElementById('retable').children[0].style.width = '100%';

            document.getElementById('retable').children[1].style.width = '100%';

            for(let a=0;a<getretabledivonep.length;a++){

                getretabledivonep[a].style.marginLeft = '';
    
                getretabledivonep[a].style.width = '100%';
                
                getretabledivonep[a].style.textAlign = 'center';

                getretabledivonep[a].style.fontSize = '55px';
                
            }

            document.getElementById('retable').children[0].children[0].style.marginLeft = '';

            document.getElementById('retable').children[0].children[0].style.width = '100%';

            document.getElementById('retable').children[0].children[0].style.textAlign = 'center';

            document.getElementById('retable').children[0].children[1].style.top = '-10px';

            document.getElementById('retable').children[0].children[2].style.top = '60px';


            //
            document.getElementById('retable').children[1].style.display = 'none';
            document.getElementById('retable').children[2].style.display = 'block';

        
        }
        //information
        if(clientWidth >= 535){
            document.getElementById('information').style.height = '450px';
            document.getElementById('information').children[0].style.width = '500px';
            document.getElementById('information').children[1].style.width = '500px';

            document.getElementById('information').children[0].children[0].style.display = 'block';
            document.getElementById('information').children[0].children[1].style.display = 'none';

            window.onscroll = function(){
                scrollpoint();
            };
                
            function scrollpoint(){
                
                    let getscrolltop = document.documentElement.scrollTop;
                    //console.log(getscrolltop);
                
                    let getprojectheight = document.documentElement.scrollHeight;
                    //console.log(getprojectheight);
                
                    let getclientheight = document.documentElement.clientHeight;
                    //console.log(getclientheight);
                
                    var calculateheight = getprojectheight-getclientheight;
                    //console.log(calculateheight);
                
                    var getfinal = Math.ceil((getscrolltop*100)/calculateheight);
                    //console.log(getfinal);
                
                    console.clear()
                    console.error(getfinal)

                    if(getfinal >= 24 && getfinal <= 40){

                        setTimeout(function(){
    
                            document.getElementById('fieldsetthree').style.animationName = 'informationtwoani';
    
                        },0)
                        document.getElementById('fieldsetthree').style.transform = 'translate(-120px)';
                        
                    }
                
            };

        }
        if(clientWidth <= 534){
            document.getElementById('information').style.height = '900px';
            document.getElementById('information').children[0].style.width = '100%';
            document.getElementById('information').children[1].style.width = '100%';

            document.getElementById('information').children[0].children[0].style.display = 'none';

            window.onscroll = function(){
                scrollpoint();
            };
                
            function scrollpoint(){
                
                    let getscrolltop = document.documentElement.scrollTop;
                    //console.log(getscrolltop);
                
                    let getprojectheight = document.documentElement.scrollHeight;
                    //console.log(getprojectheight);
                
                    let getclientheight = document.documentElement.clientHeight;
                    //console.log(getclientheight);
                
                    var calculateheight = getprojectheight-getclientheight;
                    //console.log(calculateheight);
                
                    var getfinal = Math.ceil((getscrolltop*100)/calculateheight);
                    //console.log(getfinal);
                
                    console.clear()
                    console.warn(getfinal)
                    if(getfinal >= 50){
                        setTimeout(function(){
                            document.getElementById('fieldsettwo').style.animationName='informationoneani';
                        },0)
                        document.getElementById('fieldsettwo').style.transform = 'scale(1)';
                        document.getElementById('information').children[0].children[1].style.display = 'block';

                    }
                    if(getfinal >= 80){
                        console.log('hello')
                        setTimeout(function(){
                            document.getElementById('headertworetablefour').style.animationName='informationoneani';
                        },0)
                    
                        document.getElementById('headertworetablefour').style.transform = 'scale(1)';

                    }
                
            };

        }

        if(clientWidth <= 512){

            getMessageBtn.style.display = 'block';

            navDiv.style.display = 'none';

            document.getElementById('header').children[2].children[0].style.width = '100px';

            getHeader.style.flexWrap = 'nowrap';

            getBtnMessageNumber = 0;

            if(getBtnMessageNumber === 0){

                document.getElementById('messageletter').style.animationName = '';

                document.getElementById('messageletter').style.height = '';

                document.getElementById('messageletter').children[0].style.display = 'none';

            }

        }
        if(clientWidth >= 513){

            getMessageBtn.style.display = 'none';

            navDiv.style.display = 'block';

            getHeader.style.flexWrap = 'nowrap';

            // Slider Menu Number
            getSliderMenuNumber = 0;

            document.getElementById('slidercontainer').style.display = 'none';

            // secondMaincontainer
            if(getSliderMenuNumber === 0){

                document.getElementById('secondMaincontainer').style.display = 'none';

                document.getElementById('maincontainer').style.display = 'block';

            }

            document.getElementById('secondHeader').style.flexWrap = 'nowrap';

            document.getElementById('secondHeader').children[1].children[0].style.width = '95px';

        }
        // secondMaincontainer
        if(clientWidth >= 132){
            document.getElementById('secondHeader').style.flexWrap = 'nowrap';

            document.getElementById('secondHeader').children[1].children[0].style.width = '95px';

            document.getElementById('secondphotoslider').style.marginTop = '15px';

            document.getElementById('photoslider').style.marginTop = '5px';

        }
        if(clientWidth <= 132){

            getMessageBtn.style.display = 'block';

            navDiv.style.display = 'none';

            getHeader.style.flexWrap = 'wrap';

            document.getElementById('header').children[2].children[0].style.width = '465px';

            document.getElementById('photoslider').style.marginTop = '48px';

            // secondMaincontainer
            document.getElementById('secondHeader').style.flexWrap = 'wrap';

            document.getElementById('secondHeader').children[1].children[0].style.width = '465px';

            document.getElementById('secondphotoslider').style.marginTop = '58px';

            window.onscroll = function(){
                scrollpoint();
            };
                
            function scrollpoint(){
                
                    let getscrolltop = document.documentElement.scrollTop;
                    //console.log(getscrolltop);
                
                    let getprojectheight = document.documentElement.scrollHeight;
                    //console.log(getprojectheight);
                
                    let getclientheight = document.documentElement.clientHeight;
                    //console.log(getclientheight);
                
                    var calculateheight = getprojectheight-getclientheight;
                    //console.log(calculateheight);
                
                    var getfinal = Math.ceil((getscrolltop*100)/calculateheight);
                    //console.log(getfinal);
                
                    console.clear()
                    console.error(getfinal)

                    document.getElementById('retable').children[1].children[0].children[1].style.top = getfinal*4.5+'px';
                
            };

        }
        if(clientWidth >= 33){

            document.getElementById('retablethree').children[1].style.marginLeft = '320px';

            window.onscroll = function(){
                scrollpoint();
            };
                
            function scrollpoint(){
                
                    let getscrolltop = document.documentElement.scrollTop;
                    //console.log(getscrolltop);
                
                    let getprojectheight = document.documentElement.scrollHeight;
                    //console.log(getprojectheight);
                
                    let getclientheight = document.documentElement.clientHeight;
                    //console.log(getclientheight);
                
                    var calculateheight = getprojectheight-getclientheight;
                    //console.log(calculateheight);
                
                    var getfinal = Math.ceil((getscrolltop*100)/calculateheight);
                    //console.log(getfinal);
                
                    console.clear()
                    console.error(getfinal)

                    document.getElementById('retable').children[1].children[0].children[1].style.top = getfinal*4.5+'px';
                
            };

        }
        if(clientWidth <= 32){

            document.getElementById('retablethree').children[1].style.marginLeft = '300px';

            window.onscroll = function(){
                scrollpoint();
            };
                
            function scrollpoint(){
                
                    let getscrolltop = document.documentElement.scrollTop;
                    //console.log(getscrolltop);
                
                    let getprojectheight = document.documentElement.scrollHeight;
                    //console.log(getprojectheight);
                
                    let getclientheight = document.documentElement.clientHeight;
                    //console.log(getclientheight);
                
                    var calculateheight = getprojectheight-getclientheight;
                    //console.log(calculateheight);
                
                    var getfinal = Math.ceil((getscrolltop*100)/calculateheight);
                    //console.log(getfinal);
                
                    console.clear()
                    console.error(getfinal)

                    document.getElementById('retable').children[1].children[0].children[1].style.top = getfinal*4.5+'px';
                
            };

        }

    }
    
    if(clientScreenWidth <= 1536 && clientScreenWidth >= 1281){

        document.getElementById('retablephotoone').style.width = '500px';

        document.getElementById('retablephototwo').style.width = '200px';
        
        document.getElementById('photoslider').style.marginTop = '10px';

        if(clientWidth >= 673){

            document.getElementById('maincontainer').style.height = '2130px';

            document.getElementById('retable').style.height = '405px';

            document.getElementById('retable').children[0].style.width = '570px';

            document.getElementById('retable').children[1].style.width = '570px';

            for(let a=0;a<getretabledivonep.length;a++){

                getretabledivonep[a].style.marginLeft = '50px';
    
                getretabledivonep[a].style.width = '';
                
                getretabledivonep[a].style.textAlign = '';

                getretabledivonep[a].style.marginRight = '';

                document.getElementById('retable').children[0].children[0].style.marginLeft = '50px';

                document.getElementById('retable').children[0].children[0].style.width = '';

                document.getElementById('retable').children[0].children[0].style.textAlign = '';

                getretabledivonep[a].style.fontSize = '55px';
                
            }

            document.getElementById('retable').children[0].children[1].style.top = '-10px';
            document.getElementById('retable').children[0].children[2].style.top = '60px';

            
            document.getElementById('retable').children[1].style.display = 'block';
            document.getElementById('retable').children[2].style.display = 'none';

            window.onscroll = function(){
                scrollpoint();
            };
                
            function scrollpoint(){
                
                    let getscrolltop = document.documentElement.scrollTop;
                    //console.log(getscrolltop);
                
                    let getprojectheight = document.documentElement.scrollHeight;
                    //console.log(getprojectheight);
                
                    let getclientheight = document.documentElement.clientHeight;
                    //console.log(getclientheight);
                
                    var calculateheight = getprojectheight-getclientheight;
                    //console.log(calculateheight);
                
                    var getfinal = Math.ceil((getscrolltop*100)/calculateheight);
                    //console.log(getfinal);
                
                    console.clear()
                    console.error(getfinal);
    
                    if(getfinal >= 24 && getfinal <= 39){
    
                        setTimeout(function(){
    
                            document.getElementById('fieldsetthree').style.animationName = 'informationtwoani';
    
                        },0)
                        document.getElementById('fieldsetthree').style.transform = 'translate(-120px)';
                        
                    }
    
    
                    document.getElementById('retable').children[1].children[0].children[1].style.top = getfinal*3+'px';
                
            };
            

        }
        if(clientWidth <= 672){

            document.getElementById('maincontainer').style.height = '2130px';
            document.getElementById('maincontainer').style.backgroundColor = 'blue';//

            document.getElementById('retable').style.height = '810px';

            document.getElementById('retable').children[0].style.width = '100%';

            document.getElementById('retable').children[1].style.width = '100%';

            for(let a=0;a<getretabledivonep.length;a++){

                getretabledivonep[a].style.marginLeft = '';
    
                getretabledivonep[a].style.width = '100%';
                
                getretabledivonep[a].style.textAlign = 'center';

                getretabledivonep[a].style.fontSize = '55px';
                
            }
            //secondretable
            for(let a=0;a<getsecondretabledivonep.length;a++){

                getsecondretabledivonep[a].style.marginLeft = '';
    
                getsecondretabledivonep[a].style.width = '100%';
                
                getsecondretabledivonep[a].style.textAlign = 'center';

                getsecondretabledivonep[a].style.fontSize = '55px';
                
            }

            document.getElementById('retable').children[0].children[0].style.marginLeft = '';

            document.getElementById('retable').children[0].children[0].style.width = '100%';

            document.getElementById('retable').children[0].children[0].style.textAlign = 'center';

            document.getElementById('retable').children[0].children[1].style.top = '-10px';

            document.getElementById('retable').children[0].children[2].style.top = '60px';


            //
            document.getElementById('retable').children[1].style.display = 'none';
            document.getElementById('retable').children[2].style.display = 'block';

            window.onscroll = function(){
                scrollpoint();
            };
                
            function scrollpoint(){
                
                    let getscrolltop = document.documentElement.scrollTop;
                    //console.log(getscrolltop);
                
                    let getprojectheight = document.documentElement.scrollHeight;
                    //console.log(getprojectheight);
                
                    let getclientheight = document.documentElement.clientHeight;
                    //console.log(getclientheight);
                
                    var calculateheight = getprojectheight-getclientheight;
                    //console.log(calculateheight);
                
                    var getfinal = Math.ceil((getscrolltop*100)/calculateheight);
                    //console.log(getfinal);
                
                    console.clear()
                    console.error(getfinal);

                    if(getfinal >= 40 && getfinal <= 58){

                        setTimeout(function(){
    
                            document.getElementById('fieldsetthree').style.animationName = 'informationtwoani';
    
                        },0)
                        document.getElementById('fieldsetthree').style.transform = 'translate(-120px)';
                          
                    }


                    document.getElementById('retable').children[1].children[0].children[1].style.top = getfinal*3+'px';
                
            };
        
        }
        if(clientWidth <= 672 && clientWidth >= 535){

            document.getElementById('maincontainer').style.height = '2550px';
            
        }
        //information
        if(clientWidth >= 535){
            document.getElementById('information').style.height = '450px';
            document.getElementById('information').children[0].style.width = '500px';
            document.getElementById('information').children[1].style.width = '500px';
            
            document.getElementById('information').children[0].children[0].style.display = 'block';
            document.getElementById('information').children[0].children[1].style.display = 'none';

            document.getElementById('information').children[1].children[0].style.display = 'block';
            document.getElementById('information').children[1].children[1].style.display = 'none';

        }
        if(clientWidth <= 534){
            document.getElementById('information').style.height = '900px';
            document.getElementById('information').children[0].style.width = '100%';
            document.getElementById('information').children[1].style.width = '100%';

            document.getElementById('information').children[0].children[0].style.display = 'none';

            document.getElementById('information').children[1].children[0].style.display = 'none';
            document.getElementById('information').children[1].children[1].style.display = 'block';

            document.getElementById('maincontainer').style.height = '3010px';
            
            window.onscroll = function(){
                scrollpoint();
            };
                
            function scrollpoint(){
                
                    let getscrolltop = document.documentElement.scrollTop;
                    //console.log(getscrolltop);
                
                    let getprojectheight = document.documentElement.scrollHeight;
                    //console.log(getprojectheight);
                
                    let getclientheight = document.documentElement.clientHeight;
                    //console.log(getclientheight);
                
                    var calculateheight = getprojectheight-getclientheight;
                    //console.log(calculateheight);
                
                    var getfinal = Math.ceil((getscrolltop*100)/calculateheight);
                    //console.log(getfinal);
                
                    console.clear()
                    console.error(getfinal);

                    
                    if(getfinal <= 49){
                        document.getElementById('information').children[0].children[1].style.display = 'block';
                    }
                    if(getfinal >= 50){
                        console.log('hello')
                        setTimeout(function(){
                            document.getElementById('fieldsettwo').style.animationName='informationoneani';
                        },0)
                    
                        document.getElementById('fieldsettwo').style.transform = 'scale(1)';
                        document.getElementById('information').children[0].children[1].style.display = 'block';

                    }
                    if(getfinal >= 80){
                        console.log('hello')
                        setTimeout(function(){
                            document.getElementById('headertworetablefour').style.animationName='informationoneani';
                        },0)
                    
                        document.getElementById('headertworetablefour').style.transform = 'scale(1)';

                    }

                    document.getElementById('retable').children[1].children[0].children[1].style.top = getfinal*3+'px';
                
            };
            
        }

        if(clientWidth <= 512){

            getMessageBtn.style.display = 'block';

            navDiv.style.display = 'none';

            document.getElementById('header').children[2].children[0].style.width = '100px';

            getHeader.style.flexWrap = 'nowrap';

            getBtnMessageNumber = 0;

            if(getBtnMessageNumber === 0){

                document.getElementById('messageletter').style.animationName = '';

                document.getElementById('messageletter').style.height = '';

                document.getElementById('messageletter').children[0].style.display = 'none';

            }      

        }
        if(clientWidth >= 513){

            getMessageBtn.style.display = 'none';

            navDiv.style.display = 'block';

            getHeader.style.flexWrap = 'nowrap';

            // Slider Menu Number
            getSliderMenuNumber = 0;

            document.getElementById('slidercontainer').style.display = 'none';

            // secondMaincontainer
            if(getSliderMenuNumber === 0){

                document.getElementById('secondMaincontainer').style.display = 'none';

                document.getElementById('maincontainer').style.display = 'block';

            }

            document.getElementById('secondHeader').style.flexWrap = 'nowrap';

            document.getElementById('secondHeader').children[1].children[0].style.width = '95px';

        }
        // secondMaincontainer
        if(clientWidth >= 132){
            document.getElementById('secondHeader').style.flexWrap = 'nowrap';

            document.getElementById('secondHeader').children[1].children[0].style.width = '95px';

            document.getElementById('secondphotoslider').style.marginTop = '15px';

            document.getElementById('photoslider').style.marginTop = '5px';

        }
        if(clientWidth <= 132){

            getMessageBtn.style.display = 'block';

            navDiv.style.display = 'none';

            getHeader.style.flexWrap = 'wrap';

            document.getElementById('header').children[2].children[0].style.width = '465px';

            document.getElementById('photoslider').style.marginTop = '48px';

            // secondMaincontainer
            document.getElementById('secondHeader').style.flexWrap = 'wrap';

            document.getElementById('secondHeader').children[1].children[0].style.width = '465px';

            document.getElementById('secondphotoslider').style.marginTop = '58px';

        }
        if(clientWidth >= 33){

            document.getElementById('retablethree').children[1].style.marginLeft = '320px';

            

        }
        if(clientWidth <= 32){

            document.getElementById('retablethree').children[1].style.marginLeft = '300px';

        }

    }

    // screenWidth >= 486

    if(clientScreenWidth <= 1280 && clientScreenWidth >= 486){

        document.getElementById('pricediv').style.marginTop = '';

        document.getElementById('secondretable').children[0].children[1].style.marginTop = '';
        for(let a=0;a<getsecondretabledivonep.length;a++){

            getsecondretabledivonep[a].style.marginLeft = '';

            getsecondretabledivonep[a].style.width = '100%';
            
            getsecondretabledivonep[a].style.textAlign = 'center';

            getsecondretabledivonep[a].style.fontSize = '55px';
            
        }
        
        document.getElementById('retablethree').children[1].style.marginLeft = '320px';

        document.getElementById('photoslider').style.justifyContent = 'center';

        getBtnMessageNumber = 0;

        document.getElementById('retable').children[0].children[1].style.top = '-10px';
        document.getElementById('retable').children[0].children[2].style.top = '60px';
        
        if(clientWidth >= 726){

            document.getElementById('retable').style.height = '405px';
    
            document.getElementById('retable').children[0].style.width = '570px';
    
            document.getElementById('retable').children[1].style.width = '570px';
    
            for(let a=0;a<getretabledivonep.length;a++){
    
                document.getElementById('retable').children[0].children[0].style.marginLeft = '50px';
    
                document.getElementById('retable').children[0].children[0].style.width = '';
    
                document.getElementById('retable').children[0].children[0].style.textAlign = '';
    
                getretabledivonep[a].style.marginLeft = '50px';
    
                getretabledivonep[a].style.width = '';
                
                getretabledivonep[a].style.textAlign = '';
    
                getretabledivonep[a].style.fontSize = '55px'
                
            }
            document.getElementById('retable').children[1].style.display = 'block';
            document.getElementById('retable').children[2].style.display = 'none';

            window.onscroll = function(){
                scrollpoint();
            };
                
            function scrollpoint(){
                
                    let getscrolltop = document.documentElement.scrollTop;
                    //console.log(getscrolltop);
                
                    let getprojectheight = document.documentElement.scrollHeight;
                    //console.log(getprojectheight);
                
                    let getclientheight = document.documentElement.clientHeight;
                    //console.log(getclientheight);
                
                    var calculateheight = getprojectheight-getclientheight;
                    //console.log(calculateheight);
                
                    var getfinal = Math.ceil((getscrolltop*100)/calculateheight);
                    //console.log(getfinal);
                
                    console.clear()
                    console.error(getfinal);
    
                    if(getfinal >= 24 && getfinal <= 39){
    
                        setTimeout(function(){
    
                            document.getElementById('fieldsetthree').style.animationName = 'informationtwoani';
    
                        },0)
                        document.getElementById('fieldsetthree').style.transform = 'translate(-120px)';
                        
                    }
    
    
                    document.getElementById('retable').children[1].children[0].children[1].style.top = getfinal*4.5+'px';
                
            };
    
        }
        if(clientWidth <= 725){
    
            document.getElementById('retable').style.height = '810px';
    
            document.getElementById('retable').children[0].style.width = '100%';
    
            document.getElementById('retable').children[1].style.width = '100%';
    
            for(let a=0;a<getretabledivonep.length;a++){
    
                getretabledivonep[a].style.marginLeft = '';
    
                getretabledivonep[a].style.width = '100%';
                
                getretabledivonep[a].style.textAlign = 'center';
    
                document.getElementById('retable').children[0].children[0].style.marginLeft = '';
    
                document.getElementById('retable').children[0].children[0].style.width = '100%';
    
                document.getElementById('retable').children[0].children[0].style.textAlign = 'center';

                getretabledivonep[a].style.fontSize = '55px';
                
            }

            document.getElementById('retable').children[1].style.display = 'none';
            document.getElementById('retable').children[2].style.display = 'block';

            window.onscroll = function(){
                scrollpoint();
            };
                
            function scrollpoint(){
                
                    let getscrolltop = document.documentElement.scrollTop;
                    //console.log(getscrolltop);
                
                    let getprojectheight = document.documentElement.scrollHeight;
                    //console.log(getprojectheight);
                
                    let getclientheight = document.documentElement.clientHeight;
                    //console.log(getclientheight);
                
                    var calculateheight = getprojectheight-getclientheight;
                    //console.log(calculateheight);
                
                    var getfinal = Math.ceil((getscrolltop*100)/calculateheight);
                    //console.log(getfinal);
                
                    console.clear()
                    console.error(getfinal);
    
                    if(getfinal >= 24 && getfinal <= 39){
    
                        setTimeout(function(){
    
                            document.getElementById('fieldsetthree').style.animationName = 'informationtwoani';
    
                        },0)
                        document.getElementById('fieldsetthree').style.transform = 'translate(-120px)';
                        
                    }
    
    
                    document.getElementById('retable').children[1].children[0].children[1].style.top = getfinal*4.5+'px';
                
            };
    
        }
        // information
        if(clientWidth >= 586){
            document.getElementById('information').style.height = '450px';
            document.getElementById('information').children[0].style.width = '500px';
            document.getElementById('information').children[1].style.width = '500px';

            document.getElementById('information').children[0].children[0].style.display = 'block';
            document.getElementById('information').children[0].children[1].style.display = 'none';

            document.getElementById('information').children[1].children[0].style.display = 'block';
            document.getElementById('information').children[1].children[1].style.display = 'none';

            window.onscroll = function(){
                scrollpoint();
            };
                
            function scrollpoint(){
                
                    let getscrolltop = document.documentElement.scrollTop;
                    //console.log(getscrolltop);
                
                    let getprojectheight = document.documentElement.scrollHeight;
                    //console.log(getprojectheight);
                
                    let getclientheight = document.documentElement.clientHeight;
                    //console.log(getclientheight);
                
                    var calculateheight = getprojectheight-getclientheight;
                    //console.log(calculateheight);
                
                    var getfinal = Math.ceil((getscrolltop*100)/calculateheight);
                    //console.log(getfinal);
                
                    console.clear()
                    console.error(getfinal);
    
                    if(getfinal >= 37 && getfinal <= 63){
    
                        setTimeout(function(){
    
                            document.getElementById('fieldsetthree').style.animationName = 'informationtwoani';
    
                        },0)
                        document.getElementById('fieldsetthree').style.transform = 'translate(-120px)';
                        
                    }
    
    
                    document.getElementById('retable').children[1].children[0].children[1].style.top = getfinal*4.5+'px';
                
            };

        }
        if(clientWidth <= 585){
            document.getElementById('information').style.height = '900px';
            document.getElementById('information').children[0].style.width = '100%';
            document.getElementById('information').children[1].style.width = '100%';

            document.getElementById('information').children[0].children[0].style.display = 'none';
            document.getElementById('information').children[0].children[1].style.display = 'block';

            document.getElementById('information').children[1].children[0].style.display = 'none';
            document.getElementById('information').children[1].children[1].style.display = 'block';

            window.onscroll = function(){
                scrollpoint();
            };
                
            function scrollpoint(){
                
                    let getscrolltop = document.documentElement.scrollTop;
                    //console.log(getscrolltop);
                
                    let getprojectheight = document.documentElement.scrollHeight;
                    //console.log(getprojectheight);
                
                    let getclientheight = document.documentElement.clientHeight;
                    //console.log(getclientheight);
                
                    var calculateheight = getprojectheight-getclientheight;
                    //console.log(calculateheight);
                
                    var getfinal = Math.ceil((getscrolltop*100)/calculateheight);
                    //console.log(getfinal);
                
                    console.clear()
                    console.warn(getfinal);

                    if(getfinal >= 36 && getfinal <= 78){
                        console.log('hello')
                        setTimeout(function(){
                            document.getElementById('fieldsettwo').style.animationName='informationoneani';
                        },0)
                    
                        document.getElementById('fieldsettwo').style.transform = 'scale(1)';
                        document.getElementById('information').children[0].children[1].style.display = 'block';

                    }

                    if(getfinal >= 61){
                        console.log('hello')
                        setTimeout(function(){
                            document.getElementById('headertworetablefour').style.animationName='informationoneani';
                        },0)
                    
                        document.getElementById('headertworetablefour').style.transform = 'scale(1)';

                    }

                    document.getElementById('retable').children[1].children[0].children[1].style.top = getfinal*4.5+'px';
                
            };

        }
        if(clientWidth <= 548){

            getMessageBtn.style.display = 'block';

            navDiv.style.display = 'none';

            document.getElementById('header').children[2].children[0].style.width = '100px';

            getHeader.style.flexWrap = 'nowrap';

            getBtnMessageNumber = 0;

            document.getElementById('photoslider').style.marginTop = '10px';

            if(getBtnMessageNumber === 0){

                document.getElementById('messageletter').style.animationName = '';

                document.getElementById('messageletter').style.height = '';

                document.getElementById('messageletter').children[0].style.display = 'none';

            }

            // secondHeader
            document.getElementById('secondHeader').children[1].style.display = 'block';

            document.getElementById('secondHeader').style.flexWrap = 'nowrap';

            document.getElementById('secondHeader').children[1].children[0].style.width = '100px';

            document.getElementById('secondphotoslider').style.marginTop = '20px';

        }
        if(clientWidth >= 549){

            getMessageBtn.style.display = 'none';

            navDiv.style.display = 'block';

            getHeader.style.flexWrap = 'nowrap';

            document.getElementById('photoslider').style.marginTop = '10px';

            document.getElementById('secondphotoslider').style.marginTop = '15px';

            // Slider Menu Number
            getSliderMenuNumber = 0;

            document.getElementById('slidercontainer').style.display = 'none';

            // secondHeader
            if(getSliderMenuNumber === 0){

                document.getElementById('secondMaincontainer').style.display = 'none';

                document.getElementById('maincontainer').style.display = 'block';

            }
            document.getElementById('secondHeader').style.flexWrap = 'nowrap';

            document.getElementById('secondHeader').children[1].style.display = 'none';

        }
        if(clientWidth <= 220){

            getMessageBtn.style.display = 'block';

            navDiv.style.display = 'none';

            document.getElementById('header').children[2].children[0].style.width = '100px';

            getHeader.style.flexWrap = 'nowrap';

            getBtnMessageNumber = 0;

            document.getElementById('photoslider').style.marginTop = '10px';

            if(getBtnMessageNumber === 0){

                document.getElementById('messageletter').style.animationName = '';

                document.getElementById('messageletter').style.height = '';

                document.getElementById('messageletter').children[0].style.display = 'none';

            }

            // secondHeader
            document.getElementById('secondHeader').children[1].style.display = 'block';

            document.getElementById('secondHeader').style.flexWrap = 'nowrap';

            document.getElementById('secondHeader').children[1].children[0].style.width = '100px';

            document.getElementById('secondphotoslider').style.marginTop = '20px';

        }
        if(clientWidth <= 150){

            getMessageBtn.style.display = 'block';

            navDiv.style.display = 'none';

            document.getElementById('header').children[2].children[0].style.width = '465px';

            getHeader.style.flexWrap = 'wrap';

            document.getElementById('photoslider').style.marginTop = '48px';

            // second
            document.getElementById('secondphotoslider').style.marginTop = '58px';

        }
        if(clientWidth <=118){
        
            // secondHeader

            document.getElementById('secondHeader').children[1].style.display = 'block';

            document.getElementById('secondHeader').style.flexWrap = 'wrap';

            document.getElementById('secondHeader').children[1].children[0].style.width = '465px';

        }
        if(clientWidth >= 40){

            document.getElementById('retablephotoone').style.width = '500px';

            document.getElementById('retablephototwo').style.width = '200px';

        }
        if(clientWidth <= 40){

            getMessageBtn.style.display = 'block';

            navDiv.style.display = 'none';

            document.getElementById('header').children[2].children[0].style.width = '465px';

            getHeader.style.flexWrap = 'wrap';

            document.getElementById('photoslider').style.marginTop = '48px';

            getMessageBtn.style.display = 'block';

            navDiv.style.display = 'none';

            document.getElementById('header').children[2].children[0].style.width = '465px';

            getHeader.style.flexWrap = 'wrap';

            document.getElementById('photoslider').style.marginTop = '48px';

            document.getElementById('retable').style.height = '810px';
    
            document.getElementById('retable').children[0].style.width = '100%';
    
            document.getElementById('retable').children[1].style.width = '100%';
    
            for(let a=0;a<getretabledivonep.length;a++){
    
                getretabledivonep[a].style.marginLeft = '';
    
                getretabledivonep[a].style.width = '100%';
                
                getretabledivonep[a].style.textAlign = 'center';
    
                document.getElementById('retable').children[0].children[0].style.marginLeft = '';
    
                document.getElementById('retable').children[0].children[0].style.width = '100%';
    
                document.getElementById('retable').children[0].children[0].style.textAlign = 'center';

                getretabledivonep[a].style.fontSize = '55px';

                //
                document.getElementById('retablephotoone').style.width = '340px';

                document.getElementById('retablephototwo').style.width = '150px';
                
            }

            // secondHeader
            document.getElementById('secondHeader').children[1].style.display = 'block';

            document.getElementById('secondHeader').style.flexWrap = 'wrap';

            document.getElementById('secondHeader').children[1].children[0].style.width = '465px';

            document.getElementById('secondphotoslider').style.marginTop = '58px';

        }

        if(clientScreenWidth === 540){

            if(clientWidth <= 290){

                // secondHeader
            document.getElementById('secondHeader').children[1].style.display = 'block';

            document.getElementById('secondHeader').style.flexWrap = 'wrap';

            document.getElementById('secondHeader').children[1].children[0].style.width = '465px';

            document.getElementById('secondphotoslider').style.marginTop = '58px';

                getMessageBtn.style.display = 'block';

                navDiv.style.display = 'none';

                document.getElementById('header').children[2].children[0].style.width = '465px';

                getHeader.style.flexWrap = 'wrap';

                document.getElementById('photoslider').style.marginTop = '48px';

                document.getElementById('retable').style.height = '810px';
    
            document.getElementById('retable').children[0].style.width = '100%';
    
            document.getElementById('retable').children[1].style.width = '100%';
    
            for(let a=0;a<getretabledivonep.length;a++){
    
                getretabledivonep[a].style.marginLeft = '';
    
                getretabledivonep[a].style.width = '100%';
                
                getretabledivonep[a].style.textAlign = 'center';
    
                document.getElementById('retable').children[0].children[0].style.marginLeft = '';
    
                document.getElementById('retable').children[0].children[0].style.width = '100%';
    
                document.getElementById('retable').children[0].children[0].style.textAlign = 'center';

                getretabledivonep[a].style.fontSize = '55px';
                
            }

            document.getElementById('retablephotoone').style.width = '340px';

            document.getElementById('retablephototwo').style.width = '150px';

            }

        }

    }

    // screenWidth <= 485
    if(clientScreenWidth <= 485){

        getBtnMessageNumber = 0;

            if(getBtnMessageNumber === 0){

                document.getElementById('messageletter').style.animationName = '';

                document.getElementById('messageletter').style.height = '';

                document.getElementById('messageletter').children[0].style.display = 'none';

            }

            // secondHeader
            document.getElementById('secondHeader').children[1].style.display = 'block';

            document.getElementById('secondHeader').style.flexWrap = 'wrap';

            document.getElementById('secondHeader').children[1].children[0].style.width =clientScreenWidth-20+'px' ;

        getMessageBtn.style.display = 'block';

        navDiv.style.display = 'none';

        getHeader.style.flexWrap = 'wrap';

        document.getElementById('header').children[2].children[0].style.width = clientScreenWidth-20+'px';

        document.getElementById('photoslider').style.marginTop = '48px';

        for(let a=0;a<getretabledivonep.length;a++){

            getretabledivonep[a].style.marginLeft = '';
    
            getretabledivonep[a].style.width = '100%';
            
            getretabledivonep[a].style.textAlign = 'center';
    
            getretabledivonep[a].style.fontSize = '40px';
            
        }
        document.getElementById('secondretable').children[0].children[1].style.marginTop = '60px';
        //secondretable
        for(let a=0;a<getsecondretabledivonep.length;a++){

            //getsecondretabledivonep[a].style.marginLeft = '';
    
            getsecondretabledivonep[a].style.width = '100%';
            
            getsecondretabledivonep[a].style.textAlign = 'center';
    
            getsecondretabledivonep[a].style.fontSize = '40px';
            
        }

        document.getElementById('retable').children[0].children[0].style.marginLeft = '';

        document.getElementById('retable').children[0].children[0].style.width = '100%';

        document.getElementById('retable').children[0].children[0].style.textAlign = 'center';
    
        //
        document.getElementById('retable').children[0].children[1].style.top = '11px';
        document.getElementById('retable').children[0].children[2].style.top = '68px';

        document.getElementById('retable').children[1].style.display = 'none';
        document.getElementById('retable').children[2].style.display = 'block';

        document.getElementById('retablephotoone').style.width = '220px';
        document.getElementById('retablephototwo').style.width = '80px';
        document.getElementById('retablethree').children[1].style.marginLeft = '170px';

        document.getElementById('information').children[0].children[0].style.display = 'none';
        document.getElementById('information').children[0].children[1].style.display = 'block';

        document.getElementById('information').children[1].children[0].style.display = 'none';
        document.getElementById('information').children[1].children[1].style.display = 'block';

        window.onscroll = function(){
            scrollpoint();
        };
                
            function scrollpoint(){
                
                    let getscrolltop = document.documentElement.scrollTop;
                    //console.log(getscrolltop);
                
                    let getprojectheight = document.documentElement.scrollHeight;
                    //console.log(getprojectheight);
                
                    let getclientheight = document.documentElement.clientHeight;
                    //console.log(getclientheight);
                
                    var calculateheight = getprojectheight-getclientheight;
                    //console.log(calculateheight);
                
                    var getfinal = Math.ceil((getscrolltop*100)/calculateheight);
                    //console.log(getfinal);
                
                    console.clear()
                    console.warn(getfinal);

                    if(getfinal >= 36 && getfinal <= 78){
                        console.log('hello')
                        setTimeout(function(){
                            document.getElementById('fieldsettwo').style.animationName='informationoneani';
                        },0)
                    
                        document.getElementById('fieldsettwo').style.transform = 'scale(1)';
                        document.getElementById('information').children[0].children[1].style.display = 'block';

                    }

                    if(getfinal >= 61){
                        console.log('hello')
                        setTimeout(function(){
                            document.getElementById('headertworetablefour').style.animationName='informationoneani';
                        },0)
                    
                        document.getElementById('headertworetablefour').style.transform = 'scale(1)';

                    }

                    document.getElementById('retable').children[1].children[0].children[1].style.top = getfinal*4.5+'px';
                
            };

    }
        
}
// Message Btn 
document.getElementById('header').children[1].children[0].children[0].addEventListener('click',function(e){
    
    getBtnMessageNumber++;

    if(getBtnMessageNumber===2){

        getBtnMessageNumber = 0;

    }

    if(getBtnMessageNumber === 1){

        document.getElementById('messageletter').style.animationName = 'msgletterani';

        document.getElementById('header').children[1].children[0].children[0].setAttribute('disabled','');

        setTimeout(function(){

            document.getElementById('messageletter').style.animationName = '';

            document.getElementById('messageletter').style.height = '150px';

            document.getElementById('messageletter').children[0].style.display = 'block';

        },0)
        setTimeout(function(){

            document.getElementById('header').children[1].children[0].children[0].removeAttribute('disabled','')

        },12)

    }else{

        document.getElementById('messageletter').style.animationName = '';

        document.getElementById('messageletter').style.height = '';

        document.getElementById('messageletter').children[0].style.display = 'none';

    }

});



// Back
document.getElementById('secondSlider').children[0].children[0].children[0].addEventListener('click',function(e){

    document.getElementById('slidercontainer').style.display = 'none';

    getSliderMenuNumber = 0;

    document.getElementById('secondMaincontainer').style.display = 'none';

    document.getElementById('maincontainer').style.display = 'block';

})
console.log(getSliderMenuNumber)
// Menu
document.getElementById('header').children[2].children[0].children[0].addEventListener('click',function(e){

    getSliderMenuNumber++;

    console.log(getSliderMenuNumber)
    

    if(getSliderMenuNumber === 1){

        document.getElementById('secondSlidercontainer').style.display = 'block';

        document.getElementById('secondMaincontainer').style.display = 'block';

        document.getElementById('maincontainer').style.display = 'none';

    }else{

        document.getElementById('secondSlidercontainer').style.display = 'none';

        document.getElementById('secondMaincontainer').style.display = 'none';

        document.getElementById('maincontainer').style.display = 'block';

    }

})

// slider inside message

document.getElementById('secondSlider').children[0].children[1].children[0].addEventListener('mouseover',function(e){

    setTimeout(function(){

        document.getElementById('secondSlidermessage').style.animationName = 'secondSlidermessageani';

    },0)

    setTimeout(function(){

        document.getElementById('secondSlidermessage').style.animationName = '';

        document.getElementById('secondSlidermessage').style.transform = 'scale(0.8)';

    },1)



})

document.getElementById('secondSlider').children[0].children[1].children[0].addEventListener('mouseout',function(e){

    document.getElementById('secondSlidermessage').style.animationName = '';

    document.getElementById('secondSlidermessage').style.transform = '';

})

let image = 0;
let getOne = 0;


document.getElementById('slidernextbtn').addEventListener('click',function(e){

    if(getOne === 1 || getOne === 2 || getOne === 3 || getOne === 4){

        setTimeout(function(){

             document.getElementById('sliderimageone').children[0].style.animationName = 'sliderimagedivani';
             document.getElementById('secondsliderimageone').children[0].style.animationName = 'secondsliderimagedivani';

        },0)
        setTimeout(function(){

            document.getElementById('sliderimageone').children[0].style.animationName = '';
            document.getElementById('secondsliderimageone').children[0].style.animationName = '';

            document.getElementById('sliderimageone').children[0].style.display = 'none';
            document.getElementById('secondsliderimageone').children[0].style.display = 'none';

            document.getElementById('sliderimageone').style.display = 'none';
            document.getElementById('secondsliderimageone').style.display = 'none';

            document.getElementById('sliderimagetwo').children[0].style.display = 'block';
            document.getElementById('secondsliderimagetwo').children[0].style.display = 'block';

            document.getElementById('sliderimagetwo').style.display = 'block';
            document.getElementById('secondsliderimagetwo').style.display = 'block';

            document.getElementById('ulslider').children[0].children[0].style.backgroundColor = 'white';
            document.getElementById('secondulslider').children[0].children[0].style.backgroundColor = 'white';


            document.getElementById('ulslider').children[0].children[1].style.backgroundColor = 'green';
            document.getElementById('secondulslider').children[0].children[1].style.backgroundColor = 'green';


        },300)

        getOne = 5;


    }else if(getOne === 6 || getOne === 7 || getOne === 8 || getOne === 9){

        setTimeout(function(){

            document.getElementById('sliderimagetwo').children[0].style.animationName = 'sliderimagedivani';
            document.getElementById('secondsliderimagetwo').children[0].style.animationName = 'secondsliderimagedivani';

        },0)

        setTimeout(function(){

            document.getElementById('sliderimagetwo').children[0].style.animationName = '';
            document.getElementById('secondsliderimagetwo').children[0].style.animationName = '';

            document.getElementById('sliderimagetwo').children[0].style.display = 'none';
            document.getElementById('secondsliderimagetwo').children[0].style.display = 'none';

            document.getElementById('sliderimagetwo').style.display = 'none';
            document.getElementById('secondsliderimagetwo').style.display = 'none';


            document.getElementById('sliderimagethree').style.display = 'block';
            document.getElementById('secondsliderimagethree').style.display = 'block';

            document.getElementById('sliderimagethree').children[0].style.display = 'block';
            document.getElementById('secondsliderimagethree').children[0].style.display = 'block';

            document.getElementById('ulslider').children[0].children[1].style.backgroundColor = 'white';
            document.getElementById('secondulslider').children[0].children[1].style.backgroundColor = 'white';

            document.getElementById('ulslider').children[0].children[2].style.backgroundColor = 'green';
            document.getElementById('secondulslider').children[0].children[2].style.backgroundColor = 'green';

        },300)

        getOne = 10;
        
    }else if(getOne === 11 || getOne === 12 || getOne === 13 || getOne === 14){

        setTimeout(function(){

            document.getElementById('sliderimagethree').children[0].style.animationName = 'sliderimagedivani';
            document.getElementById('secondsliderimagethree').children[0].style.animationName = 'secondsliderimagedivani';

        },0)

        setTimeout(function(){

            document.getElementById('sliderimagethree').children[0].style.animationName = '';
            document.getElementById('secondsliderimagethree').children[0].style.animationName = '';

            document.getElementById('sliderimagethree').children[0].style.display = 'none';
            document.getElementById('secondsliderimagethree').children[0].style.display = 'none';

            document.getElementById('sliderimagethree').style.display = 'none';
            document.getElementById('secondsliderimagethree').style.display = 'none';

            document.getElementById('sliderimageone').style.display = 'block';
            document.getElementById('secondsliderimageone').style.display = 'block';

            document.getElementById('sliderimageone').children[0].style.display = 'block';
            document.getElementById('secondsliderimageone').children[0].style.display = 'block';

            document.getElementById('ulslider').children[0].children[2].style.backgroundColor = 'white';
            document.getElementById('secondulslider').children[0].children[2].style.backgroundColor = 'white';

            document.getElementById('ulslider').children[0].children[0].style.backgroundColor = 'green';
            document.getElementById('secondulslider').children[0].children[0].style.backgroundColor = 'green';

        },300)

        getOne = 0;

    }

})

document.getElementById('sliderprevbtn').addEventListener('click',function(e){

    if(getOne === 1 || getOne === 2 || getOne === 3 || getOne === 4){

        getOne = 10;

        setTimeout(function(){

            document.getElementById('sliderimageone').children[0].style.animationName = 'sliderimagedivani';

            document.getElementById('sliderimageone').children[0].style.display = 'block';

            document.getElementById('sliderimageone').style.display = 'block';

            // second
            document.getElementById('secondsliderimageone').children[0].style.animationName = 'secondsliderimagedivani';

            document.getElementById('secondsliderimageone').children[0].style.display = 'block';

            document.getElementById('secondsliderimageone').style.display = 'block';

        },0)
        setTimeout(function(){

            document.getElementById('sliderimageone').children[0].style.animationName = '';

            document.getElementById('sliderimageone').children[0].style.display = 'none';

            document.getElementById('sliderimageone').style.display = 'none';

            document.getElementById('sliderimageone').children[0].style.animationName = '';

            document.getElementById('sliderimageone').children[0].style.display = 'none';

            document.getElementById('sliderimageone').style.display = 'none';

            document.getElementById('sliderimagethree').children[0].style.display = 'block';

            document.getElementById('sliderimagethree').style.display = 'block';

            document.getElementById('ulslider').children[0].children[0].style.backgroundColor = 'white';

            document.getElementById('ulslider').children[0].children[2].style.backgroundColor = 'green';

            // second
            document.getElementById('secondsliderimageone').children[0].style.animationName = '';

            document.getElementById('secondsliderimageone').children[0].style.display = 'none';

            document.getElementById('secondsliderimageone').style.display = 'none';

            document.getElementById('secondsliderimageone').children[0].style.animationName = '';

            document.getElementById('secondsliderimageone').children[0].style.display = 'none';

            document.getElementById('secondsliderimageone').style.display = 'none';

            document.getElementById('secondsliderimagethree').children[0].style.display = 'block';

            document.getElementById('secondsliderimagethree').style.display = 'block';

            document.getElementById('secondulslider').children[0].children[0].style.backgroundColor = 'white';

            document.getElementById('secondulslider').children[0].children[2].style.backgroundColor = 'green';

        },300)

    }else if(getOne === 6 || getOne === 7 || getOne === 8 || getOne === 9){

        getOne = 0;

        setTimeout(function(){

            document.getElementById('sliderimagetwo').children[0].style.animationName = 'sliderimagedivani';

            document.getElementById('sliderimagetwo').children[0].style.display = 'block';

            document.getElementById('sliderimagetwo').style.display = 'block';

            // second
            document.getElementById('secondsliderimagetwo').children[0].style.animationName = 'secondsliderimagedivani';

            document.getElementById('secondsliderimagetwo').children[0].style.display = 'block';

            document.getElementById('secondsliderimagetwo').style.display = 'block';

        },0)

        setTimeout(function(){

            document.getElementById('sliderimagetwo').children[0].style.animationName = '';

            document.getElementById('sliderimagetwo').children[0].style.display = 'none';

            document.getElementById('sliderimagetwo').style.display = 'none';

            document.getElementById('sliderimageone').children[0].style.display = 'block';

            document.getElementById('sliderimageone').style.display = 'block';

            document.getElementById('ulslider').children[0].children[1].style.backgroundColor = 'white';

            document.getElementById('ulslider').children[0].children[0].style.backgroundColor = 'green';

            // second
            document.getElementById('secondsliderimagetwo').children[0].style.animationName = '';

            document.getElementById('secondsliderimagetwo').children[0].style.display = 'none';

            document.getElementById('secondsliderimagetwo').style.display = 'none';

            document.getElementById('secondsliderimageone').children[0].style.display = 'block';

            document.getElementById('secondsliderimageone').style.display = 'block';

            document.getElementById('secondulslider').children[0].children[1].style.backgroundColor = 'white';

            document.getElementById('secondulslider').children[0].children[0].style.backgroundColor = 'green';

        },300)

    }else if(getOne === 11 || getOne === 12 || getOne === 13 || getOne === 14){

        getOne = 5;

        setTimeout(function(){

            document.getElementById('sliderimagethree').children[0].style.animationName = 'sliderimagedivani';

            document.getElementById('sliderimagethree').children[0].style.display = 'block';

            document.getElementById('sliderimagethree').style.display = 'block';

            // second
            document.getElementById('secondsliderimagethree').children[0].style.animationName = 'secondsliderimagedivani';

            document.getElementById('secondsliderimagethree').children[0].style.display = 'block';

            document.getElementById('secondsliderimagethree').style.display = 'block';

        },0)
        setTimeout(function(){

            document.getElementById('sliderimagethree').children[0].style.animationName = '';

            document.getElementById('sliderimagethree').children[0].style.display = 'none';

            document.getElementById('sliderimagethree').style.display = 'none';

            document.getElementById('sliderimagetwo').children[0].style.display = 'block';

            document.getElementById('sliderimagetwo').style.display = 'block';

            document.getElementById('ulslider').children[0].children[2].style.backgroundColor = 'white';

            document.getElementById('ulslider').children[0].children[1].style.backgroundColor = 'green';

            // second
            document.getElementById('secondsliderimagethree').children[0].style.animationName = '';

            document.getElementById('secondsliderimagethree').children[0].style.display = 'none';

            document.getElementById('secondsliderimagethree').style.display = 'none';

            document.getElementById('secondsliderimagetwo').children[0].style.display = 'block';

            document.getElementById('secondsliderimagetwo').style.display = 'block';

            document.getElementById('secondulslider').children[0].children[2].style.backgroundColor = 'white';

            document.getElementById('secondulslider').children[0].children[1].style.backgroundColor = 'green';


        },300)

    }
})

setInterval(function(){

    getOne++;
    if(getOne === 16){
        getOne = 1;
    }
    //console.clear()
    //console.log(getOne)

    if(getOne === 1){

        document.getElementById('sliderimageone').style.display = 'block';

        document.getElementById('sliderimageone').children[0].style.display = 'block';

        document.getElementById('ulslider').children[0].children[0].style.backgroundColor = 'green';

        // second
        document.getElementById('secondsliderimageone').style.display = 'block';

        document.getElementById('secondsliderimageone').children[0].style.display = 'block';

        document.getElementById('secondulslider').children[0].children[0].style.backgroundColor = 'green';

    }else if(getOne === 5){

        setTimeout(function(){

            document.getElementById('sliderimageone').children[0].style.animationName = 'sliderimagedivani';
            //second
            document.getElementById('secondsliderimageone').children[0].style.animationName = 'secondsliderimagedivani';

        },0)

        setTimeout(function(){

            document.getElementById('sliderimageone').children[0].style.animationName = '';

            document.getElementById('sliderimageone').children[0].style.display = 'none';

            document.getElementById('sliderimageone').style.display = 'none';

            document.getElementById('sliderimagetwo').children[0].style.display = 'block';

            document.getElementById('sliderimagetwo').style.display = 'block';

            document.getElementById('ulslider').children[0].children[0].style.backgroundColor = 'white';

            document.getElementById('ulslider').children[0].children[1].style.backgroundColor = 'green';

            // second
            document.getElementById('secondsliderimageone').children[0].style.animationName = '';

            document.getElementById('secondsliderimageone').children[0].style.display = 'none';

            document.getElementById('secondsliderimageone').style.display = 'none';

            document.getElementById('secondsliderimagetwo').children[0].style.display = 'block';

            document.getElementById('secondsliderimagetwo').style.display = 'block';

            document.getElementById('secondulslider').children[0].children[0].style.backgroundColor = 'white';

            document.getElementById('secondulslider').children[0].children[1].style.backgroundColor = 'green';

        },300)

    }else if(getOne === 10){

        setTimeout(function(){

            document.getElementById('sliderimagetwo').children[0].style.animationName = 'sliderimagedivani';
            // second
            document.getElementById('secondsliderimagetwo').children[0].style.animationName = 'secondsliderimagedivani';

        },0)

        setTimeout(function(){

            document.getElementById('sliderimagetwo').children[0].style.animationName = '';

            document.getElementById('sliderimagetwo').children[0].style.display = 'none';

            document.getElementById('sliderimagetwo').style.display = 'none';

            document.getElementById('sliderimagethree').style.display = 'block';

            document.getElementById('sliderimagethree').children[0].style.display = 'block';

            document.getElementById('ulslider').children[0].children[1].style.backgroundColor = 'white';

            document.getElementById('ulslider').children[0].children[2].style.backgroundColor = 'green';

            // second
            document.getElementById('secondsliderimagetwo').children[0].style.animationName = '';

            document.getElementById('secondsliderimagetwo').children[0].style.display = 'none';

            document.getElementById('secondsliderimagetwo').style.display = 'none';

            document.getElementById('secondsliderimagethree').style.display = 'block';

            document.getElementById('secondsliderimagethree').children[0].style.display = 'block';

            document.getElementById('secondulslider').children[0].children[1].style.backgroundColor = 'white';

            document.getElementById('secondulslider').children[0].children[2].style.backgroundColor = 'green';

        },300)

    }else if(getOne === 15){

        setTimeout(function(){

            document.getElementById('sliderimagethree').children[0].style.animationName = 'sliderimagedivani';
            // second
            document.getElementById('secondsliderimagethree').children[0].style.animationName = 'secondsliderimagedivani';

        },0)

        setTimeout(function(){

            document.getElementById('sliderimagethree').children[0].style.animationName = '';

            document.getElementById('sliderimagethree').children[0].style.display = 'none';

            document.getElementById('sliderimagethree').style.display = 'none';

            document.getElementById('sliderimageone').style.display = 'block';

            document.getElementById('sliderimageone').children[0].style.display = 'block';

            document.getElementById('ulslider').children[0].children[2].style.backgroundColor = 'white';

            document.getElementById('ulslider').children[0].children[0].style.backgroundColor = 'green';

            // second
            document.getElementById('secondsliderimagethree').children[0].style.animationName = '';

            document.getElementById('secondsliderimagethree').children[0].style.display = 'none';

            document.getElementById('secondsliderimagethree').style.display = 'none';

            document.getElementById('secondsliderimageone').style.display = 'block';

            document.getElementById('secondsliderimageone').children[0].style.display = 'block';

            document.getElementById('secondulslider').children[0].children[2].style.backgroundColor = 'white';

            document.getElementById('secondulslider').children[0].children[0].style.backgroundColor = 'green';

        },300)

    }

},1000)



setTimeout(function(){

    document.getElementById('retablephotoone').style.animationName = 'retableimgoneani';

    document.getElementById('retablephototwo').style.animationName = 'retableimgtwoani';

},0)

setTimeout(function(){

    document.getElementById('retablephotoone').style.animationName = '';

    document.getElementById('retablephototwo').style.animationName = '';

},2050)

setInterval(function(){

    setInterval(function(){

        document.getElementById('retablephotoone').style.animationName = 'retableimgoneani';

        document.getElementById('retablephototwo').style.animationName = 'retableimgtwoani';

    },0)

    setInterval(function(){

        document.getElementById('retablephotoone').style.animationName = '';

        document.getElementById('retablephototwo').style.animationName = '';

    },2050)
    

},3000);

document.getElementById('great').addEventListener('click',function(e){

    document.getElementById('randompricediv').style.display = 'none';
    document.getElementById('lesspricediv').style.display = 'none';
    document.getElementById('greaterpricediv').style.display = 'block';

})

document.getElementById('less').addEventListener('click',function(e){

    document.getElementById('randompricediv').style.display = 'none';
    document.getElementById('greaterpricediv').style.display = 'none';
    document.getElementById('lesspricediv').style.display = 'block';

})

document.getElementById('random').addEventListener('click',function(e){

    document.getElementById('randompricediv').style.display = 'block';
    document.getElementById('greaterpricediv').style.display = 'none';
    document.getElementById('lesspricediv').style.display = 'none';

})

