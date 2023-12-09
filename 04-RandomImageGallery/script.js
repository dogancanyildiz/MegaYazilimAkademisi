var photos = document.getElementsByTagName("img");

for (i=0; i<12; i++) {
    photos[i].src = "https://picsum.photos/200/200?random=" + Math.floor(Math.random() * 100);
}
function reload() {
    window.location.reload();
}
 