
const Http = new XMLHttpRequest();

function modePage(){ 
    const url = `http:/users/modes`;
    console.log("here");

    Http.open("GET", url, true);
    Http.send();

    Http.onreadystatechange = (e) => {
      location.href = Http.responseURL;
    };
};

function weaponPage(){
  const url = `http:/users/weapons`;
  console.log("here");

  Http.open("GET", url, true);
  Http.send();

  Http.onreadystatechange = (e) => {
    location.href = Http.responseURL;
  };
};
function home(){
  const url = `http:/users/home`;
  console.log("here");

  Http.open("GET", url, true);
  Http.send();

  Http.onreadystatechange = (e) => {
    location.href = Http.responseURL;
  };
};
function warzonePage(){
  const url = `http:/users/warzone`;
  console.log("here");

  Http.open("GET", url, true);
  Http.send();

  Http.onreadystatechange = (e) => {
    location.href = Http.responseURL;
  };
};