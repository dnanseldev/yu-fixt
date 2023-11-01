import App from "./app";

new App().server.listen(3500, () => {
  console.log("Application is running!");
});
