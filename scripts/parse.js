const collection = require('../node_modules/ng-zorro-antd/schematics/collection.json');
const keys = Object.keys(collection['schematics']);
function toUpperCamelCase(str) {
  return str.split('-').map(s => s.slice(0, 1).toUpperCase() + s.slice(1)).join('');
}

let routes = 'const routes: Routes = [\n';
routes += keys.map(key => {
    return `    { path: '${key}', component: ${toUpperCamelCase(key)}Component },`
}).join('\n');
routes += '\n];'
console.log(routes);

console.log(keys.map(key => `<app-${key}></app-${key}>`).join('\n'));