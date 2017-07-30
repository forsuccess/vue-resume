//配置leancloud
import AV from 'leancloud-storage'

const appId = 'yCmQH5vYxGYb4j78452enFvk-gzGzoHsz'
const appKey = 'e6WBkxOwynO03TPvIs6qNlU5'

AV.init({
  appId,
  appKey
})

export default AV
