const cron = require("node-cron");
const boot = require("../boot/boot");

cron.schedule("0 0 18 5 * *", () => {
  console.log("running a task");
  boot.initializeAndamentoNazionale();
  boot.initializeRegioni();
  boot.initializeProvince();
});
