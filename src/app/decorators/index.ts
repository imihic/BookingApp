

export function AppDecorator(config) {
  console.log(config.message);
  return function(target) {
    console.log('Decorated class - ', target);
  }
}
