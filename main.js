const linksSocialMedia = {
  github: 'gsuzaki',
  youtube: 'channel/UC_0uxaZLjiGNw8aKJ7rF-vA',
  instagram: 'gsuzaki',
  facebook: 'guilherme.suzaki',
  twitter: 'gsuzaki'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`

    // alert(li.children[0].href)
  }

  // Jeito dificil de selecionar um elemento HTML
  // document.getElementById('userName').textContent = 'Olivia'

  // jeito facil de selecionar um elemento HTML (nomeId + comando que acessa o DOM)
  // userName.textContent = 'Marcos'

  // ser humano conta 12345678910
  // computador conta 012345678910
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGithubProfileInfos()

// ARROW FUNCTIONS
function nomeDaFunção(argumentos) {
  //code
}

// mesma coisa so que mais facil
argumento => {
  //code
}

// nao da pra chamar a arrow function igual uma function
