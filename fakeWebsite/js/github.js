let usersList = document.getElementById("u-list");
let usersDescription = document.querySelector(".container");
// let leftSide = document.querySelector(".left-side");
let rightSide = document.querySelector(".right-side");

let gitHub = async function () {
  let response = await fetch("https://api.github.com/users");
  let data = await response.json();
  displayUserList(data);
  displayUserData(data, 0);
};

function displayUserList(apiData) {
  apiData.forEach((users, index) => {
    let div = document.createElement("div");
    div.setAttribute("class", "list-items");
    div.innerHTML = `<img src='${users.avatar_url}' class='users-image'/> <h3>${users.login}</h3>`;
    usersList.append(div);

    div.addEventListener("click", () => {
      displayUserData(apiData, index);
    });
  });
}

let displayUserData = async function displayUsers(users, index) {
  let response = await fetch(
    `https://api.github.com/users/${users[index].login}`
  );
  let userDetails = await response.json();
  console.log(userDetails);
//   leftSide.innerHTML = ``;
  rightSide.innerHTML = `
    <div class = 'card'>
        <div class = 'card-head'>
            <img src='${users[index].avatar_url}' class='profile-img' />
            <div class = 'card-title'>
                <h3>${userDetails.name}</h3>
                <a>@${users[index].login}</a>
            </div>
        </div>
        <div class='card-body'>
            <p>${userDetails.bio}
                sndjnffknk jsndvkj jcbsd sjdnjsnvdj sjnsvdsijvb sdvbsv
                jsfsjvbv sbdvsvbdiuwe visbvdbsvibs ibsdvsbvisv isdbvsivbsv sibvdisbvs suvdhs
                sdnsiuv dvhisv svuisv sv svvsivuisvhs vsvuivs vudvhw vsdvnsvs vvusv suivd
                svd uvbsvsuivvjoiw oijwdc viv oijsv dvov ndv vdnv svdsovsjv svojv dvis dv
                jsidviusvnsvjosivsvdj
            </p>
            <div class='user-following'>
                <div class='public-repo'>
                    <h3>Public Repo</h3>
                    <h5>${userDetails.public_repos}</h5>
                </div>    
                <div class='followers'>
                    <h3>Followers</h3>
                    <h5>${userDetails.followers}</h5>
                </div>    
                <div class='following'>
                    <h3>Following</h3>
                    <h5>${userDetails.following}</h5>
                </div>            
            </div>
        </div>
        <div class='card-footer'>
            <div class='user-location'> 
                <i class="fa-solid fa-location-dot"></i>           
                <span>${userDetails.location}</span>
            </div>
            <div class='user-blog'>  
                <i class="fa-solid fa-location-dot"></i>          
                <span>${userDetails.blog}sohdhshs</span>
            </div>
            <div class='user-email'>            
                <i class="fa-solid fa-envelope-open-text"></i>
                <span>${userDetails.email}</span>
            </div>
            <div class='user-github'> 
                <i class="fa-brands fa-github"></i>           
                <span>${userDetails.url}</span>
            </div>
        </div>
    </div>
    `;
};

gitHub();
