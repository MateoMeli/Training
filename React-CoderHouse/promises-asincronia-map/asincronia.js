const action = () => {
    console.log("Holas")
}


const timeInterval = 5000;

setInterval(action, timeInterval);

const task = new Promise((resolve, reject) => {
    console.log("Termine")
    resolve();
}).then((result) => {
    console.log("Todo Ok")
});