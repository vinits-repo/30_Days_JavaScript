class newCustomError extends Error{
    constructor(message){
        super(message);
        this.name = "NewCustomError"
    }
}

document.getElementById("btn").addEventListener("click", () => {
    try {
        throw new newCustomError("This is a new error.")
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
  });