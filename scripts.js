let user = undefined
let basics = document.getElementById('basics')
let story = document.getElementById('story')
let image = document.getElementsByTagName('img')[0]
let headerName = document.getElementsByTagName('h1')[0]

function reqListener () {
  //user = JSON.parse(this.responseText);
  updateUser(user)
}

let url = "https://api.github.com/users/cutlerjd"
fetch(url)
    .then(function(response) {
      if (
        response.headers.get("content-type").indexOf("application/json") !== -1
      ) {
        // checking response header
        //.json() parses the response.
        return response.json();
      } else {
        throw new TypeError(
          'Response from "' + url + '" has unexpected "content-type"'
        );
      }
    })
    .then(function(data) {
      console.log('JSON from "' + url + '" parsed successfully!');
      console.log(data);
      user = data
      reqListener()
    })
    .catch(function(error) {
      console.error(error.message);
    });

    function successHandler() {}
    function errorHandler() 

function updateUser(user){
    image.setAttribute("src",user.avatar_url)
    let basics_HTML = `
    <div id="name"><span>Name :</span> ${user.name}</div>
                <div id="Github URL"><span>Github URL:</span> <a href="${user.html_url}">${user.login}</a></div>
                <div id="email"><span>Email:</span> ${user.email}</div>
                <div id="company"><span>Company: </span>${user.company}</div>
                <div id="website"><span>Website: </span><a href="${user.blog}">${user.blog}</a></div>`
    basics.innerHTML = basics_HTML
    let story_HTML = `
    <p>${user.bio}</p>`
    story.innerHTML = story_HTML
    let headerText = document.createTextNode(user.name)
    headerName.appendChild(headerText)
}