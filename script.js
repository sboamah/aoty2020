function Album(props) {
  return (
    React.createElement("div", { className: "album" },
    React.createElement("img", { src: props.img }),
    React.createElement("h1", null, props.name),
    React.createElement("h2", null, props.artist),
    React.createElement("p", null, props.release)));



}
var app =
React.createElement("div", null,
React.createElement(Album, { name: "After Hours", artist: "The Weeknd", img: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png", release: "March 20, 2020" }),
React.createElement(Album, { name: "Heaven to a Tortured Mind", artist: "Yves Tumor", img: "https://media.pitchfork.com/photos/5e84a2cee21e4f0009eaf016/1:1/w_600/Heaven%20to%20a%20Tortured%20Mind_Yves%20Tumor.jpg", release: "April 3, 2020" }),

React.createElement(Album, { name: "Ungodly Hour", artist: "Chloe x Halle", img: "https://media.pitchfork.com/photos/5efa5f50dc55f46b46323eb1/1:1/w_600/Ungodly%20Hour_Chloe%20x%20Halle.jpg", release: "June 12, 2020" }),

React.createElement(Album, { name: "Shabrang", artist: "Sevdaliza", release: "August 28, 2020", img: "https://media.pitchfork.com/photos/5f46748da3044e1e655f14a4/1:1/w_600/shabrang_sevdalia.jpg" }),

React.createElement(Album, { name: "Ho Why Is You Here?", artist: "Flo Milli", img: "https://media.pitchfork.com/photos/5f3aa032eb982d18c453e0b0/1:1/w_600/Ho,%20Why%20Is%20You%20Here?_flo%20milli.jpg", release: "July 24, 2020" }),
React.createElement(Album, { name: "Lianne La Havas", artist: "Lianne La Havas", img: "https://www.liannelahavas.com/graphics/LianneAlbumCover.png", release: "July 17, 2020" }),

React.createElement(Album, { name: "KiCK I", artist: "Arca", img: "https://upload.wikimedia.org/wikipedia/en/a/ad/ArcaKickICover.jpg", release: "June 26, 2020" }),

React.createElement(Album, { name: "It Is What It Is", artist: "Thundercat", release: "April 3, 2020", img: "https://upload.wikimedia.org/wikipedia/en/6/69/Cover_art_for_It_Is_What_It_Is_by_Thundercat.jpg" }),

React.createElement(Album, { name: "Limbo", artist: "Amin\xE9", release: "August 7, 2020", img: "https://upload.wikimedia.org/wikipedia/en/thumb/9/92/Limbo_by_Amin%C3%A9_Album_Cover.png/220px-Limbo_by_Amin%C3%A9_Album_Cover.png" }));



ReactDOM.render(app, document.querySelector('#app'));