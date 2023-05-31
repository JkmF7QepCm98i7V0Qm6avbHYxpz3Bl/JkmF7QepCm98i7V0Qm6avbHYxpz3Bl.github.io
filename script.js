

function activePage(index) {
  let navigations = document.getElementsByClassName('links');
  navigations[index].style.backgroundColor = "blue";
}


/*Statistics*/
function storageConfig() {
  if (localStorage.getItem('visits') == null) {
    localStorage.setItem('visits', 1)
  } else if (localStorage.getItem('admin')) {
    return;
  } else {
    localStorage.setItem('visits', parseInt(localStorage.getItem('visits')) + 1)
  }

  fetch('https://getpantry.cloud/apiv1/pantry/f444f2b6-66d7-47f7-a201-96e086aaef38/basket/webassign')
    .then(response => response.json())
    .then(data => {
      fetch('https://getpantry.cloud/apiv1/pantry/f444f2b6-66d7-47f7-a201-96e086aaef38/basket/webassign', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'views': data.views + 1
        })
      });

    })


}

var path = window.location.pathname.split(/(\\|\/)/g).pop()


switch (path) {
  case "":
    reqHTTP();
    activePage(0);
    storageConfig();
    break;

  case "index.html":
    reqHTTP();
    activePage(0);
    storageConfig();
    break;
  case "moon.html":
    activePage(1);
    break;
  case "imageoftheday.html":
    activePage(3);
    break;
  case "solarsystem.html":
    activePage(2);
    break;
  case "references.html":
    activePage(4);
    fetch('https://getpantry.cloud/apiv1/pantry/f444f2b6-66d7-47f7-a201-96e086aaef38/basket/webassign')
      .then(response => response.json())
      .then(data => {
        document.getElementById('visits').innerText = `You visited this website ${localStorage.getItem('visits')} time(s).\n\nTotal Views: ${data.views}.`
      });
    break;
}



function moveButton() {
  let button = document.getElementById('no');

  if (parseInt(button.style.left) < 0) {
    button.style.left = "0px";
  } else {
    button.style.left = "-110px";
  }
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function Yes() {
  let innerdiv = document.getElementById('innerdiv')
  innerdiv.innerHTML = '<p style="font-size: 18px;">Thanks for your valuable feedback😈</p>';
  let btns = document.getElementsByClassName('btn');

  btns[0].hidden = true;
  btns[1].hidden = true;

  await sleep(3000);

  innerdiv.hidden = true;
}

function reqHTTP() {
  const r = new XMLHttpRequest();
  r.open("GET", "https://webassigncs1033.p3p.repl.co/statics");
  r.timeout = 180000;
  r.send();
}