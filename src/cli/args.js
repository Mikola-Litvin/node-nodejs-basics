export const parseArgs = () => {
  let args = process.argv.slice(2);

  function parse() {
    if (args.length === 0) return;

    if (args[0].match(/--/) && (args[1] !== undefined && !args[1].match(/--/))) {
      console.log(`${args[0].slice(2)} is ${args[1]}`);
      args = args.slice(2);
      parse();
    } else if (!args[0].match(/--/) && (args[1] !== undefined && !args[1].match(/--/))) {
      args = args.slice(2);
      parse();
    } else if (!args[0].match(/--/) && (args[1] !== undefined && args[1].match(/--/))) {
      args = args.slice(1);
      parse();
    } else if ((args[0].match(/--/) && (args[1] !== undefined && args[1].match(/--/)))
      || (args[0].match(/--/) && args[1] === undefined)) {
      console.log(`${args[0].slice(2)} is ''`);
      args = args.slice(1);
      parse();
    }
  }

  parse();
};

parseArgs();