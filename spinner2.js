const steps = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   '];
let time = 0;


for (const step of steps) {
  setTimeout(() => {
    process.stdout.write(step);
  }, time);
  time += 200;
}