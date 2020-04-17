const constObject = new Proxy(new Object(), {
    set(obj, key, value) {
        try {
            Object.defineProperty(constObject, key, {value, writable:false});
            return true;
        } catch {
            return false;
        }
    }
});

constObject.value = 2;
console.log(constObject.value);
constObject.value = 3;
console.log(constObject.value);
