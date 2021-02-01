//Cookies (expire date qoymaq lazimdir)


// document.cookie       //type in console                                //cookies
// document.cookie='user=Rufat'    //cookie sonunda elave olunacaq


// path =/             //access from all pages                             //path
// path =/admin             //access from admin pages


/* at site.com */                                                      //domain elave edende, subdoimnda-da cookie add olur
// document.cookie = "user=John; domain=site.com"
/* at forum.site.com */
// alert(document.cookie); // has cookie user=John



// +1 day from now                                                      //expired cookie
// let date = new Date(Date.now() + 86400e3);
// date = date.toUTCString();
// document.cookie = "user=John; expires=" + date;



/* cookie will die in +1 hour from now */                           //also expired cookie
// document.cookie = "user=John; max-age=3600";                         
/* delete cookie (let it expire right now) */
// document.cookie = "user=John; max-age=0";



// assuming we're on https:// now                         //secure cookie (only accessible over HTTPS). Amma web-socket ya HTTP olsada "SECURE" etmek olar. Chunku domain asilidi protocol yox 
// document.cookie = "user=John; secure";   





                             //localStorage, sessionStorag

// localStorage-da cookiesdaki kimi subdomaina add etmek olmur !!!