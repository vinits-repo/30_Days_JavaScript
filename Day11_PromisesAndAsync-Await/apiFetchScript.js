fetch("https://api.github.com/users/vinits-repo")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));



// using aysnc/await

async function fetchGitHubUser() {
    try {
      let response = await fetch("https://api.github.com/users/vinits-repo");
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  
  fetchGitHubUser();
  