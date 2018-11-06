const dirReduc = directions => {
  const [ n, s, w, e ] = [ 'NORTH', 'SOUTH', 'WEST', 'EAST' ];
  const opposites = { [n]: s, [s]: n, [w]: e, [e]: w };
  return directions.reduce((dirs, dir) => {
    if (dirs[dirs.length - 1] == opposites[dir]) {
      dirs.pop();
    }
    else dirs.push(dir);
    return dirs;
  }, []);
};
