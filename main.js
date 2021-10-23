const linksSocialMedia = {
  github: 'barretoj20',
  linkedin: 'in/juliabarreto92529718b',
  behance: 'sbarretoju3401',
  twitter: 'jubarretoj',
  instagram: 'jubarretoj'
}

function changeLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    if (social == 'behance') {
      li.children[0].href = `https://${social}.net/${linksSocialMedia[social]}`
    } else {
      li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    }
  }
}

changeLinks()

function getUserInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userGithubLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getUserInfos()
