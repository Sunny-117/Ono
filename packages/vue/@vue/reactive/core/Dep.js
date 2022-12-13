export default class Dep {
    static effectCB = null;
    constructor() {
        this.effectMap = new WeakMap();
    }
    collect(target, key) {
        const { effectCB } = Dep;
        if (effectCB) {
            let depMap = this.effectMap.get(target);
            if (!depMap) {
                depMap = new Map();
                this.effectMap.set(target, depMap);
            }
            let deps = depMap.get(key);
            if (!deps) {
                deps = new Set()
                depMap.set(key, deps);
            }
            deps.add(effectCB)
        }
    }
    notify(target, key, value, oldValue) {
        const depMap = this.effectMap.get(target);
        if (!depMap) return;
        const deps = depMap.get(key);
        deps.forEach(dep => {
            const newValue = dep(value, oldValue);
            if (dep.computedRef) {
                dep.computedRef.value = newValue
            }
        })
    }
}
