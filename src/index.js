import QAlist from './util/QAlist'

$(document).ready(function () {
    switchPage('mainPage',[btnInit]);
})

function btnInit(){
    $('.btnInitTar').each(function(){
        let domStr = $(this).attr('data-link');
        $(this).click(function(){
            switchPage(domStr);
            let isPhoneSize = window.innerWidth <= 800 ? true : false;
            if(isPhoneSize){$('#btn-menu').click();}
        })
    });
}

window.winReload = function(){
    window.location.reload();
}

window.srcollToBottom = function(){
    console.log('1');
    window.scrollTo(0,2000);
}

window.particlesJSinit = function(){
    particlesJS.load('wrapper-particlesJS', './src/util/particlesjs-config.json', function() {
        console.log('callback - particles.js config loaded');
    });
}

window.switchPage = function(page,callbackFns = false){
    if(page == null){
        return
    }

    switch (page){
        case "mainPage":
            $('#app').load('./src/pages/mainPage.html');
            window.location.hash = 'mainPage';
        break;
        case "carLoan":
            window.location.hash = 'carLoan';
            $('#app').load('./src/pages/carLoan.html'); 
        break;
        case "creditLoanPage":
            $('#app').load('./src/pages/creditLoanPage.html');
            window.location.hash = 'creditLoanPage';
        break;
        case "preferPage":
            $('#app').load('./src/pages/preferPage.html');
            window.location.hash = 'preferPage';
        break;
        case "secondOrderLoan":
            $('#app').load('./src/pages/secondOrderLoan.html');
            window.location.hash = 'secondOrderLoan';
        break;
    }

    if(callbackFns){
        for(let i=0;i<callbackFns.length;i++){
            setTimeout(callbackFns[i],1000)
        }
        
    }

    let domlinks = $('a[data-link]');
    domlinks.each(function(){
        $(this).removeClass('active');
    })
    
    let domTars = $(`a[data-link="${page}"]`);
    domTars.each(function(){
        $(this).addClass('active');
    })
}

window.QAlist = QAlist;