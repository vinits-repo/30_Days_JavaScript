
async function github() {
    try {
        let response = await fetch("https://api.github.com/users/vinits-repo")
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

github()