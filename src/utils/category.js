import Fly from 'flyio/dist/npm/wx'
import { http } from './config'

const fly = new Fly()

export function getCategory () {
  const url = `${http}/api/categories`
  return fly.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getCategoryArticle (id) {
  const url = `${http}/api/categories/${id}/articles?include=categories`
  return fly.get(url).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    console.log(err)
  })
}
