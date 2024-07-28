const positiveNum = () => {
    return new Promise((resolve, reject) => {
        const isPositiveNum = Math.random() > 0;
        setTimeout(() => {
            if (isPositiveNum) {
                resolve("Promise resolved successfully!");
            } else {
                reject(new Error("Promise rejected with an error!"));
            }
        }, 1000);
    });
}

async function promiseHandler() {
    try {
        let result = await positiveNum(); // Fixed function name here
        console.log(result);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

promiseHandler();
