import { isObject } from './utils'
import Dep from './Dep'
import ComputedRef from './computedRef'
const dep = new Dep()
export function reactive(data) {
    return new Proxy(data, {
        get(target, key) {
            const value = Reflect.get(target, key)
            dep.collect(target, key)
            return isObject(value) ? reactive(value) : value
        },
        set(target, key, value) {
            const oldValue = target[key]
            const res = Reflect.set(target, key, value)
            dep.notify(target, key, value, oldValue)
            return res
        }
    })
}


export function watchEffect(callback) {
    Dep.effectCB = callback
    callback()
    Dep.effectCB = null
}


export function watch(depFn, callback) {
    Dep.effectCB = callback
    depFn(depFn)
    Dep.effectCB = null
}

export function computed(callback) {
    Dep.effectCB = callback
    const value = callback()
    const computedRef = new ComputedRef(value)
    Object.defineProperty(callback, 'computedRef', {
        value: computedRef
    })
    Dep.effectCB = null
    return computedRef
}