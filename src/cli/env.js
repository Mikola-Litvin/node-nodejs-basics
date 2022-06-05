export const parseEnv = () => {
  Object.entries(process.env)
    .filter(item => item[0].match(/RSS_/))
    .forEach(item => {
      console.log(`${item[0]}=${item[1]}`)
    });
};

parseEnv();
