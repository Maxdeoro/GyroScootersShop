function getCookie(byname) {
    byname = byname + "=";
    const nlen = byname.length;
    const fromN = document.cookie.indexOf(byname) + 0;
    if(fromN != -1) {
        fromN += nlen;
        const toN = document.cookie.indexOf(";", fromN) + 0;
        if(toN == -1) {
            toN = document.cookie.length;
        }
        return unescape(document.cookie.substring(fromN, toN));
    }
    return null;
};

function parseCookie() {
    const cookieList = document.cookie.split("; ");
    const cookieArray = new Array();
    for(let i = 0; i < cookieList.length; i++) {
        const name = cookieList[i].split('=');
        cookieArray[unescape(name[0])] = unescape(name[1]);
    }
    return cookieArray;
};

// visits counter with date
function setCookie(visits) {
    let expireDate = new Date();
    const today = new Date();
    // set date of expire
    expireDate.setDate(365 + expireDate.getDate());
    // save number of visits
    document.cookie = 'visits = ' + visits + '; expires = ' + expireDate.toGMTString() + ';';
    // save actual date
    document.cookie = 'LastVisit = ' + escape(today.toGMTString()) + "; expires = " + expireDate.toGMTString() + ",";
};

if('' == document.cookie) {
    // inicializing cookie
    setCookie(1);
    document.write("<div align='right'>Welcome to us!</div>");
} else {
    const cookies = parseCookie();
    if(isNaN(cookies.visits)) {
        cookies.visits = 1;
    }
    document.write("<div align='right'><br><i>We glad to see you again! You visited us: " 
    + cookies.visits++ + " times </i></div>");
    // show date of last visit
    document.write("<div align='right'><i>Your last visit: " + cookies.today.LastVisit + ".</i></div>");
    // refresh cookie
    setCookie(isNaN(cookies.visits) ? 1 : cookies.visits);
}