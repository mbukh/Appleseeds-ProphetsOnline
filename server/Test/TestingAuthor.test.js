const request = require("supertest");
const app = require("../server.js");

test("add new author by tesing", async () => {
    const author = {
        name: "ismail",
        picture: "adads",
        personalInfo: "ProphetsOnline"
    };
    await request(app)
        .post("/Author")
        .send(author)
        .expect(201)
        .then((response) => {
            expect(response.body.author.name).toBe(author.name);
        });
}, 300000); // set timeout to 30 seconds