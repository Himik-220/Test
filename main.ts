
const bootstrap = async (...args: any) => {
  console.log(`Starting the application`);
}

bootstrap().then(() => {
  process.exit(0);
})