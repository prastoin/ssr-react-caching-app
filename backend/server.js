import SSRCaching from "electrode-react-ssr-caching";
import { renderToString } from "react-dom/server";
import MyComponent from "./mycomponent";
import express from 'express';

const cacheConfig = {
    components: {
        "Component1": {
            strategy: "simple",
            enable: true
        },
        "Component2": {
            strategy: "template",
            enable: true
        }
    }
}

SSRCaching.enableCaching();
SSRCaching.setCachingConfig(cacheConfig);
console.log('Is it running ?');

const PORT = 8080;
const app = express()
app.get("/", function(req, res) {
    res.send("Hello World")
})

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));