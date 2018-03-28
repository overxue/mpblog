import Fly from 'flyio/dist/npm/wx'
import { http } from './config'

const fly = new Fly()

export function getArticle (page = 1) {
  const url = `${http}/api/articles?page=${page}&include=categories`
  return fly.get(url).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    console.log(err)
  })
}
