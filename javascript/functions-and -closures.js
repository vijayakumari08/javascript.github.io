function createCounter() {
    let count = 0;

    return {
        increment: function() {
            count++;
            console.log(`Count: ${count}`);
        },
        decrement: function() {
            count--;
            console.log(`Count: ${count}`);
        },
        reset: function() {
            count = 0;
            console.log(`Count reset to: ${count}`);
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();

counter.increment(); 
counter.increment(); 
counter.decrement(); 
counter.reset();     
console.log(counter.getCount()); 
