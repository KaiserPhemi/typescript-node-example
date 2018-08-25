"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// component
const App_1 = require("./App");
// port
const port = 5555;
// starts server
App_1.default.listen(port, (err) => {
    if (err) {
        return console.log(err);
    }
    return console.log(`Server listening on ${port}`);
});
//# sourceMappingURL=index.js.map