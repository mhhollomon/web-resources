import './scss/styles.scss'
//import * as bootstrap from 'bootstrap'
import Alpine from 'alpinejs'
import tags from './tags.ts'

import bookmarks from './bookmarks.ts'

// suggested in the Alpine docs:
// make Alpine on window available for better DX
window.Alpine = Alpine

Alpine.store('activeTags', [])
Alpine.store('tagLogic', "and")

Alpine.data('tag_data', tags)
Alpine.data('bookmark_data', bookmarks)

Alpine.start()