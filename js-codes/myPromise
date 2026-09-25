class MyPromise {

    constructor(callback) {

        this.state = "pending";
        this.value = undefined;

        const resolve = (value) => {
            this.state = "fulfilled";
            this.value = value;
        };

        const reject = (error) => {
            this.state = "rejected";
            this.value = error;
        };

        callback(resolve, reject);
    }
}
