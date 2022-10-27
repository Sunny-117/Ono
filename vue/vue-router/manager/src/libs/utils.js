function formatRouterTree (data) {
  let parents = data.filter(p => p.pid === 0),
      children = data.filter(c => c.pid !== 0);

  dataToTree(parents, children);

  function dataToTree (parents, children) {
    parents.map((p) => {
      children.map((c, i) => {
        if (c.pid === p.id) {
          let _c = JSON.parse(JSON.stringify(children));
          _c.splice(i, 1);
          dataToTree([c], _c);

          if (p.children) {
            p.children.push(c);
          } else {
            p.children = [c];
          }
        }
      })
    })
  }
  
  return parents;
}

function generateRouter (userRouters) {
  let newRouters = userRouters.map((r) => {
    let routes = {
      path: r.path,
      name: r.name,
      component: () => import(`@/views/${r.name}`)
    }

    if (r.children) {
      routes.children = generateRouter(r.children);
    }

    return routes;
  });

  return newRouters;
}

export {
  formatRouterTree,
  generateRouter
}